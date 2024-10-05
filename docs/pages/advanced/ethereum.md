# Verifying Stone proofs on Ethereum

A comprehensive guide for creating and verifying Stone proofs on Ethereum networks.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Creating and Verifying Proofs](#creating-and-verifying-proofs)
- [Ethereum Verification](#ethereum-verification)

## Prerequisites

Before you begin, ensure you are on `linux/amd64` with `AVX` supported.

## Installation

### 1. Install Stone CLI with the updated `cairo-proof-parse`

```
# Clone the repository
git clone https://github.com/guha-rahul/stone-cli.git
# Navigate to the directory
cd stone-cli/
# Install using Cargo
cargo install --path .
```

### Check Stone Cli has been installed

```
stone-cli --help
```
Running the command should output this 
```
CLI for proving Cairo programs and serializing proofs for Starknet and Ethereum

Usage: stone-cli <COMMAND>

Commands:
  prove             
  prove-bootloader  
  verify            
  serialize-proof   
  help              Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```
## Creating and Verifying Proofs

### 1. Generate the Stone Proof

```
stone-cli prove-bootloader \
    --cairo_programs ./examples/cairo0/bitwise_output.json \
    --layout starknet \
    --parameter_file ./tests/configs/bootloader_cpu_air_params.json \
    --output bootloader_proof.json \
    --fact_topologies_output fact_topologies.json
```

## 2. Verify the Proof Locally

```
stone-cli verify \
    --proof bootloader_proof.json \
    --annotation_file annotation.json \
    --extra_output_file extra_output.json
```

## 3. Serialize the Proof for Ethereum

```
stone-cli serialize-proof \
    --proof bootloader_proof.json \
    --annotation_file annotation.json \
    --extra_output_file extra_output.json \
    --network ethereum \
    --output bootloader_serialized_proof.json
```
Make sure to not delete the `bootloader_serialized_proof.json` and `fact_topologies.json` files for the next steps.

## Ethereum Verification
### 1. Set Up EVM Adapter

We need the [evm-adapter-cli](https://github.com/zksecurity/stark-evm-adapter/tree/add-build-configs) for verifying on ethereum. We need to [install Foundry](https://book.getfoundry.sh/getting-started/installation) for  verification.
We also need to [install Foundry](https://book.getfoundry.sh/getting-started/installation) for  running it.
We also need a Ethereum Mainnet Rpc which we can get from [Alchemy](https://www.alchemy.com/).
```
# Clone the repository
git clone https://github.com/zksecurity/stark-evm-adapter.git
cd stark-evm-adapter/
```
### 2. Run Verification
```
FORK_URL=<ETHEREUM-MAINNET-RPC> \
    ANNOTATED_PROOF=./bootloader_serialized_proof.json \
    FACT_TOPOLOGIES=./fact_topologies.json \
    cargo run --example verify_stone_proof
```
### 3. Successful Verification Output

Upon successfull proof verification we can get something like this 🥳

```
Anvil is running.
Test wallet address: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
Verifying trace decommitments:
Verified: Trace 0
Verified: Trace 1
Verified: Trace 2
Verifying FRI decommitments:
Verified: FRI statement: 0
Verified: FRI statement: 1
Verified: FRI statement: 2
Verified: FRI statement: 3
Verified: FRI statement: 4
Verified: FRI statement: 5
Verified: FRI statement: 6
Verified: FRI statement: 7
Verified: register continuous page: 0
Verifying main proof:
Verified: Main proof
```