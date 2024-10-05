#!/bin/bash
# Build script for Fedora
set -o xtrace
set -e
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)


# Update and install system dependencies
dnf update -y && dnf install -y \
    git \
    gcc gcc-c++ make wget openssl-devel bzip2-devel libffi-devel libtinfo5 libdw-dev libgmp3-dev \
    elfutils-libelf-devel gmp-devel elfutils-devel clang \
    libstdc++-devel libcxx libcxx-devel ncurses-compat-libs cairo-devel \
    zlib-devel ncurses-devel sqlite-devel \
    rpm-build \
    readline-devel tk-devel gdbm-devel xz-devel \

# Install Python 3.9 from source
wget https://www.python.org/ftp/python/3.9.17/Python-3.9.17.tgz \
    && tar xzf Python-3.9.17.tgz \
    && cd Python-3.9.17 \
    && ./configure --enable-optimizations \
    && make altinstall \
    && cd .. && rm -rf Python-3.9.17*

# Install Python packages
pip3.9 install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

# Install Bazelisk
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

