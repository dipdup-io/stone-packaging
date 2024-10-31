# Installing Stone Using Homebrew

In this guide, you'll learn how to easily install Stone on your macOS ARM64 system using Homebrew, a package manager for macOS.

## Prerequisites
Before we get started, make sure you have the following:
- A macOS ARM64 system.
- Homebrew installed on your machine. If you haven't set up Homebrew yet you can follow the simple instructions at [brew.sh](https://brew.sh/).

## Installation Steps
Let’s walk through the steps to install the `stone-prover` package via Homebrew:

1. **Tap the Stone Prover Repository**  
   First, add the `homebrew-stone-prover` tap to your list of Homebrew repositories:
   ```bash
   brew tap dipdup-io/homebrew-stone-prover
   ```
   This tap makes it super easy to install the Stone Prover.

2. **Install the stone-prover Package**  
   Now, let’s install the `stone-prover` package using Homebrew:
   ```bash
   brew install stone-prover
   ```
   This command will download and install the latest version of Stone on your system. Easy peasy!

## Troubleshooting
If you run into any bumps along the way during installation or usage, here are some helpful tips:

- **Update Homebrew:**  
  Make sure your Homebrew installation is up to date:
  ```bash
  brew update
  ```

- **Reinstall the Package:**  
  If the installation didn’t go as planned, you can try reinstalling:
  ```bash
  brew reinstall stone-prover
  ```

- **Check the Homebrew Tap Repository:**  
  For more information, to report issues, or to contribute to the formula, feel free to visit the [homebrew-stone-prover](https://github.com/dipdup-io/homebrew-stone-prover) repository.