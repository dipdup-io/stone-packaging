# Verifying Stone Proof Using the Binary

This guide will walk you through how to verify a Stone proof using the provided binaries. It includes steps for both setting up the environment using Docker and manually installing the required dependencies.

## Creating and Verifying a Proof of a Cairo Program

1. Navigate to the Example Test Directory:
   • Start by navigating to the Cairo example test directory.

   ```bash
   cd e2e_test/Cairo
   ```

2. Install cairo-vm/cairo1-run:
   • Clone and install the necessary dependencies for cairo-vm:
   ```bash
   git clone https://github.com/lambdaclass/cairo-vm.git
   cd cairo-vm/cairo1-run
   make deps
   ```

# Docker-based Setup

For those who prefer to use Docker for an isolated environment, follow these steps to run the entire process within a Docker container.

1. Create a Dockerfile:
   • Create a Dockerfile to define the environment:

```bash
 FROM rust:latest
```

### Install necessary packages

RUN:

```bash
 apt-get update && apt-get install -y python3-pip git
```

### Install cairo-lang

RUN:

```bash
pip install cairo-lang==0.13.2
```

### Clone cairo-vm

RUN:

```bash
git clone https://github.com/lambdaclass/cairo-vm.git
WORKDIR /cairo-vm/cairo1-run
```

### Install dependencies

RUN:

```bash
make deps 
```

### Copy your Cairo program into the container

```bash
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
```

### Build and run the Cairo program

```bash
CMD ["cargo", "run", "fibonacci.cairo", "--layout=small", "--proof_mode"]
```

2. Build and Run the Docker Image:
   • Build the Docker image:

   ```
   docker build -t cairo_proof
   ```

   • Run the Docker container:

   ```
   docker run -it cairo_proof
   ```

   Following this will make sure there's a consistent environment for creating and verifying proofs without needing to install dependencies on your local machine.
