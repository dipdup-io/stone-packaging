#!/bin/bash

# TODO(baitcode): Should live in a scripts folder

CAIRO1_RUNNER=../cairo-vm/cairo1-run
TEST_FILES=$(pwd)/test_files
PROGRAMS_DIR=$(pwd)/e2e_test/Cairo
ESCAPED_PWD=$(printf '%s' "$(pwd)" | sed 's/[\/&]/\\&/g')

# TODO(baitcode): should be moved out of the script to a common place
if [[ "$(uname)" == "Darwin" ]]; then
    SED_REPLACE="sed -i \"\" \"s/$ESCAPED_PWD/./\""
else
    SED_REPLACE="sed -i \"s/$ESCAPED_PWD/./\""
fi

function generate_inputs {
    local PROGRAM=$1
    local LAYOUT=$2

    echo "generating inputs for ${PROGRAM} with layout ${LAYOUT}"

    mkdir -p ${TEST_FILES}/${PROGRAM}

    (cd ${CAIRO1_RUNNER} && cargo run ${PROGRAMS_DIR}/${PROGRAM}.cairo \
        --air_public_input=${TEST_FILES}/${PROGRAM}/public_input.json \
        --air_private_input=${TEST_FILES}/${PROGRAM}/private_input.json \
        --trace_file=${TEST_FILES}/${PROGRAM}/trace.b \
        --memory_file=${TEST_FILES}/${PROGRAM}/memory.b \
        --proof_mode --print_output --layout=${LAYOUT})

    bash -c "$SED_REPLACE ${TEST_FILES}/${PROGRAM}/private_input.json"
    bash -c "$SED_REPLACE ${TEST_FILES}/${PROGRAM}/public_input.json"
}

generate_inputs basic small
generate_inputs fibonacci small
generate_inputs hash_pedersen recursive_large_output
generate_inputs hash_poseidon recursive_with_poseidon
generate_inputs ecdsa starknet

# Keccak and bitwise can't execute correctly. Keccak requires Startnet OS environment.
# Bitwise operators just don't work according to official documentation.
# generate_inputs keccak starknet_with_keccak
# generate_inputs bitwise all_cairo 


