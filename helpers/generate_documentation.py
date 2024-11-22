import typing as t
import os

def title(text) -> str:
    return """
    ---
    title: {text}
    ---\n\n
    """.format(text=text)
    
def header(text, size = 1) -> str:
    return """{mark} {text}""".format(
        mark = "#" * size,
        text = text
    )
    
def table(columns, data_rows) -> str:
    
    row_to_string = lambda row_data: "| " + " | ".join(row_data) + " |\n"   
    
    rows = [row_to_string(columns)] 
    rows += map(row_to_string, data_rows)

    return "".join(rows)

class Parser():

    @staticmethod
    def get_lines_after(keyword: str, n: int, comments: t.List[str]) -> t.Tuple[str, int]:
        '''
        
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


ROOT_PATH = os.getcwd()

cairo_tests = os.path.join(ROOT_PATH, "./e2e_test/Cairo")
for p in os.listdir(cairo_tests):
    if ".cairo" not in p:
        continue
    
    if "basic" not in p:
        continue
    
    EXAMPLE_SRC_DIR = os.path.join(ROOT_PATH, "./e2e_test/Cairo")
    TEST_FILES_DIR = os.path.join(ROOT_PATH, "./test_files/")
    
    example_name = p.split(".")[0]
    
    source_file_path = os.path.join(EXAMPLE_SRC_DIR, p)
    
    with open(source_file_path) as f:
        content_lines = f.readlines()
        module_comments = [l[4:] or "\n" for l in content_lines if "//!" in l]
        
        short_description = module_comments.pop(0)
        inputs, inputs_start = Parser.get_lines_after("input arguments:", 1, module_comments)
        outputs, outputs_start = Parser.get_lines_after("output values:", 1, module_comments)
        memory_layout, memory_layout_start = Parser.get_lines_after("memory layout:", 1, module_comments)
        
        full_description_ends = min(inputs_start, outputs_start, memory_layout_start)
        full_description = "".join(module_comments[1:full_description_ends-1])
        
        relative_file_path = source_file_path.replace(ROOT_PATH, "")
        
        prover_params = source_file_path.replace(ROOT_PATH, "")
        
        print("=============")
        print(short_description)
        print("=============")
        print(full_description)
        print("=============")
        print(outputs)
        print("=============")
        print(memory_layout)
        print("=============")


outputmd = title("Examples")
