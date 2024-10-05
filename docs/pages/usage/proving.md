# Creating and verifying a proof Running Stone Prover

This guide provides step-by-step instructions on how to use the Stone Prover to create and verify proofs for Cairo programs.This guide is based on the official [Stone Prover documentation](https://github.com/starkware-libs/stone-prover?tab=readme-ov-file#creating-and-verifying-a-proof-of-a-cairo-program).

## Creating and Verifying a Proof
To create and verify a proof using Stone Prover, follow these steps:

- Clone/download the repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

- Navigate to the example test directory

```bash
cd /tmp/stone-packaging/test_files/
```

- Download or Copy the Binary Files:

To download binaries, please refer to the [Installation Guide](../install/binaries.md)

- Run the prover to generate a proof:

```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
```

The proof will be available at `fibonacci_proof.json`.

- Run the verifier to verify the proof:

```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

## Download Minimal Docker Images for x86_64

Download the Docker image. The stone-prover package includes both `cpu_air_prover` and `cpu_air_verifier`:

```bash
docker pull ghcr.io/dipdup-io/stone-packaging/stone-prover:latest
```

## Creating and Verifying a Test Proof Using Docker

- First, ensure Docker is installed on your machine. For installation instructions, check [Docker’s official documentation](https://docs.docker.com/get-docker/)

1. Clone the Repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

2. Run the Docker Container to generate the Proof

Run the container with a volume mounted to the local repository directory:

```bash
docker run --entrypoint /bin/bash -v /tmp/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json"
```

The proof will be created at `test_files/fibonacci_proof.json.`.

3. Run the verifier to validate the Proof Using Docker

```bash
docker run --entrypoint /bin/bash -v /tmp/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_verifier --in_file=fibonacci_proof.json && echo 'Successfully verified example proof.'"
```
