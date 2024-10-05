# Verifying Stone proofs on Ethereum

This guide provides detailed instructions on creating and verifying Stone proofs on Ethereum Follow the steps below to ensure a smooth verification process.

## Prerequisites

Before you begin, ensure you are on `linux/amd64` with `AVX` is supported.

## Installing the Stone Cli with the updated `cairo-proof-parse`

```
git clone https://github.com/guha-rahul/stone-cli.git
cd stone-cli/
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

## Creating the Stone Proof 

```
stone-cli prove-bootloader --cairo_programs ./examples/cairo0/bitwise_output.json --layout starknet --parameter_file ./tests/configs/bootloader_cpu_air_params.json --output bootloader_proof.json --fact_topologies_output fact_topologies.json

```

## Verifying the Stone proof

```
stone-cli verify --proof bootloader_proof.json --annotation_file annotation.json --extra_output_file extra_output.json
```

## Serializing the Stone proof for Ethereum

```
stone-cli serialize-proof --proof bootloader_proof.json --annotation_file annotation.json --extra_output_file extra_output.json --network ethereum --output bootloader_serialized_proof.json

```
Make sure to not delete the `bootloader_serialized_proof.json` and `fact_topologies.json` files.

## Verifying the Stone proof on Ethereum

We need the [evm-adapter-cli](https://github.com/zksecurity/stark-evm-adapter/tree/add-build-configs) for verifying on ethereum. We need to [install Foundry](https://book.getfoundry.sh/getting-started/installation) for  verification.
We also need to [install Foundry](https://book.getfoundry.sh/getting-started/installation) for  running it.
We also need a Ethereum Mainnet Rpc which we can get from [Alchemy](https://www.alchemy.com/).
```
git clone https://github.com/zksecurity/stark-evm-adapter.git
cd stark-evm-adapter/
FORK_URL=<ETHEREUM-MAINNET-RPC> \
    ANNOTATED_PROOF=./bootloader_serialized_proof.json \
    FACT_TOPOLOGIES=./fact_topologies.json \
    cargo run --example verify_stone_proof
```

Upon successfull proof verification we can get something like this 

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