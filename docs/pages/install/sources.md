# Stone Prover/Verifier Build Guide from Source
This guide provides step-by-step instructions for building the Stone prover and verifier from source on Linux and macOS devices. The steps include setting up the environment, installing dependencies, and building the project using Bazelisk.

## Install Dependencies
To build stone prover/verifier from sources, you'll need the following dependencies installed.
```sh
sudo apt-get update
sudo apt-get install -y git wget python3 python3-pip
```

## Installation Guide
### Step 1: Install System Dependencies
Install the necessary system libraries using your os package manager.
```sh
sudo apt-get install -y libtinfo5 libdw-dev libgmp3-dev
```

### Step 2: Install Python Packages
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

### Step 3: Download and Set Up Bazelisk
Install the Bazelisk binary to build the stone prover/verifier.
```sh
wget "https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-linux-amd64"
chmod 755 "bazelisk-linux-amd64"
sudo mv "bazelisk-linux-amd64" /bin/bazelisk
```

### Step 4: Clone the Stone Prover Repository
Clone the Stone prover repository from GitHub.
```sh
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover
```

### Step 5: Navigate to the Project Directory
Change to the Stone prover project directory.
```sh
cd /tmp/stone-prover
```

### Step 6: Build the Project with Bazelisk
Build the Stone prover and verifier using Bazelisk. Ensure the architecture is passed correctly.
```sh
bazelisk build //...
```

### Step 7: Run Tests with Bazelisk
Run the tests to verify the build.
```sh
bazelisk test //...
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

## Install Dependencies
Homebrew is most likely already installed. If not:
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

To install the software, you'll need the following dependencies:
```sh
brew install git
brew install gmp
brew install python@3.9
```
## Installation Guide
### Step 1: Set Up Environment Variables
To ensure compatibility with your system architecture(silicon | intel), set the `arch` variable by running the following command:

```sh
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
# --break-system-packages is specified to avoid issues related to PEP 668 https://peps.python.org/pep-0668/
python3 -m pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0 --break-system-packages
```

### Step 4: Install Bazelisk
Install the Bazelisk binary to build the stone prover/verifier.
```sh
brew install bazelisk
```

### Step 5: Clone the Stone Prover Repository
Clone the Stone prover repository from GitHub.
```sh
git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover
```

### Step 6: Navigate to the Project Directory
Change to the Stone prover project directory.
```sh
cd /tmp/stone-prover
```

### Step 7: Build the Project with Bazelisk
Build the Stone prover and verifier using Bazelisk. Ensure the architecture is passed correctly.
```sh
bazelisk build //...
```

### Step 8: Run Tests with Bazelisk
Run the tests to verify the build.
```sh
bazelisk test //...
```

### Step 9: Create Symbolic Links for Prover and Verifier
To easily access the built prover and verifier binaries, create symbolic links in /usr/local/bin.
```sh
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_prover /usr/local/bin/cpu_air_prover
ln -s /tmp/stone-prover/build/bazelbin/src/starkware/main/cpu/cpu_air_verifier /usr/local/bin/cpu_air_verifier
```

### Step 10: Locating the built binaries
```sh
which cpu_air_prover
which cpu_air_verifier
# cpu_air_prover --help
# cpu_air_verifier --help
```