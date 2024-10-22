#!/bin/bash
# Fix dependencies
set -o xtrace
set -e
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)

apk update
curl -Lo /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
curl -Lo glibc.apk https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.35-r0/glibc-2.35-r0.apk
apk add glibc
apk add --no-cache bazel7 ncurses elfutils-dev gmp-dev build-base python3 python3-dev py3-pip libffi-dev cairo-dev py3-sympy py3-cairo py3-pytest

# # python3 -m venv venv
# # chmod 777 -R venv/
# # ./venv/bin/activate

# # pip3 --version
# # pip3 install --upgrade pip


# #pip install --user pipx
# #export PATH="$HOME/.local/bin:$PATH"
# pip3 install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

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
