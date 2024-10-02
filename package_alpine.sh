#!/bin/bash
set -e

# Get the version from the git tag
VERSION=$(git describe --tags --abbrev=0 | sed 's/^v//')

# Create the APKBUILD file
cat << EOF > APKBUILD
# Contributor: Your Name <your.email@example.com>
# Maintainer: Your Name <your.email@example.com>
pkgname=stone-prover
pkgver=$VERSION
pkgrel=0
pkgdesc="Stone Prover - a zero-knowledge proof system"
url="https://github.com/baking-bad/stone-prover"
arch="all"
license="MIT"
depends=""
makedepends="cmake"
source=""
builddir="$srcdir/$pkgname-$pkgver"

build() {
    mkdir build && cd build
    cmake ..
    make
}

package() {
    install -Dm755 build/stone_prover "$pkgdir"/usr/bin/stone_prover
}
EOF

# Build the package
abuild -F checksum
abuild -F -r

# Move the built package to a specific directory
mkdir -p ./alpine-package
mv ~/packages/main/x86_64/*.apk ./alpine-package/

echo "Alpine package built and moved to ./alpine-package/"