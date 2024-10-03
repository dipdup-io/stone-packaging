---
title: Cairo artifacts
---

# Executing cairo program to obtain execution trace, memory, and AIR inputs

This document guides the user through installing and running Cairo programs to obtain execution traces, memory and AIR inputs, as well as creating and verifying tests.

## Installing Rust

In order to run the program you need to install Rust. Follow the instructions on the official website [here](https://www.rust-lang.org/tools/install).

## Installing corelib

If you have Scarb installed in your system, you can omit this first step. Since you already have the Cairo repository in your system. Otherwise follow all these steps.

**1.** First you need to clone the Cairo repository:
```bash
git clone --depth=1 -b v2.8.0 https://github.com/starkware-libs/cairo.git
```

**2.** Second, you have to move the corelib from the cloned repository to your current path.
```bash
mv cairo/corelib/ .
```

**3.** Finally, remove the cloned repository:
```bash
rm -rf cairo/
```

## Installing cairo1-run
To install `cairo1-run` run the following command:

```bash
cargo install --git https://github.com/lambdaclass/cairo-vm cairo1-run
```

### Installing cairo1-run from sources
If you prefer to install it from sources you can follow these steps:

Clone the repo:
```bash
git clone https://github.com/lambdaclass/cairo-vm.git
```

Move inside of the cairo1-run directory:
```bash
cd cairo-vm/cairo1-run
```

Run makefile:
```bash
make deps
```


## Running cairo1-run in a Scarb project
As cairo1-run skips gas checks when running, you will need to add the following to your Scarb.toml to ensure that compilation is done without adding gas checks:

```toml
[cairo]
enable-gas = false
```

Then you can compile your project with `scarb build`

Then run the compiled project's sierra file located at `project_name/target/project_name.sierra.json`:

```bash
  cargo run path-to-project/target/project_name.sierra.json 
```


## Creating and verifying a proof of a Cairo program


Navigate to the example test directory (`e2e_test/Cairo`):

```bash
cd e2e_test/Cairo
```

Compile and run the program to generate the prover input files:

```bash
cargo run ../../fibonacci.cairo \
    --layout=small \
    --air_public_input=fibonacci_public_input.json \
    --air_private_input=fibonacci_private_input.json \
    --trace_file=fibonacci_trace.bin \
    --memory_file=fibonacci_memory.bin \
    --proof_mode
```

Run the prover:
```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=../../cpu_air_prover_config.json \
    --parameter_file=../../cpu_air_params.json
```

The proof is now available in the file `fibonacci_proof.json`.

Finally, run the verifier to verify the proof:
```bash
cpu_air_verifier --in_file=fibonacci_proof.json && echo "Successfully verified example proof."
```

**Note**: The verifier only checks that the proof is consistent with the public input section that appears in the proof file. The public input section itself is not checked. For example, the verifier does not check what Cairo program is being proved, or that the builtins memory segments are of valid size. These things need to be checked externally.


## CLI argument list

The cairo1-run cli supports the following optional arguments:

* `--layout all_cairo`: Sets the layout for the cairo_run. This will limit the available builtins. The deafult layout is `plain`, which has no builtins. For general purpose, the `all_cairo` layout contains all currently available builtins.

* `--args <ARGUMENTS>`: Receives the arguments to be passed to the program's main function. Receives whitespace-separated values which can be numbers or arrays, with arrays consisting of whitespace-separated numbers wrapped between brackets

* `--args_file <FILENAME>`: Receives the name of the file from where arguments should be read. Expects the same argument format of the `--args` flag. Should be used if the list of arguments exceeds the shell's capacity.

* `--trace_file <TRACE_FILE>`: Receives the name of a file and outputs the relocated trace into it

* `--memory_file <MEMORY_FILE>`: Receives the name of a file and outputs the relocated memory into it

* `--proof_mode`: Runs the program in proof_mode. Only allows `Array<felt252>` as return and input value.

* `--air_public_input <AIR_PUBLIC_INPUT>`: Receives the name of a file and outputs the AIR public inputs into it. Can only be used if proof_mode is also enabled.

* `--air_private_input <AIR_PRIVATE_INPUT>`: Receives the name of a file and outputs the AIR private inputs into it. Can only be used if proof_mode, trace_file & memory_file are also enabled.

* `--cairo_pie_output <CAIRO_PIE_OUTPUT>`: Receives the name of a file and outputs the Cairo PIE into it. Can only be used if proof_mode, is not enabled.

* `--append_return_values`: Adds extra instructions to the program in order to append the return and input values to the output builtin's segment. This is the default behaviour for proof_mode. Only allows `Array<felt252>` as return and input value.
