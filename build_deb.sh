#!/bin/bash

set -e

# Create a temporary directory for the package
mkdir -p /tmp/stone-prover/DEBIAN

TAG=$1

docker build --tag prover .
container_id=$(docker create prover)
docker cp $container_id:/usr/bin/cpu_air_prover /tmp/stone-prover/cpu_air_prover
docker cp $container_id:/usr/bin/cpu_air_verifier /tmp/stone-prover/cpu_air_verifier
docker rm $container_id

cat <<EOF > /tmp/stone-prover/DEBIAN/control
Package: stone-prover
Version: $(echo $TAG | cut -c 2-)
Architecture: all
Depends: libdw1
Maintainer: Zaariel91 na@baking-bad.org
Description: Stone prover deb package
EOF

dpkg-deb --build /tmp/stone-prover /tmp/stone-prover/stone-prover.deb
