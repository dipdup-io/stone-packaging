# Installing Stone on Ubuntu/Debian

This guide provides instructions to install Stone from a `.deb` package on Ubuntu or Debian.

## Prerequisites

- A Debian-based system (recommended: Ubuntu 22.04 or Debian 11; minimum supported: Ubuntu 18.04 or Debian 9)
- Super user Privilege (sudo) access to install packages

## Step 1: Download the Stone `.deb` Package

Download the latest .deb package from the Stone Packaging Releases page to the /tmp directory. Alternatively, you can use `wget` to download it directly.

**Example**
```bash
wget -O /tmp/stone-prover-linux-x86_64.deb https://github.com/dipdup-io/stone-packaging/releases/latest/download/stone-prover-linux-x86_64.deb
```

## Step 2: Installating the Package.

**Install the package:** Run the following command to install Stone:
```bash
sudo dpkg -i /tmp/stone-prover-linux-x86_64.deb 
```

**Enter your password:** When prompted, enter your user password to proceed with the installation:
```bash
[sudo] password for <user>:
```



## Step 3: Implement Run Test Proof

**Clone the Repository:** First, clone the Stone packaging repository to your local machine. This will allow you to access the necessary test files.

```bash
git clone https://github.com/dipdup-io/stone-packaging.git /tmp/stone-packaging
``` 

**Navigate to Test Files Directory:** Change to the directory where the test files are located. This is where you will find the input files needed for running the proof.
```bash
cd /tmp/stone-packaging/test_files 
```

**Run the Proof**: Execute the proof command using the cpu_air_prover. This command generates a proof file in the specificed `--out_file` option value(fibonacci_proof.json).
```bash
cpu_air_prover --out_file=fibonacci_proof.json --private_input_file=fibonacci_private_input.json --public_input_file=fibonacci_public_input.json --prover_config_file=cpu_air_prover_config.json --parameter_file=cpu_air_params.json 
```

**Verify the Proof:** After generating the proof, verify it using the cpu_air_verifier. This command checks the validity of the proof and outputs a success message if the verification passes.
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."