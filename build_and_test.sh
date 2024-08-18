#!/bin/bash
# Fix dependencies
set -o xtrace
set -e
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)

# Print the current directory
echo "Current directory: $(pwd)"

if [ "$os" == "linux" ]; then
    export DEBIAN_FRONTEND=noninteractive

    sudo apt-get install -y  libtinfo5 libdw-dev libgmp3-dev

    pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

    wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-$os-$arch"
    chmod 755 "bazelisk-$os-$arch"
    sudo mv "bazelisk-$os-$arch" /bin/bazelisk

elif [ "$os" == "darwin" ]; then

    brew install gmp

    python3 -m pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0 --break-system-packages

else
    echo "$os/$arch is not supported"
    exit 1

fi

git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

bazelisk build //...

bazelisk test //...

# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier

cd ./test_files || exit

cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json

cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
