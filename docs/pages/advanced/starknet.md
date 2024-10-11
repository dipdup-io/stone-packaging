# Verifying Stone Proofs on Starknet

> [!IMPORTANT]
> This guide provides detailed instructions for creating and verifying Stone proofs on Starknet, as well as deploying integrity contracts. Follow these steps for a smooth verification process.

## Prerequisites

Before you start, ensure the following tools and dependencies are installed. They are outlined in the [Integrity prerequisites](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#prerequisites):

- [Rust](https://www.rust-lang.org/tools/install)
- [Scarb](https://docs.swmansion.com/scarb/download.html)
- [Starknet Foundry](https://github.com/foundry-rs/starknet-foundry?tab=readme-ov-file#installation)

For usage instructions, follow the guide [here](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#usage-instructions).

---

## 1. Download Binaries

Follow the [installation guide](../install/binaries.md) to download the necessary binaries.

---

## 2. Creating and Verifying a Test Proof Using Binaries

To create and verify a test proof, follow the steps in the [Creating and Verifying a Test Proof Guide](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#creating-and-verifying-a-test-proof-using-binaries).

- Clone the repository:

   ```bash
   git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
```

Navigate to the example test directory:

```bash
cd /tmp/stone-packaging/test_files/
```

Copy or download the binary files from the latest release to this directory.

---

## 3. Splitting the Proof

Run the following command to generate the annotated split proof:

```bash
cpu_air_prover  --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params_integrity.json \
    --generate_annotations true
```

The proof will be available at `fibonacci_proof.json`.

Run the verifier to verify the proof:

```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

### Using stark_evm_adapter

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

- `stark_evm_adapter --stone-proof-file` comes from `cpu_air_prover --out_file` (JSON format)
- `stark_evm_adapter --stone-annotation-file` comes from `cpu_air_verifier --annotation-file` (.txt format)
- `stark_evm_adapter --stone-extra-annotation-file` comes from `cpu_air_verifier --extra-output-file` (.txt format)

Proceed when receiving the next output:
```bash
Annotated proof wrote to fibonacci_annotated_proof.json
```

---

## 4. Utilizing the Herodotus Integrity File to Serialize the Proof

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

---

## 5. Setting Up Starknet Foundry

To interact with Starknet Foundry, set up your account and configuration as follows.

### Acount Management

Refer to the following links for managing your Starknet Foundry account:

[Account Management](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/account.html)
[Add account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/add.html)
[Create account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/create.html)

Make sure you set up up your 'snfoundry.toml' configuration with appropriate account name and RPC url inside your Integrity cloned repository.

### Deploying Your Account

Before deploying make sure you prefunded your account.

> [!NOTE]
> You may need to append one or two 0s in front of the address (Ex: 0x12345, 0x012345), for the faucet to validate the wallet.

[Deploy Account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/deploy.html)

Execute the next [example](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#monolith-proof) to check if the setup is correct.

---

## 6. Cairo-VM-Verifier

For veryfing the proof.json you can utilize the next tool by pasting the proof.json file in the drop box, it's made in Rust and WASM, and runs in the browser: [cairo-vm-verifier](https://demo.swiftness.iosis.tech/)

---

## 7. Deploying in the Integrity Contracts for Verification

Make sure you're in the Integrity cloned repository.

```bash
cd integrity
```

For verifying onchain with the Integrity contracts we will use the `verify-on-starknet.sh` script following the [deployed contracts](https://github.com/HerodotusDev/integrity/blob/main/deployed_contracts.md#main-contracts).

This is the main Herodotus example for testing.

```bash
./verify-on-starknet.sh 0x16409cfef9b6c3e6002133b61c59d09484594b37b8e4daef7dcba5495a0ef1a examples/calldata recursive keccak_248_lsb stone5 cairo0
```

You can use the next configurations.

- layout: [`dex`, `recursive`, `recursive_with_poseidon`, `small`, `starknet`, `starknet_with_keccak`]
- hashers: [`keccak`, `blake2s`]
- cairo_version: [`cairo0`, `cairo1`]
- stone_version: [`stone5`, `stone6`]

Hash function and hasher bit length are combined into one setting:

- hasher: [`keccak_160_lsb`, `blake2s_160`, `blake2s_248_lsb`]

Following this let's deploy our fibonacci_calldata in the Herodotus [proxy contract](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#factregistry-and-proxy-contract).

```bash
./verify-on-starknet.sh \
    0x16409cfef9b6c3e6002133b61c59d09484594b37b8e4daef7dcba5495a0ef1a \
    /home/'user'/stone-packaging/test_files/fibonacci_calldata \
    small \
    keccak_160_lsb \
    stone6 \
    cairo1
```

Wait for the tx, and you've successfully verified the proof on Starknet! :)





