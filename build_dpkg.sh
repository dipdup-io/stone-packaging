#!/bin/bash

set -e

# Create a temporary directory for the package
mkdir -p stone-prover/DEBIAN
#mkdir -p $OUTPUT_DIR/usr/local/bin

# Run Docker container and copy files
#CONTAINER_ID=$(docker create $IMAGE_NAME)
#docker cp $CONTAINER_ID:/path/in/container/. $OUTPUT_DIR/usr/local/bin  # Customize path
#docker rm $CONTAINER_ID

# Create control file
cat <<EOF > stone-prover/DEBIAN/control
Package: stone-prover
Version: 1.0.0
Architecture: all
Depends: libdw1
Maintainer: Zaariel91 na@baking-bad.org
Description: Stone prover deb package
EOF

# Build the package
dpkg-deb --build stone-prover stone-prover.deb

