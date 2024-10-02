#!/bin/bash

set -e

# Ensure necessary dependencies are installed
apk add --no-cache alpine-sdk build-base

# Create a temporary directory for the package
mkdir -p /tmp/stone-prover/ALPINE
mkdir -p /tmp/stone-prover/usr/bin

TAG=$1

# Copy binaries to the appropriate directory
cp /usr/local/bin/cpu_air_prover /tmp/stone-prover/usr/bin/
cp /usr/local/bin/cpu_air_verifier /tmp/stone-prover/usr/bin/

# Create the APKBUILD file for Alpine package creation
cat <<EOF > /tmp/stone-prover/APKBUILD
# Contributor: Collins Ikechukwu <na@baking-bad.org>
# Maintainer: Baking Bad <na@baking-bad.org>
pkgname=stone-prover
pkgver=$(echo $TAG | cut -c 2-)
pkgrel=0
pkgdesc="Stone prover alpine package"
arch="all"
license="GPL-3.0"
depends="libdw"
source=""
builddir=""
package() {
  install -Dm755 \$srcdir/usr/bin/cpu_air_prover \$pkgdir/usr/bin/cpu_air_prover
  install -Dm755 \$srcdir/usr/bin/cpu_air_verifier \$pkgdir/usr/bin/cpu_air_verifier
}
EOF

# Build the Alpine package using abuild
cd /tmp/stone-prover
abuild -r

# Output the built package location
echo "Alpine package built successfully."
