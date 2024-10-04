#!/bin/bash
# Fix dependencies
set -o xtrace
set -e

# Install system dependencies
dnf install -y elfutils-libelf-devel gmp-devel python3-devel gcc make libffi-devel openssl-devel

# Install Python dependencies
pip3 install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

# Download and install Bazelisk
wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-linux-amd64"
chmod 755 "bazelisk-linux-amd64"
mv "bazelisk-linux-amd64" /usr/local/bin/bazelisk

# Clone the stone-prover repository
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

# Ensure TARGET_ARCH is set
arch=${TARGET_ARCH:-x86_64}

# Build and test with Bazelisk
bazelisk build --cpu="$arch" //...
bazelisk test --cpu="$arch" //...

# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s "$(pwd)/bazel-bin/src/starkware/main/cpu/cpu_air_prover" /usr/local/bin/cpu_air_prover
ln -s "$(pwd)/bazel-bin/src/starkware/main/cpu/cpu_air_verifier" /usr/local/bin/cpu_air_verifier
