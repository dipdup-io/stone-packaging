# Stone Packaging - Installation Guide

This guide provides detailed instructions on how to download and install the [Stone](https://github.com/starkware-libs/stone-prover) binaries, based on your operating system (OS) and architecture so follow along.

## Supported Architectures

Stone binaries are available for the following architectures:
- **x86_64** (Linux and macOS)
- **ARM64** (macOS and Linux)

## Download and Install Binaries

### For macOS (ARM64)

1. Download the cpu_air_prover and cpu_air_verifier binaries:

```bash
wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-arm64 -O /usr/local/bin/cpu_air_prover
wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-arm64 -O /usr/local/bin/cpu_air_verifier
```
2. Make the binaries executable:

```bash
chmod +x /usr/local/bin/cpu_air_prover
chmod +x /usr/local/bin/cpu_air_verifier
```

3. Move the binaries to /usr/bin for system-wide access (optional):

```bash
sudo mv /usr/local/bin/cpu_air_prover /usr/bin/
sudo mv /usr/local/bin/cpu_air_verifier /usr/bin/
```

This step is optional but recommended if you want to make the binaries globally available without adding /usr/local/bin to your PATH.

### For Linux (x86_64)

1. Download the `cpu_air_prover` and `cpu_air_verifier` binaries:

```bash
sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_prover-x86_64 -O /usr/local/bin/cpu_air_prover
sudo wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/cpu_air_verifier-x86_64 -O /usr/local/bin/cpu_air_verifier
```

2. Make the binaries executable:

```bash
sudo chmod +x /usr/local/bin/cpu_air_prover
sudo chmod +x /usr/local/bin/cpu_air_verifier
```

3. Move the binaries to /usr/bin for system-wide access (optional):

```bash
sudo mv /usr/local/bin/cpu_air_prover /usr/bin/
sudo mv /usr/local/bin/cpu_air_verifier /usr/bin/
```

This step is actually optional but recommended if you want to make the binaries globally available without adding /usr/local/bin to your PATH.

## Adding Stone Binaries to the System PATH

If you prefer to leave the binaries in /usr/local/bin or any other folder, you can add that folder to your system’s PATH variable. This will ensure that the binaries can be executed from any directory.

1. Open your shell configuration file (e.g., .bashrc for bash, .zshrc for zsh):

```bash
nano ~/.bashrc # for bash users
nano ~/.zshrc # for zsh users
```

2. Add the following line to include /usr/local/bin in your PATH:

```bash
export PATH="/usr/local/bin:$PATH"
```

3. Save and close the file, then reload your shell to apply the changes:

```bash
source ~/.bashrc 
# or
source ~/.zshrc
```

This step ensures that binaries placed in /usr/local/bin can be accessed from anywhere in your system without needing to move them to /usr/bin.

### Verifying Installation

After placing the binaries or updating the PATH, you can verify the installation by running:

```bash
cpu_air_prover --help
cpu_air_verifier --help
```

If you see usage information, then the installation is successful. Hope you're smilling.
