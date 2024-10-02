# Installing Stone on Ubuntu/Debian

This guide provides instructions to install Stone from a `.deb` package on Ubuntu or Debian.

## Prerequisites

- A Debian-based system (Ubuntu >=18.04/20.04/22.04 or Debian >=9/10/11)
- Super user Privilege (sudo) access to install packages

## Step 1: Download the Stone `.deb` Package

Download the latest .deb package from the Stone Releases page. You can also download it using wget:

wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/<stone-prover-<linux system architecture>>

**Example**
```bash

wget https://github.com/dipdup-io/stone-packaging/releases/latest/download/stone-prover-linux-x86_64.deb
```

## Installating the Package.

cd into the directory holding the stone-prover-<linux system architecture> file



```bash
sudo dpkg -i stone-prover-linux-x86_64.deb

### Resolve Dependencies issue
Bash

sudo apt-get install -f

### Verify Inatallation 

Bash

stone-prover --version

## Implement Run Test Proof
