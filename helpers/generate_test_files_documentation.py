import typing as t
import os
import dataclasses as dc

ROOT_PATH = os.getcwd()
EXAMPLE_SRC_DIR = os.path.join(ROOT_PATH, "e2e_test/Cairo")
TEST_FILES_DIR = os.path.join(ROOT_PATH, "test_files")


@dc.dataclass
class Example():
    name: str
    src_path: str
    args_path: str
    memory_path: str
    trace_path: str
    private_input_path: str
    public_input_path: str
    proof_path: str
    prover_config_path: str
    prover_params_path: str
    full_description: str
    short_description: str
    outputs_format: str
    args_format: str
    memory_layout: str
    

class Parser():

    @staticmethod
    def get_lines_after(keyword: str, n: int, comments: t.List[str]) -> t.Tuple[str, int]:
        ''' Parses module comments and extracts data found on the next :n lines 
        after line with keyword. Trims result. 
        
        Args:
            keyword: String to search among comment lines.
            n: the number of lines to extract after keyword.
        Returns:
            A tuple of two elements: 
            - the extracted data as a string.
            - the index of the line with keyword.
        Raises:
            None
        '''
        
        result = None
        start_idx = None
        
        for idx, line in enumerate(comments):
            if keyword.lower() in line.lower():
                start_idx = idx
                
        if start_idx:
            # 2 means: exclude line with keywork and empty line after
            result = (''.join(comments[start_idx + 2:start_idx + 2 + n])).strip()
            
        return result, start_idx

class ExampleBuilder():
        
    @staticmethod
    def build_from_file(file_name: str) -> Example:
        example_name = file_name.split(".")[0]
        
        absolute_src_path = os.path.join(EXAMPLE_SRC_DIR, p)
        absolute_args_path = os.path.join(EXAMPLE_SRC_DIR, "{}_args.json".format(example_name))
        absolute_memory_path = os.path.join(TEST_FILES_DIR, example_name, "memory.b")
        absolute_trace_path = os.path.join(TEST_FILES_DIR, example_name, "trace.b")
        absolute_public_input_path = os.path.join(TEST_FILES_DIR, example_name, "public_input.json")
        absolute_private_input_path = os.path.join(TEST_FILES_DIR, example_name, "private_input.json")
        absolute_proof_path = os.path.join(TEST_FILES_DIR, example_name, "proof.json")
        
        absolute_base_prover_params_path = os.path.join(TEST_FILES_DIR, "cpu_air_params.json")
        absolute_proover_params_path = os.path.join(TEST_FILES_DIR, "{}_cpu_air_params.json".format(example_name))
        if not os.path.exists(absolute_proover_params_path):
            absolute_proover_params_path = absolute_base_prover_params_path
            
        absolute_base_prover_config_path = os.path.join(TEST_FILES_DIR, "cpu_air_prover_config.json")    
        absolute_prover_config_path = os.path.join(TEST_FILES_DIR, "{}_cpu_air_prover_config.json".format(example_name))
        if not os.path.exists(absolute_prover_config_path):
            absolute_prover_config_path = absolute_base_prover_config_path

        with open(absolute_src_path) as f:
            content_lines = f.readlines()
            module_comments = [l[4:] or "\n" for l in content_lines if "//!" in l]
            
            if not module_comments:
                # This module does not have any comments we will skip it
                return None
            
            short_description = module_comments.pop(0)
            args_format, args_start = Parser.get_lines_after("input arguments:", 1, module_comments)
            outputs_format, outputs_start = Parser.get_lines_after("output values:", 1, module_comments)
            memory_layout, memory_layout_start = Parser.get_lines_after("memory layout:", 1, module_comments)
            
            extracted_parts = filter(lambda x: x, [args_start, outputs_start, memory_layout_start])
            if not any(extracted_parts):
                # This module does not have any of the required parts we will skip it
                return None
            
            full_description_ends = min(filter(lambda x: x, [args_start, outputs_start, memory_layout_start]))
            full_description = "".join(module_comments[1:full_description_ends-1])
            
            # Return example convert all paths to relative
    
            def check_path(path):
                if not os.path.exists(path):
                    return None
                else:
                    return path.replace(ROOT_PATH, "..")
    
            return Example(
                name = example_name,
                src_path = check_path(absolute_src_path),
                args_path = check_path(absolute_args_path),
                memory_path = check_path(absolute_memory_path),
                trace_path = check_path(absolute_trace_path),
                private_input_path = check_path(absolute_private_input_path),
                public_input_path = check_path(absolute_public_input_path),
                proof_path = check_path(absolute_proof_path),
                prover_config_path = check_path(absolute_prover_config_path),
                prover_params_path = check_path(absolute_proover_params_path),
                full_description = full_description,
                short_description = short_description.strip(),
                args_format = args_format,
                outputs_format = outputs_format,
                memory_layout = memory_layout
            )

def render(examples):
    from jinja2 import Environment, FileSystemLoader, select_autoescape
    env = Environment(
        loader=FileSystemLoader(os.path.join(ROOT_PATH, "./helpers/templates")),
    )
    
    template = env.get_template('examples.md.j2') 
    return template.render(name="World", examples=examples)

if __name__ == "__main__":

    examples = []
    
    for p in os.listdir(os.path.join(ROOT_PATH, "./e2e_test/Cairo")):
        if ".cairo" not in p:
            continue
        
        example = ExampleBuilder.build_from_file(p)
        if not example:
            print("Skipping poorly marked up module:", p)
            # Skip poorly marked up modules. (These are the ones that are not working)
            continue
        
        examples.append(example)
            
    with open(os.path.join(ROOT_PATH, "./docs/pages/example.md"), "w+") as f:
        f.write(render(examples))
    
