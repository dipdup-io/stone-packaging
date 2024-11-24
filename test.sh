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

TEST_FILES=$(pwd)/test_files

function generate_verify_proof {
    local program=$1

    local prover_config_file="${TEST_FILES}/${program}/cpu_air_prover_config.json"
    local parameter_file="${TEST_FILES}/${program}/cpu_air_params.json"

    if [ -e "${TEST_FILES}/${program}_cpu_air_params.json" ]; then
        prover_config_file="${TEST_FILES}/${program}_cpu_air_params.json"
    fi

    if [ -e "${TEST_FILES}/${program}_cpu_air_prover_config.json" ]; then
        parameter_file="${TEST_FILES}/${program}_cpu_air_prover_config.json"
    fi

    cpu_air_prover \
        -v 1 \
        --out_file=${TEST_FILES}/${program}/proof.json \
        --private_input_file=${TEST_FILES}/${program}/private_input.json \
        --public_input_file=${TEST_FILES}/${program}/public_input.json \
        --prover_config_file=${prover_config_file} \
        --parameter_file=${parameter_file}

    bash -c "$SED_REPLACE ${TEST_FILES}/${program}/proof.json"

    cpu_air_verifier --in_file=${TEST_FILES}/${program}/proof.json && echo "Successfully verified ${PROGRAM} example proof."
}

generate_verify_proof basic
# generate_verify_proof fibonacci 
# generate_verify_proof hash_pedersen 
# generate_verify_proof hash_poseidon 
# generate_verify_proof ecdsa 
