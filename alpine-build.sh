#!/bin/bash
# Fix dependencies
set -o xtrace
set -e
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)

apk add ncurses elfutils-dev gmp-dev python3=3.9.16-r0 py3-pip

pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-$os-$arch"
chmod 755 "bazelisk-$os-$arch"
sudo mv "bazelisk-$os-$arch" /bin/bazelisk

git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

bazelisk build --cpu=$arch //...

bazelisk test --cpu=$arch //...

# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier
