# Installing Stone on Ubuntu/Debian

This guide provides instructions to install Stone from a `.deb` package on Ubuntu or Debian.

## Prerequisites

- A Debian-based system (recommended: Ubuntu 22.04 or Debian 11)
- Super user Privilege (sudo) access to install packages

## Step 1: Download the Stone `.deb` Package

Download the latest .deb package from the Stone Packaging Releases page or using `wget` to download it directly:

```bash
wget -O /tmp/stone-prover-linux-x86_64.deb https://github.com/dipdup-io/stone-packaging/releases/latest/download/stone-prover-linux-x86_64.deb
```

## Step 2: Installating the Package.

**Install the package:** Run the following command to install Stone:
```bash
sudo dpkg -i /tmp/stone-prover-linux-x86_64.deb 
```
