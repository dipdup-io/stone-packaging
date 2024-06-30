# Stage 1: Base Image
FROM ciimage/python:3.9 AS base_image

# Install necessary dependencies including git
RUN apt-get update && apt-get install -y git

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

# Stage 2: Target Image
FROM debian:stable-slim AS target

# Copy the built binary from the base image to the target image
COPY --from=base_image /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/bin/
# Uncomment the following line if you need to copy the verifier as well
COPY --from=base_image /app/prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/bin/

# Install the necessary runtime dependencies
RUN apt update && apt install -y libdw1

# Set the entry point for the container
#ENTRYPOINT ["cpu_air_prover"]
