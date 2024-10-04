#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the test_files directory, assuming it's in the root of the repository
cd test_files || exit


function generate_verify_proof {
    local PROGRAM=$1
    local PARAMS_FILE=$2

    cpu_air_prover \
        -v 1 \
        --out_file=${PROGRAM}_proof.json \
        --private_input_file=${PROGRAM}_private_input.json \
        --public_input_file=${PROGRAM}_public_input.json \
        --prover_config_file=cpu_air_prover_config.json \
        --parameter_file=${PARAMS_FILE}

    cpu_air_verifier --in_file=${PROGRAM}_proof.json && echo "Successfully verified ${PROGRAM} example proof."
}

generate_verify_proof basic cpu_air_params.json
generate_verify_proof fibonacci cpu_air_params.json
generate_verify_proof hash_pedersen hash_pedersen_cpu_air_params.json 
generate_verify_proof hash_poseidon hash_poseidon_cpu_air_params.json 
generate_verify_proof ecdsa ecdsa_cpu_air_params.json
