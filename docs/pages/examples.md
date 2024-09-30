# Stone Prover Examples Documentation

## Overview
Welcome to the **Stone Prover** documentation using **Examples** If you’re diving into the world of Cairo programs, you’re in the right place. The Stone Prover is a handy tool for generating and verifying proofs, ensuring that your computations are spot on within the Cairo framework. Think of it as your proof-generating buddy, helping you confirm that everything runs smoothly.


## Reference Test Files

### 1. Cairo Sources
- **Fibonacci Cairo Source**: [`fibonacci.cairo`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci.cairo)  
  - **Description**: This file contains the Cairo source code that implements the Fibonacci sequence logic. In it, you’ll find the `fibonacci` function, which takes an integer input and computes the Fibonacci term at that position. Cairo is a low-level language for writing STARK-friendly code, so it’s efficient for running algorithms like this. The source code showcases Cairo’s built-in operations and memory management features, making it a solid example for understanding how to implement computations.

### 2. Execution Artifacts
- **Trace**: [`fibonacci_trace.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci_trace.json)  
  - **Description**: Here’s where the magic gets recorded! This file contains a detailed execution trace of the Fibonacci program, documenting each step of the computation process. It provides a clear view of inputs and outputs at every stage, so you can easily verify how the program executed. Each entry shows you what happened, making it a key resource for debugging and ensuring everything is in order.

- **Memory**: [`fibonacci_memory.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci_memory.json)  
  - **Description**: This file captures the state of memory during the execution of the program. It reveals how the program’s variables are stored and updated, giving you insight into the memory layout. Understanding this is essential for optimizing performance and ensuring your program runs efficiently without any memory mishaps.

- **Input**: 
  - **Private Input**: [`fibonacci_private_input.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci_private_input.json)  
    - **Description**: This file contains private input values for the Fibonacci execution. It references the trace and memory files while providing placeholders for cryptographic operations, like Pedersen hashes and range checks. Keeping sensitive data secure is a must, and this input file helps maintain confidentiality during the proof generation process.
    - **Content**:
      ```json
      {
          "trace_path": "./fibonacci_trace.json",
          "memory_path": "./fibonacci_memory.json",
          "pedersen": [],
          "range_check": [],
          "ecdsa": []
      }
      ```

  - **Public Input**: [`fibonacci_public_input.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci_public_input.json)  
    - **Description**: This file lays out the public input values needed for executing the Fibonacci program. It specifies the input layout and other parameters essential for execution, such as memory segments and public addresses. This information is crucial for ensuring the program can run with the right parameters, making public verification of results possible.
    - **Key Elements**:
      - `layout`: "small" (for efficient memory use)
      - `n_steps`: 512 (the total steps in the computation)
      - Memory segments for program execution, output, and other crucial operations

### 3. Prover Parameters & Config
- **Prover Config**: [`cpu_air_prover_config.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/cpu_air_prover_config.json)  
  - **Description**: This configuration file includes vital parameters for the CPU AIR prover, influencing how proofs are generated. It specifies settings like whether to store the full Linearized Data Encoding (LDE) and how many tasks the prover should handle per segment. These parameters guide the prover’s execution strategy, helping it perform efficiently during proof generation.

  - **Content**:
    ```json
    {
        "cached_lde_config": {
            "store_full_lde": false,
            "use_fft_for_eval": false
        },
        "constraint_polynomial_task_size": 256,
        "n_out_of_memory_merkle_layers": 1,
        "table_prover_n_tasks_per_segment": 32
    }
    ```

- **Prover Parameters**: [`cpu_air_params.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/cpu_air_params.json)  
  - **Description**: This file outlines various parameters for the prover, including field settings and STARK-specific configurations. These parameters influence how the prover interacts with the Cairo program and its cryptographic constructs, ensuring it can accurately handle complex tasks while maintaining security standards.

  - **Content**:
    ```json
    {
        "field": "PrimeField0",
        "stark": {
            "fri": {
                "fri_step_list": [0, 4, 3],
                "last_layer_degree_bound": 64,
                "n_queries": 18,
                "proof_of_work_bits": 24
            },
            "log_n_cosets": 4
        },
        "use_extension_field": false
    }
    ```

### 4. Proof
- **Proof File**: [`fibonacci_proof.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci_proof.json)  
  - **Description**: This is the generated proof for the execution of the Fibonacci program. It contains all the necessary data to verify that the computations were executed correctly according to the Cairo framework. Anyone can use this proof to ensure that the output matches what they expect, which is great for maintaining transparency and trust in the computation process.

## Usage Instructions

### Creating a Proof
Ready to create a proof for the Fibonacci program? It’s super easy! Just run the following command in your terminal:

```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
