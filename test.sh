#!/bin/bash

# TODO(baitcode): Should live in a scripts folder

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the test_files directory, assuming it's in the root of the repository
ESCAPED_PWD=$(printf '%s' "$(pwd)" | sed 's/[\/&]/\\&/g')

# TODO(baitcode): should be moved out of the script to a common place
if [[ "$(uname)" == "Darwin" ]]; then
    SED_REPLACE="sed -i \"\" \"s/$ESCAPED_PWD/./\""
else
    SED_REPLACE="sed -i \"s/$ESCAPED_PWD/./\""
fi

function generate_verify_proof {
    local PROGRAM=$1
    local PARAMS_FILE=$2

    cpu_air_prover \
        -v 1 \
        --out_file=test_files/${PROGRAM}_proof.json \
        --private_input_file=test_files/${PROGRAM}_private_input.json \
        --public_input_file=test_files/${PROGRAM}_public_input.json \
        --prover_config_file=test_files/cpu_air_prover_config.json \
        --parameter_file=test_files/${PARAMS_FILE}

    # bash -c "$SED_REPLACE test_files/${PROGRAM}_proof.json"

    cpu_air_verifier --in_file=test_files/${PROGRAM}_proof.json && echo "Successfully verified ${PROGRAM} example proof."
}

generate_verify_proof basic cpu_air_params.json
generate_verify_proof fibonacci cpu_air_params.json
generate_verify_proof hash_pedersen hash_pedersen_cpu_air_params.json 
generate_verify_proof hash_poseidon hash_poseidon_cpu_air_params.json 
generate_verify_proof ecdsa ecdsa_cpu_air_params.json
