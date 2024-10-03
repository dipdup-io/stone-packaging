## Verifying Stone proofs on Ethereum

This guide provides detailed instructions on creating and verifying Stone proofs on Ethereum Follow the steps below to ensure a smooth verification process.

## Prerequisites

Before you begin, ensure you are on `linux/amd64` with `AVX` is supported.

# Installing the Stone Cli with the updated `cairo-proof-parse`

```
git clone https://github.com/guha-rahul/stone-cli.git
cd stone-cli/
cargo install --path .
```

# Check Stone Cli has been installed

`stone-cli --help`

Should output this

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

# Create Stone Proof

```
stone-cli prove-bootloader --cairo_programs ./examples/cairo0/bitwise_output.json --layout starknet --parameter_file ./tests/configs/bootloader_cpu_air_params.json --output bootloader_proof.json --fact_topologies_output fact_topologies.json

```
