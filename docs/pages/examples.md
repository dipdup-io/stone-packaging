# Stone Prover Examples Documentation


This documentation outlines the reference test files used in Cairo program execution for the Stone Prover. These files are used to generate and verify cryptographic proofs.

## Stone Prover Reference Test Files

The files for each test case are categorized into four main groups:

1. **Cairo Source Files**: Programs written in Cairo.
2. **Execution Artifacts**: Files generated during program execution (e.g., trace, memory dumps).
3. **Prover Parameters and Configurations**: Parameters for controlling the prover's behavior.
4. **Proof Files**: Final output files containing cryptographic proofs.

### Test Files

For each test case, files are organized as follows:

1. **Cairo Source Files**  
   These contain Cairo programs that perform their specific cryptographic or mathematical operations.

   Examples:
   - `fibonacci.cairo`
     - **Path**: `e2e_test/Cairo/fibonacci.cairo`
     - **Arguments**: JSON file input with initial values for the Fibonacci sequence.
   - `ecdsa.cairo`
     - **Path**: `e2e_test/Cairo/ecdsa.cairo`
    - `bitwise.cairo`
         - **Path**: `e2e_test/Cairo/bitwise.cairo`
    - `basic.cairo`
         - **Path**: `e2e_test/Cairo/basic.cairo`
    - `hash_pedersen.cairo`
         - **Path**: `e2e_test/Cairo/hash_pedersen.cairo`
    - `hash_poseidon.cairo`
         - **Path**: `e2e_test/Cairo/poseidon.cairo`
    - `keccak.cairo`
         - **Path**: `e2e_test/Cairo/keccak.cairo`
2. **Execution Artifacts**  
   Generated during the program execution. Each test case has the following execution artifacts:
   
   - **Trace File** (`trace.b`): Contains execution trace.
     - Example: `test_files/fibonacci/trace.json`
   - **Memory File** (`memory.b`): Stores the program’s memory state.
     - Example: `test_files/fibonacci/memory.b`
   - **Private Input** (`private_input.json`): Contains private input data.
     - Example: `test_files/fibonacci/private_input.json`
   - **Public Input** (`public_input.json`): Public data shared with the prover.
     - Example: `test_files/fibonacci/public_input.json`

3. **Prover Parameters & Configurations**  
   The prover parameters and configuration files define how the prover operates, including settings for FRI (Fast Reed-Solomon IOP) related parameters and degree bounds, as well as other aspects that control the prover's behavior. These settings also affect the proof generation process.

    #### Examples:
    - cpu_air_params_integrity.json
    - ecdsa_cpu_air_params.json
    - hash_pedersen_cpu_air_params.json
    - hash_poseidon_cpu_air_params.json

    ####  Parameters and Configuration

    All configurations use "field": "PrimeField0", which indicates that the STARK system operates over a prime field.

    **a. Configuration Params:**

    - "field": "PrimeField0"
    - **FRI (Fast Reed-Solomon Interactive Oracle Proofs of Proximity)**: The fri_step_list in the configuration params defines the steps of the FRI protocol, determining domain reductions in each step:

     - **First Config**: [0, 4, 3] (shorter reduction, followed by larger reductions).
    - **Second Config**: [4, 4, 4, 3] (consistent reductions, with a final step of 3).
    - **Third Config**: [4, 4, 4] (three consistent reductions of 4).
    - **Fourth Config**: [4, 4, 4, 1] (three reductions of 4, with a final smaller reduction of 1).

    - "log_n_cosets": 4: Determines the number of cosets in the logarithmic domain, impacting polynomial evaluations.

    **b. Hashes:**

    - "channel_hash": "poseidon3": Poseidon hash function is used in the prover's channel.
    - "pow_hash": "keccak256": Keccak256 is used for Proof of Work.
    - "statement.page_hash": "pedersen" (in the first configuration): Pedersen hash is used for data commitments.

4. **Proof Files**  
   The final output of the prover after successful execution. Proofs are stored as JSON files.

   - Example: `test_files/fibonacci/proof.json`

> **Note**: The `cpu_air_prover_config.json` is shared across all test cases.

## List of test cases

Below is a table listing each test case, along with a short description, layout, and builtins used in each case.

| Test Case          | Description                                   | Layout | Builtins     |
|--------------------|-----------------------------------------------|--------|--------------|
| `fibonacci.cairo`   | Calculates Fibonacci sequence                 | small  | default      |
| `ecdsa.cairo`       | Implements ECDSA signature verification       | large  | ecdsa_builtin|
| `hash_pedersen.cairo` | Computes Pedersen hash                      | large  | pedersen_hash|
| `hash_poseidon.cairo` | Computes Poseidon hash                      | small  | poseidon3    |

### Adding New Test Cases

To add new test cases, follow the same folder structure as the `test_files/fibonacci` directory:

- Create subfolders for each test in `test_files/` (e.g., `test_files/ecdsa`).
- Include execution artifacts (trace, memory, input files), prover parameters, and proof files for each case.

## Creating and Verifying Proofs

To run a test case like `fibonacci.cairo`, follow these steps:

1. **Navigate to the test directory**:
    ```bash
    cd e2e_test/Cairo
    ```

2. **Install cairo-vm/cairo1-run**:
    ```bash
    git clone https://github.com/lambdaclass/cairo-vm.git
    cd cairo-vm/cairo1-run
    make deps
    ```

3. **Compile and run the Cairo program**:
    ```bash
    cargo run ../../fibonacci.cairo \
        --layout=small \
        --air_public_input=fibonacci_public_input.json \
        --air_private_input=fibonacci_private_input.json \
        --trace_file=fibonacci_trace.bin \
        --memory_file=fibonacci_memory.bin \
        --proof_mode
    ```

4. **Run the prover**:
    ```bash
    cpu_air_prover \
        --out_file=fibonacci_proof.json \
        --private_input_file=fibonacci_private_input.json \
        --public_input_file=fibonacci_public_input.json \
        --prover_config_file=../../cpu_air_prover_config.json \
        --parameter_file=../../cpu_air_params.json
    ```

5. **Verify the proof**:
    ```bash
    cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
    ```
