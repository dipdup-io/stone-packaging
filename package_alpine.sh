#!/bin/bash
set -e

# Ensure necessary dependencies are installed
apk add --no-cache alpine-sdk build-base

# Define the binary paths
PROVER_PATH=$(which cpu_air_prover)
VERIFIER_PATH=$(which cpu_air_verifier)

# Check if the binaries exist
if [ -z "$PROVER_PATH" ]; then
    echo "Error: cpu_air_prover not found in PATH. Please ensure the binary is built and available."
    exit 1
fi

if [ -z "$VERIFIER_PATH" ]; then
    echo "Error: cpu_air_verifier not found in PATH. Please ensure the binary is built and available."
    exit 1
fi

# Create a temporary directory for the package
mkdir -p /tmp/stone-prover/ALPINE
mkdir -p /tmp/stone-prover/usr/bin

TAG=$1

# Copy binaries to the appropriate directory
cp "$PROVER_PATH" /tmp/stone-prover/usr/bin/
cp "$VERIFIER_PATH" /tmp/stone-prover/usr/bin/

# Create the APKBUILD file for Alpine package creation
cat <<EOF > /tmp/stone-prover/APKBUILD
# Contributor: Baking Bad <na@baking-bad.org>
# Maintainer: Baking Bad <na@baking-bad.org>
pkgname=stone-prover
pkgver=$(echo $TAG | cut -c 2-)
pkgrel=0
pkgdesc="Stone prover alpine package"
arch="x86_64"
license="GPL-3.0"
source=""
builddir="/tmp/stone-prover"

package() {
    mkdir -p "\$pkgdir/usr/bin"
    install -Dm755 "\$builddir"/usr/bin/cpu_air_prover "\$pkgdir"/usr/bin/cpu_air_prover
    install -Dm755 "\$builddir"/usr/bin/cpu_air_verifier "\$pkgdir"/usr/bin/cpu_air_verifier
}
EOF

# Build the Alpine package using abuild
cd /tmp/stone-prover
abuild checksum
abuild -r

# Output the built package location
echo "Alpine package built successfully."
echo "Package location: /tmp/packages/main/x86_64/stone-prover-*.apk"
