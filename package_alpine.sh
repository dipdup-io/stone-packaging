#!/bin/bash
set -e

echo "Starting package creation process..."
echo "Checking necessary dependencies..."

# Ensure necessary dependencies are installed
apk add --no-cache alpine-sdk build-base || { echo "Failed to install dependencies"; exit 1; }

# Define the binary paths
PROVER_PATH=$(which cpu_air_prover) || { echo "Failed to find cpu_air_prover"; exit 1; }
VERIFIER_PATH=$(which cpu_air_verifier) || { echo "Failed to find cpu_air_verifier"; exit 1; }

# Check if the binaries exist
if [ -z "$PROVER_PATH" ]; then
    echo "Error: cpu_air_prover not found in PATH. Please ensure the binary is built and available."
    exit 1
fi

if [ -z "$VERIFIER_PATH" ]; then
    echo "Error: cpu_air_verifier not found in PATH. Please ensure the binary is built and available."
    exit 1
fi

# Log found binaries
echo "Found cpu_air_prover at $PROVER_PATH"
echo "Found cpu_air_verifier at $VERIFIER_PATH"

# Create a temporary directory for the package
echo "Creating temporary directories..."
mkdir -p /tmp/stone-prover/ALPINE || { echo "Failed to create directory /tmp/stone-prover/ALPINE"; exit 1; }
mkdir -p /tmp/stone-prover/usr/bin || { echo "Failed to create directory /tmp/stone-prover/usr/bin"; exit 1; }

TAG=$1
echo "Using tag $TAG"

# Copy binaries to the appropriate directory
echo "Copying binaries to package directories..."
cp "$PROVER_PATH" /tmp/stone-prover/usr/bin/ || { echo "Failed to copy cpu_air_prover"; exit 1; }
cp "$VERIFIER_PATH" /tmp/stone-prover/usr/bin/ || { echo "Failed to copy cpu_air_verifier"; exit 1; }

# Create the APKBUILD file for Alpine package creation
echo "Creating APKBUILD file..."
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
echo "Building the package using abuild..."
cd /tmp/stone-prover || { echo "Failed to change directory to /tmp/stone-prover"; exit 1; }
abuild checksum || { echo "abuild checksum failed"; exit 1; }
abuild -r || { echo "abuild build failed"; exit 1; }

# Output the built package location
echo "Alpine package built successfully."
echo "Package location: /tmp/packages/main/x86_64/stone-prover-*.apk"
