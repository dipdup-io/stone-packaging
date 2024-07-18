# Stone Packaging

This project provides various forms of distribution for [Stone](https://github.com/starkware-libs/stone-prover) executables.

## About

The goal of this project is to reduce the friction and time to start producing proofs using Stone. More broadly the aim is to make Stone a &#34;known&#34; piece of infra that can be easily integrated into application specific workflows and maintained with ease.

## Roadmap

- [x] Releases with static binaries for x86_64
- [x] Minimal docker images for x86_64
- [ ] Native packages for Debian/Ubuntu
- [ ] Native packages for Fedora
- [ ] ARM builds

Follow-up work:
- Technical docs for file formats (inputs, outputs, memory, trace, proof), test data
- Integrated proof decomposition (related to https://github.com/zksecurity/stark-evm-adapter)
- Observability suite (metrics, dashboard, configurable logging)
- Stwo support

# Instructions for use

## Download binaries for x86_64

1) Find the latest release version.
2) Download the necessary binaries. For example:

```bash
wget https://github.com/dipdup-io/stone-packaging/releases/download/v2.0.1/cpu_air_prover
wget https://github.com/dipdup-io/stone-packaging/releases/download/v2.0.1/cpu_air_verifier
```

Make the downloaded file executable.

```bash
chmod +x cpu_air_prover
```

### Creating and verifying a test proof using binaries

Clone the repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git
```

Navigate to the example test directory (`test_files/`):

```bash
cd test_files/
```

Copy or download from latest release the binary files to this directory.

Run the prover:
```bash
./cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
```

The proof is now available in the file `fibonacci_proof.json`.

Finally, run the verifier to verify the proof:
```bash
./cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

## Download minimal docker images for x86_64

Download the necessary package. Package stone-prover contains cpu_air_prover and cpu_air_verifier. For example:

```bash
docker pull ghcr.io/dipdup-io/stone-packaging/stone-prover:latest
```

### Creating and verifying a test proof using docker images

Clone the repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git
```

Navigate to the example test directory (`test_files/`):

```bash
cd test_files/
```

Run docker images with volume:

```bash
docker run --entrypoint /bin/bash -v /your_directory/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json"
```

The proof is now available in the file test_files/fibonacci_proof.json

Run the verifier to verify the proof:

```bash
docker run --entrypoint /bin/bash -v /your_directory/stone-packaging/test_files:/app/prover ghcr.io/dipdup-io/stone-packaging/stone-prover -c "cd /app/prover && exec cpu_air_verifier --in_file=fibonacci_proof.json && echo 'Successfully verified example proof.'"
```
