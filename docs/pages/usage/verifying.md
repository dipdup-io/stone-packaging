# Verifying Stone Proof Using the Binary

This guide will walk you through how to verify a Stone proof using the provided binaries. It includes steps for both setting up the environment using Docker and manually installing the required dependencies.

## Creating and Verifying a Test Proof Using Binaries

- Clone the repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

- Navigate to the example test directory

```bash
cd /tmp/stone-packaging/test_files/
```

- Download the Binary Files:

You can download the binary files by navigating to the [Installation Guide](https://github.com/dipdup-io/stone-packaging/blob/master/docs/pages/install/binaries.md)

- Run the prover:

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

- Ensure Docker is installed on your machine. You can refer to [Docker’s official documentation](https://docs.docker.com/get-docker/) for installation instructions.

1. Clone the Repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

2. Run the Docker Container to Create the Proof

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

3. Verify the Proof Using Docker

```bash
docker run --entrypoint /bin/bash -v /tmp/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_verifier --in_file=fibonacci_proof.json && echo 'Successfully verified example proof.'"
```
