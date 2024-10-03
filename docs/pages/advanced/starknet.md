## Verifying Stone proofs on Starknet

This guide provides detailed instructions on creating and verifying Stone proofs on Starknet as well as how to deploy integrity contracts. Follow the steps below to ensure a smooth verification process.

## Prerequisites

Before you begin, ensure you have the following tools and dependencies installed these are outlined here [Integrity prerequisites](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#prerequisites).

- [Rust](https://www.rust-lang.org/tools/install)
- [Scarb](https://docs.swmansion.com/scarb/download.html)
- [Starknet Foundry](https://github.com/foundry-rs/starknet-foundry?tab=readme-ov-file#installation)

Make sure to follow the next usage instructions as referenced [here](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#usage-instructions).

### Download Binaries for x86_64

```bash
sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-x86_64 -O /usr/local/bin/cpu_air_prover && sudo chmod +x /usr/local/bin/cpu_air_prover

sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-x86_64 -O /usr/local/bin/cpu_air_verifier && sudo chmod +x /usr/local/bin/cpu_air_verifier
```

### Download Binaries for macOS ARM64

```bash
wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-arm64 -O /usr/local/bin/cpu_air_prover && chmod +x /usr/local/bin/cpu_air_prover

wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-arm64 -O /usr/local/bin/cpu_air_verifier && chmod +x /usr/local/bin/cpu_air_verifier
```

### Creating and Verifying a Test Proof Using Binaries

To create and verify a test proof, follow the next steps outlined in the [Creating and Verifying a Test Proof Guide](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#creating-and-verifying-a-test-proof-using-binaries).

Clone the repository:

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

Navigate to the example test directory:

```bash
cd /tmp/stone-packaging/test_files/
```

Copy or download the binary files from the latest release to this directory.

Run the prover:
```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
```

The proof will be available at `fibonacci_proof.json`.

Run the verifier to verify the proof:

```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

### Splitting the Proof

Run the following command to generate the annotated split proof:

```bash
cpu_air_prover  --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json \
    --generate_annotations true
```

## stark_evm_adapter

Alternatively, you can use the `stark_evm_adapter` by following the next instructions shown [here](https://github.com/zksecurity/stark-evm-adapter?tab=readme-ov-file#cli).

### Installation

```bash
cargo install stark_evm_adapter
```

### Usage

```bash
stark_evm_adapter --help
```

### Example Using `stark_evm_adapter`

To generate an annotated proof:

```bash
cpu_air_verifier \
    --in_file test_files/fibonacci_proof.json \
    --annotation-file test_files/fibonacci_proof_annotation.txt \
    --extra-output-file test_files/fibonacci_proof_annotation_extra.txt
```

```bash
stark_evm_adapter gen-annotated-proof \
    --stone-proof-file fibonacci_proof.json \
    --stone-annotation-file fibonacci_proof_annotation.txt \
    --stone-extra-annotation-file fibonacci_proof_annotation_extra.txt \
    --output fibonacci_annotated_proof.json
```

* `stark_evm_adapter --stone-proof-file` comes from `cpu_air_prover --out_file` (JSON format)
* `stark_evm_adapter --stone-annotation-file` comes from `cpu_air_verifier --annotation-file` (.txt format)
* `stark_evm_adapter --stone-extra-annotation-file` comes from `cpu_air_verifier --extra-output-file` (.txt format)

Proceed when receiving the next output:
```bash
Annotated proof wrote to fibonacci_annotated_proof.json
```
## Utilizing the Herodotus Integrity File to Serialize the Proof

Clone the Herodotus Integrity repository for later procedures:

```bash
git clone https://github.com/HerodotusDev/integrity.git
```

Alternatively, you can install the proof serializer tool directly:

```bash
cargo install --git https://github.com/HerodotusDev/integrity proof_serializer
```

### Serializing the Proof

To serialize the proof, use the proof_serializer tool as follows:

- For the Original Proof:

```bash
proof_serializer < fibonacci_proof.json > fibonacci_calldata
```
- For the Annotated Proof:

```bash
proof_serializer < fibonacci_annotated_proof.json > fibonacci_calldata
```

## Setting Up Starknet Foundry

To interact with Starknet Foundry, set up your account and configuration as follows.

### Acount Management

Refer to the following links for managing your Starknet Foundry account:

[Account Management](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/account.html)
[Add account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/add.html)
[Create account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/create.html)

Make sure you set up up your 'snfoundry.toml' configuration with appropriate account name and RPC url inside your Integrity cloned repository.

### Deploying Your Account

Before deploying make sure you prefunded your account.

[Deploy Account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/deploy.html)

Execute the next [example](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#monolith-proof) to check if the setup correct.

## Deploying Integrity Contracts
-TODO




