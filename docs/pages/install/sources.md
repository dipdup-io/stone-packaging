## Installing Stone from Sources

This documentation provides instructions on how you can build the Stone prover and verifier from source code. It also includes information on locating the built binaries.

## Requirements

Before starting, ensure you have the following installed:

- Rust: This is required to compile Stone from the source. Install it by running:
  `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- Git: Git is required to clone the repository. You can use a package manager like Homebrew on macOS.

## Installation Guide

1. Clone the Repository: You can start by cloning the MacOS/ARM-enabled fork from GitHub:
   `git clone https://github.com/baking-bad/stone-prover.git`
   
   `cd stone-prover`
3. Building the Project: Once inside the repository directory, you can proceed to build the prover and verifier. Use the following command to build both:
   `cargo build --release`

   This will build the important executables in the `target/release` directory.
4. Locating the Built Binaries: After a successful build, you can find the compiled binaries in the target/release folder of the repository:

- Prover binary: `target/release/cpu_air_prover`

- Verifier binary: `target/release/cpu_air_verifier`

- To make these binaries globally accessible, you can move them to /usr/local/bin:
  `sudo mv target/release/cpu_air_prover /usr/local/bin/`
  
  `sudo mv target/release/cpu_air_verifier /usr/local/bin/`

- Make sure the binaries have executable permissions:
  
  `sudo chmod +x /usr/local/bin/cpu_air_prover`
  
  `sudo chmod +x /usr/local/bin/cpu_air_verifier`

4. Verify the Installation: You can run the following commands to verify that the prover and verifier are installed correctly:
   `cpu_air_prover --version`
   
   `cpu_air_verifier --version`

## Downloading Pre-built Binaries

If you prefer not to build from sources, you can download pre-built binaries for x86_64 and macOS ARM64 architectures:

1. For x86_64:
   
  `sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-x86_64 -O /usr/local/bin/cpu_air_prover && sudo chmod +x /usr/local/bin/cpu_air_prover`

  `sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-x86_64 -O /usr/local/bin/cpu_air_verifier && sudo chmod +x /usr/local/bin/cpu_air_verifier`

2. For ARM64 (macOS):
   
  `wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-arm64 -O /usr/local/bin/cpu_air_prover && chmod +x /usr/local/bin/cpu_air_prover`

  `wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-arm64 -O /usr/local/bin/cpu_air_verifier && chmod +x /usr/local/bin/cpu_air_verifier`

  By following these instructions, you should be able to successfully build and locate the Stone prover and verifier binaries, either through compilation from source or downloading pre-built versions.
