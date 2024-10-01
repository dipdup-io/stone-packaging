# Stone Prover Examples Documentation


## Reference Test Files

This section outlines the key files used in testing the Stone Prover with Cairo programs. These files are organized into different categories, each serving a crucial role in proof generation and verification. Below is a list of the main components for each test scenario:

### 1. Cairo Sources
- **Fibonacci Cairo Source**: [`fibonacci.cairo`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci.cairo)  
  - **Description**: This file contains the Cairo source code for computing the Fibonacci sequence using `felt252` as the core data type. It recursively computes Fibonacci terms up to a given value `n` and returns the results in an array.It’s a simple yet effective example of implementing computational logic in Cairo.

 - **Code**:
    ```rust
    use core::felt252;

    fn main() -> Array<felt252> {
        let n = 10;
        let mut result = array![];
        result.append(fib(1, 1, n));
        result
    }

    fn fib(a: felt252, b: felt252, n: felt252) -> felt252 {
        match n {
            0 => a,
            _ => fib(b, a + b, n - 1),
        }
    }
    ```
  - **Explanation**:
    - `felt252`: A type in Cairo that represents field elements, where values are limited by a modulus of 2^252.
    - The `main` function initializes `n` (the number of Fibonacci terms) and starts the Fibonacci sequence with the initial values `a = 1` and `b = 1`.
    - The recursive `fib` function computes Fibonacci numbers. The base case returns `a` when `n` is 0, while the recursive case reduces `n` by 1 and swaps the values of `a` and `b` until the result is computed.


### 2. Execution Artifacts
Execution artifacts include the trace and memory files generated when running the Cairo programs.

- **Trace**: [`fibonacci_trace.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci_trace.json)  
  - **Description**: A detailed step-by-step execution log of the Fibonacci program. This file provides insight into the program’s execution, making it a key tool for debugging and verification.
  
- **Memory**: [`fibonacci_memory.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci_memory.json)  
  - **Description**: Shows the memory state during execution, including how `felt252` values are stored and manipulated.It records how variables are stored and changed throughout the run, helping developers ensure proper memory handling.

- **Input Files**:
  - **Private Input**: [`fibonacci_private_input.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci_private_input.json)  
    - **Description**: Contains cryptographic inputs like Pedersen hashes and range checks and other sensitive data used during the proof generation process.  
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

  - **Public Input**: [`fibonacci_public_input.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci_public_input.json)  
    - **Description**: Lays out the public input values required for running the Fibonacci program. This file ensures the correct parameters, such as the number of steps and memory segments, are applied.
    - **Content**:
      ```json
      {
          "layout": "small",
          "n_steps": 512,
          "program": "<program_memory_segment>",
          "output": "<output_memory_segment>"
      }
      ```

### 3. Prover Parameters & Config
These configuration files dictate how the prover operates, including how the proof is generated.

- **Prover Config**: [`cpu_air_prover_config.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/cpu_air_prover_config.json)  
  - **Description**: Contains settings that control how the prover behaves, such as task sizes and memory usage. This configuration remains the same across all test scenarios.
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

- **Prover Parameters**: [`cpu_air_params.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/cpu_air_params.json)  
  - **Description**: Specifies cryptographic and STARK-related parameters used during proof generation. These influence the prover's interaction with the Cairo program and cryptographic constructs.
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
- **Proof File**: [`fibonacci_proof.json`](https://github.com/dipdup-io/stone-packaging/tree/master/test_files/fibonacci/fibonacci_proof.json)  
  - **Description**: This is the generated proof of the Fibonacci program execution. It can be used to verify that the computation was executed correctly according to the Cairo framework.

## Test Cases Overview
Below is a summary of the available test cases, detailing what each Cairo program does, its layout, and its built-ins:

| Program          | Description                                         | Layout   | Built-ins          |
|------------------|-----------------------------------------------------|----------|--------------------|
| Fibonacci        | Computes Fibonacci sequence terms using recursive `felt252`.                  | Small    | Range Check, ECDSA |


## Usage Instructions

### Creating a Proof
To generate a proof for the Fibonacci program, use the following command:

```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
