#!/bin/bash

set -e

sudo apt-get install -y build-essential devscripts debhelper dh-make

# Create a temporary directory for the package
mkdir -p /tmp/stone-prover/DEBIAN
mkdir -p /tmp/stone-prover/usr/bin

TAG=$1

cp /bin/cpu_air_prover /tmp/stone-prover/usr/local/bin/
cp /bin/cpu_air_verifier /tmp/stone-prover/usr/local/bin/

cat <<EOF > /tmp/stone-prover/DEBIAN/control
Package: stone-prover
Version: $(echo $TAG | cut -c 2-)
Architecture: all
Depends: libdw1
Maintainer: Baking Bad na@baking-bad.org
Description: Stone prover deb package
EOF

dpkg-deb --build /tmp/stone-prover /tmp/stone-prover/stone-prover.deb
