# Running Stone Prover

This guide provides step-by-step instructions on how to use the Stone Prover to create and verify proofs for Cairo programs. Stone Prover is a tool developed by StarkWare to facilitate proof generation and verification in the Cairo programming environment. This guide is based on the official [Stone Prover documentation](https://github.com/starkware-libs/stone-prover?tab=readme-ov-file#creating-and-verifying-a-proof-of-a-cairo-program).

## Creating and Verifying a Proof

To create and verify a proof using Stone Prover, follow these steps:

#### 1. Download the Stone Prover binary::

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

Navigate to the example test directory:

```
  cd /tmp/stone-packaging/test_files/
```

Copy or download the binary files from the latest release to this directory.

#### 2. Run the prover to generate a proof:

Execute the prover with the necessary input arguments to generate a proof:

```bash
./stone_prover_file_name \
  --out_file=example_proof.json \
  --program_name=fibonacci \
  --parameter_file=cpu_air_params.json \
  --prover_config_file=cpu_air_prover_config.json \
  --public_input_file=example_public_input.json \
  --private_input_file=example_private_input.json \
  --air_file=cpu_air.cairo \
  --log_file=example_logs.txt
```

#### 3. Verify the generated proof:

Similarly, you can verify proofs within the Docker container:
Run the verifier to verify the proof:

```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

This command verifies the proof located at `/data/example_proof.json`

## Input Arguments Explanation

- `--out_file`: Specifies the output file for the generated proof.
- `--program_name`: The name of the program being proved.
- `--parameter_file`: File containing the proving system parameters.
- `--prover_config_file`: Configuration file for the prover.
- `--public_input_file`: JSON file with public inputs for the proof.
- `--private_input_file`: JSON file with private inputs for the proof.
- `--air_file`: The AIR (Algebraic Intermediate Representation) file for the CPU.
- `--log_file`: File to store the prover logs.
- `--proof_file`: The proof file to be verified (used in verification step).

## Docker-based Setup

The official Stone Prover repository does not provide Docker instructions. However, if you want to use Docker, you would need to create a Dockerfile that:

1. Starts from a base image with the necessary build tools (e.g., Ubuntu with build-essential).
2. Installs Bazel and other dependencies.
3. Clones the Stone Prover repository.
4. Builds the prover using Bazel.

Here's a basic example of what such a Dockerfile might look like:

```dockerfile
FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
 git \
 build-essential \
 curl \
 && rm -rf /var/lib/apt/lists/*

# Install Bazel
RUN curl -fsSL https://bazel.build/bazel-release.pub.gpg | gpg --dearmor > bazel.gpg
RUN mv bazel.gpg /etc/apt/trusted.gpg.d/
RUN echo "deb [arch=amd64] https://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list
RUN apt-get update && apt-get install -y bazel

# Clone Stone Prover repository
RUN git clone https://github.com/starkware-libs/stone-prover.git /stone-prover

# Set working directory
WORKDIR /stone-prover

# Build the prover
RUN bazel build //src/main/prover:stone_prover

# Set entrypoint
ENTRYPOINT ["bazel-bin/src/main/prover/stone_prover"]

```

### To use this Docker setup:

Download the Docker image. The stone-prover package includes both cpu_air_prover and cpu_air_verifier:

```
  docker pull ghcr.io/dipdup-io/stone-packaging/stone-prover:latest
```

1.  Build the Docker image:

```bash
docker build -t stone-prover .
```

2. Run the prover using Docker with a volume mounted:

```bash
  docker run --entrypoint /bin/bash -v /tmp/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_prover \
   --out_file=fibonacci_proof.json \
   --private_input_file=fibonacci_private_input.json \
   --public_input_file=fibonacci_public_input.json \
   --prover_config_file=cpu_air_prover_config.json \
   --parameter_file=cpu_air_params.json"
```

To verify the proof:

```
  docker run --entrypoint /bin/bash -v /tmp/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_verifier --in_file=fibonacci_proof.json && echo 'Successfully verified example proof.'"
```

Note: This Docker setup is not officially provided or supported by the Stone Prover repository. It's a suggested approach based on the repository's build instructions.

## Troubleshooting

### Common Issues

- **Docker not found:** Ensure Bazel is installed correctly by running `docker --version`. If not installed, follow the [Docker installation guide](https://docs.docker.com/get-started/get-docker/).

- **Build Failures:** Ensure all dependencies are correctly installed. Refer to the [Stone Prover repository](https://github.com/starkware-libs/stone-prover) for any additional setup instructions.

  here is a link to [basel documentation](https://bazel.build/) if needed

- **Docker Build Errors:** Make sure your Dockerfile syntax is correct and that you have a stable internet connection to download dependencies.
