# Stone Prover/Verifier Build Guide from Source
This guide provides step-by-step instructions for building the Stone prover and verifier from source on Linux and macOS devices. The steps include setting up the environment, installing dependencies, and building the project using Bazelisk.

### Prerequisites
Ensure that your system meets the following dependencies before proceeding with the build process.

- `Git`
- `wget`
- `Python 3.9+`
- `pip` for Python package management

## Install Dependencies
### Linux
```sh
sudo apt-get update
sudo apt-get install -y git wget python3 python3-pip
```

## Installation Guide
### Step 1: Set Up Environment Variables
To ensure compatibility with your system, set the `os` and `arch` variables by running the following commands:

```sh
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)
```

### Step 2: Set Environment Variables for Non-Interactive Installations
This step prevents prompts during the installation of packages.
```sh
export DEBIAN_FRONTEND=noninteractive
```

### Step 3: Install System Dependencies
Install the necessary system libraries using your os package manager.
```sh
sudo apt-get install -y libtinfo5 libdw-dev libgmp3-dev
```

### Step 4: Install Python Packages
Install the required Python packages, including specific versions of sympy and cairo-lang, along with cpplint, pytest, and numpy.
```sh
pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

# If you encounter issues using pip due to PEP 668 https://peps.python.org/pep-0668/
# - Alternative 1
# Use a venv https://docs.python.org/3/library/venv.html
# python3 -m venv .venv
# source .venv/bin/activate
# - Alternative 2
# sudo rm /opt/homebrew/Cellar/python\@3*/**/EXTERNALLY-MANAGED
# pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0 
```

### Step 5: Download and Set Up Bazelisk
Download the Bazelisk binary appropriate for your OS and architecture.
```sh
wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-$os-$arch"
chmod 755 "bazelisk-$os-$arch"
sudo mv "bazelisk-$os-$arch" /bin/bazelisk
```

### Step 6: Clone the Stone Prover Repository
Clone the Stone prover repository from GitHub.
```sh
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover
```

### Step 7: Navigate to the Project Directory
Change to the Stone prover project directory.
```sh
cd /tmp/stone-prover || exit
```

### Step 8: Build the Project with Bazelisk
Build the Stone prover and verifier using Bazelisk. Ensure the architecture is passed correctly.
```sh
bazelisk build --cpu=$arch //...
```

### Step 9: Run Tests with Bazelisk
Run the tests to verify the build.
```sh
bazelisk test --cpu=$arch //...
```

### Step 10: Create Symbolic Links for Prover and Verifier
To easily access the built prover and verifier binaries, create symbolic links in /usr/local/bin.
```sh
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier
```

### Step 11: Locating the built binaries
```sh
which cpu_air_prover
which cpu_air_verifier
# cpu_air_prover --help
# cpu_air_verifier --help
```

## Install Dependencies
### macOS
```sh
# Homebrew is most likely already installed. If not, uncomment the next line.
# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git
brew install gmp
brew install python@3.9
```
## Installation Guide
### Step 1: Set Up Environment Variables
To ensure compatibility with your system, set the `os` and `arch` variables by running the following commands:

```sh
os=$(uname | tr '[:upper:]' '[:lower:]')
arch=$(uname -m | sed s/aarch64/arm64/ | sed s/x86_64/amd64/)
```

### Step 2: Install GMP Library
Install the GMP library using Homebrew.
```sh
brew install gmp
```

### Step 3: Install Python Packages
Install the required Python packages, including specific versions of sympy and cairo-lang, along with cpplint, pytest, and numpy.
```sh
python3 -m pip install --upgrade pip
# --break-system-packages is specified   to avoid issues related to PEP 668 https://peps.python.org/pep-0668/
python3 -m pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0 --break-system-packages
```

### Step 4: Install Bazelisk
```sh
brew install bazelisk
```

## Common Steps for Both Linux and macOS
### Step 4: Clone the Stone Prover Repository
Clone the Stone prover repository from GitHub.
```sh
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover
```

### Step 5: Navigate to the Project Directory
Change to the Stone prover project directory.
```sh
cd /tmp/stone-prover || exit
```

### Step 6: Build the Project with Bazelisk
Build the Stone prover and verifier using Bazelisk. Ensure the architecture is passed correctly.
```sh
bazelisk build --cpu=$arch //...
```

### Step 7: Run Tests with Bazelisk
Run the tests to verify the build.
```sh
bazelisk test --cpu=$arch //...
```

### Step 8: Create Symbolic Links for Prover and Verifier
To easily access the built prover and verifier binaries, create symbolic links in /usr/local/bin.
```sh
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier
```

### Step 9: Locating the built binaries
```sh
which cpu_air_prover
which cpu_air_verifier
# cpu_air_prover --help
# cpu_air_verifier --help
```