#!/bin/bash
# Build script for Fedora 34
set -o xtrace
set -e
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)


# Update and install system dependencies
dnf update -y && dnf install -y \
    gcc gcc-c++ make wget git openssl-devel bzip2-devel libffi-devel \
    elfutils-libelf-devel gmp-devel elfutils-devel clang \
    libstdc++-devel libcxx libcxx-devel ncurses-compat-libs cairo-devel \
    python3.9 python3.9-devel \
    && dnf clean all && rm -rf /var/cache/dnf

# Create a virtual environment with Python 3.9
python3.9 -m venv /tmp/stone-env

# Activate the virtual environment
source /tmp/stone-env/bin/activate

# Upgrade pip within the virtual environment
pip install --upgrade pip

# Install Python dependencies
pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

# Download and install Bazelisk
wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-linux-amd64"
chmod 755 "bazelisk-linux-amd64"
mv "bazelisk-linux-amd64" /usr/local/bin/bazelisk

# Clone the stone-prover repository
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

# Build and test with Bazelisk
bazelisk build --cpu="$arch" //...
bazelisk test --cpu="$arch" //...

# Create symbolic links for cpu_air_prover and cpu_air_verifier
ln -s "$(pwd)/bazel-bin/src/starkware/main/cpu/cpu_air_prover" /usr/local/bin/cpu_air_prover
ln -s "$(pwd)/bazel-bin/src/starkware/main/cpu/cpu_air_verifier" /usr/local/bin/cpu_air_verifier

# Deactivate the virtual environment
deactivate
