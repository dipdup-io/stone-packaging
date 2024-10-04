#!/bin/bash
# Fix dependencies
set -o xtrace
set -e

# Install system dependencies
dnf install -y elfutils-libelf-devel gmp-devel python3-devel
...
mv "bazelisk-linux-amd64" /usr/local/bin/bazelisk


# Install Python dependencies
pip3 install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

# Download and install Bazelisk
wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-linux-amd64"
chmod 755 "bazelisk-linux-amd64"
sudo mv "bazelisk-linux-amd64" /usr/local/bin/bazelisk

git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

bazelisk build --cpu=$TARGET_ARCH //...
bazelisk test --cpu=$TARGET_ARCH //...


# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier