## Verifying Stone proofs on Starknet

This guide provides detailed instructions on creating and verifying Stone proofs on Starknet as well as how to deploy integrity contracts. Follow the steps below to ensure a smooth verification process.

## Prerequisites

Before you begin, ensure you have the following tools and dependencies installed:

- [Scarb](https://docs.swmansion.com/scarb/download.html)
- [Starknet Foundry](https://github.com/foundry-rs/starknet-foundry?tab=readme-ov-file#installation)

Make sure to follow the usage instructions as outlined [here](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#usage-instructions).

## Creating and Verifying a Test Proof

To create and verify a test proof, follow the steps outlined in the [Creating and Verifying a Test Proof Guide](https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#creating-and-verifying-a-test-proof-using-binaries).

In this example, we will use the `fibonacci_proof.json`.


### Splitting the Proof

Run the following command to generate the proof:

```bash
cpu_air_prover  --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json \
    --generate_annotations true
```

Alternatively, you can use the `stark_evm_adapter` by following the instructions [here](https://github.com/zksecurity/stark-evm-adapter?tab=readme-ov-file#cli).

## Example Using `stark_evm_adapter`

Run the following command to generate an annotated proof:

```bash
stark_evm_adapter gen-annotated-proof \
    --stone-proof-file fibonacci_proof.json \
    --stone-annotation-file fibonacci_proof_annotation.txt \
    --stone-extra-annotation-file fibonacci_proof_annotation_extra.txt \
    --output fibonacci_annotated_proof.json
```

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

## Serializing the Proof
To serialize the proof, use the proof_serializer tool as follows:

- For the Original Proof:

```bash
proof_serializer < fibonacci_proof.json > fibonacci_calldata
```
- For the Annotated Proof:

```bash
proof_serializer < fibonacci_annotated_proof.json > fibonacci_calldata
```

Ensure you follow the [prerequisites](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#prerequisites) outlined in the Herodotus Integrity repository before proceeding.

## Setting Up Starknet Foundry

To interact with Starknet Foundry, set up your account and configuration as follows.

### Acount Management

Refer to the following links for managing your Starknet Foundry account:

[Account Management](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/account.html)
[Add account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/add.html)
[Create account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/create.html)

Make sure you set up up your 'snfoundry.toml' configuration.

### Deploying Your Account

Before deploying make sure you prefunded your account.

[Deploy Account](https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/deploy.html)

Execute the next [example](https://github.com/HerodotusDev/integrity?tab=readme-ov-file#monolith-proof) to check if the setup correct.

## Deploying Integrity Contracts
-TODO




