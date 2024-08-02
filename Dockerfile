# Stage 1: Base Image
FROM ciimage/python:3.9 AS base_image

# Install necessary dependencies including git
RUN apt-get update && apt-get install -y git build-essential devscripts debhelper

# Clone the public prover repository
RUN git clone https://github.com/starkware-libs/stone-prover.git /app/prover

# Set the working directory to the cloned repository
WORKDIR /app/prover

# Run the installation scripts from the cloned repository
RUN /app/prover/install_deps.sh
RUN ./docker_common_deps.sh

# Change ownership of the /app directory
RUN chown -R starkware:starkware /app

# Build the project using Bazel
RUN bazel build //...


# Stage 2: Create DEB package
FROM base_image AS deb_package

# Install packaging tools
RUN apt-get update && apt-get install -y dh-make

# Set working directory to /app/deb
WORKDIR /app/deb

# Create the DEB package structure
RUN mkdir -p stone-prover/usr/bin
RUN cp /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover stone-prover/usr/bin/
RUN cp /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier stone-prover/usr/bin/
RUN cp /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/bin/
RUN cp /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/bin/

# Create DEBIAN control files
RUN mkdir -p stone-prover/DEBIAN
RUN echo "Package: stone-prover" > stone-prover/DEBIAN/control
RUN echo "Version: 1.0" >> stone-prover/DEBIAN/control
RUN echo "Section: base" >> stone-prover/DEBIAN/control
RUN echo "Priority: optional" >> stone-prover/DEBIAN/control
RUN echo "Architecture: all" >> stone-prover/DEBIAN/control
RUN echo "Depends: libdw1" >> stone-prover/DEBIAN/control
RUN echo "Maintainer: Zaariel91 na@baking-bad.org" >> stone-prover/DEBIAN/control
RUN echo "Description: Stone prover deb" >> stone-prover/DEBIAN/control

# Build the DEB package
RUN dpkg-deb --build stone-prover

# Stage 3: Target Image
FROM debian:stable-slim AS target

# Copy the built binary from the base image to the target image
COPY --from=deb_package /usr/bin//cpu_air_prover /usr/bin/
# Uncomment the following line if you need to copy the verifier as well
COPY --from=deb_package /usr/bin//cpu_air_verifier /usr/bin/
# Copy the DEB package from the previous stage
COPY --from=deb_package /app/deb/stone-prover.deb /app/stone-prover.deb

# Install the necessary runtime dependencies
RUN apt update && apt install -y libdw1

CMD ["bash"]

