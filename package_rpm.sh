#!/bin/bash

set -e

# Install dependencies
sudo dnf install -y ruby ruby-devel rubygems gcc make rpm-build

# Install fpm
sudo gem install --no-document fpm

# Create a temporary directory for the package

mkdir -p /tmp/stone-prover/usr/bin

TAG=$1

# Copy binaries into the package directory
cp /usr/local/bin/cpu_air_prover /tmp/stone-prover/usr/bin/
cp /usr/local/bin/cpu_air_verifier /tmp/stone-prover/usr/bin/

# Build the RPM package using fpm
fpm -s dir -t rpm \
    -n stone-prover \
    -v "$(echo $TAG | cut -c 2-)" \
    -a "$(uname -m)" \
    -C /tmp/stone-prover/ \
    --prefix / \
    --depends libdw1 \
    --maintainer "Baking Bad <na@baking-bad.org>" \
    --description "Stone prover RPM package" \
    -p /tmp/stone-prover/stone-prover.rpm
