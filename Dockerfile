# Stage 1: Base Image
FROM ubuntu:22.04 AS build

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/baking-bad/stone-prover.git /app

WORKDIR /app

COPY . .

# Install dependencies.
RUN ./install_deps.sh

# Build.
RUN bazelisk build //...

# Copy cpu_air_prover and cpu_air_verifier.
RUN ln -s /app/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /bin/cpu_air_prover
RUN ln -s /app/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /bin/cpu_air_verifier
