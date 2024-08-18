#!/bin/bash

git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

./install_deps.sh

bazelisk build //...

bazelisk test //...

# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /bin/cpu_air_verifier

cd /tmp/stone-prover/e2e_test/CairoZero || exit

cairo-compile fibonacci.cairo --output fibonacci_compiled.json --proof_mode

cairo-run \
    --program=fibonacci_compiled.json \
    --layout=small \
    --program_input=fibonacci_input.json \
    --air_public_input=fibonacci_public_input.json \
    --air_private_input=fibonacci_private_input.json \
    --trace_file=fibonacci_trace.json \
    --memory_file=fibonacci_memory.json \
    --print_output \
    --proof_mode

cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json

cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
