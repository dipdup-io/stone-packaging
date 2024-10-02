# Verifying Stone Proof Using the Binary

This guide will walk you through how to verify a Stone proof using the provided binaries. It includes steps for both setting up the environment using Docker and manually installing the required dependencies.

- Ensure Docker is installed on your machine. You can refer to [Docker’s official documentation](https://docs.docker.com/get-docker/) for installation instructions.

### Building the Docker Image

Clone the repository:

```bash
git clone https://github.com/starkware-libs/stone-prover.git
```

Then build the Docker image:

```bash
cd stone-prover
docker build --tag prover .
```

- Once the Docker image is built, the prover and verifier executables can be retrieved:

```bash
container_id=$(docker create prover)
docker cp -L ${container_id}:/bin/cpu_air_prover .
docker cp -L ${container_id}:/bin/cpu_air_verifier .
```

## Creating and Verifying a Proof of a Cairo Program

1. Navigate to the Example Test Directory:

   - Start by navigating to the Cairo example test directory.

   ```bash
   cd e2e_test/Cairo
   ```

2. Install the cairo-vm/cairo1-run

```bash
git clone https://github.com/lambdaclass/cairo-vm.git
cd cairo-vm/cairo1-run
make deps
```

3. Compile and run the program to generate the prover input files:

```bash
cargo run ../../fibonacci.cairo \
    --layout=small \
    --air_public_input=fibonacci_public_input.json \
    --air_private_input=fibonacci_private_input.json \
    --trace_file=fibonacci_trace.bin \
    --memory_file=fibonacci_memory.bin \
    --proof_mode
```

4. Then Run the prover:

```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=../../cpu_air_prover_config.json \
    --parameter_file=../../cpu_air_params.json
```

The proof will be stored in the file`fibonacci_proof.json`.

## Verifying the Proof

- Run the verifier:

```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```
