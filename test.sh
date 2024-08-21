#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the test_files directory, assuming it's in the root of the repository
cd test_files || exit

# Run the end-to-end tests
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json

cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
