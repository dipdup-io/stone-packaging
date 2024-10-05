# Stone Prover Parameters

## Introduction

The Stone Prover, developed by StarkWare, is a high-performance STARK prover designed for generating zero-knowledge proofs for computational integrity. This document explains how to configure and use parameter files for the Stone Prover based on the current implementation and test setup.

## Parameter Files

The Stone Prover uses two main JSON files for configuration:

1. `cpu_air_params.json`: Contains parameters for the STARK protocol
2. `cpu_air_prover_config.json`: Contains configuration for the prover itself

### cpu_air_params.json

This file configures the STARK protocol parameters. Here's the structure based on the provided examples:

```json
{
    "field": "PrimeField0",
    "stark": {
        "fri": {
            "fri_step_list": [0, 4, 3],
            "last_layer_degree_bound": 64,
            "n_queries": 18,
            "proof_of_work_bits": 24
        },
        "log_n_cosets": 4
    },
    "use_extension_field": false
}
```

#### Key Components

- `field`: Specifies the field used for computations (e.g., "PrimeField0")
- `stark`: Contains parameters specific to the STARK protocol
  - `fri`: Configures the FRI (Fast Reed-Solomon IOP) protocol
    - `fri_step_list`: Defines the degree reduction steps in FRI
    - `last_layer_degree_bound`: Maximum degree of the last FRI layer
    - `n_queries`: Number of queries for the FRI protocol
    - `proof_of_work_bits`: Adds a proof-of-work component for security
  - `log_n_cosets`: Logarithm (base 2) of the number of cosets used
- `use_extension_field`: Indicates whether to use an extension field

### cpu_air_prover_config.json

This file configures the prover itself. Here's the structure based on the provided examples:

```json
{
    "cached_lde_config": {
        "store_full_lde": false,
        "use_fft_for_eval": false
    },
    "constraint_polynomial_task_size": 256,
    "n_out_of_memory_merkle_layers": 1,
    "table_prover_n_tasks_per_segment": 32
}
```

#### Key Components

- `cached_lde_config`: Configuration for Low Degree Extension (LDE) caching
  - `store_full_lde`: Whether to store the full LDE
  - `use_fft_for_eval`: Whether to use Fast Fourier Transform for evaluation
- `constraint_polynomial_task_size`: Size of tasks for constraint polynomial computation
- `n_out_of_memory_merkle_layers`: Number of Merkle tree layers to keep out of memory
- `table_prover_n_tasks_per_segment`: Number of tasks per segment for table proving

## Usage

To use these parameter files with the Stone Prover, you typically run the prover with command-line arguments specifying the paths to these files. For example:

```bash
cpu_air_prover \
    --out_file=fibonacci_proof.json \
    --private_input_file=fibonacci_private_input.json \
    --public_input_file=fibonacci_public_input.json \
    --prover_config_file=cpu_air_prover_config.json \
    --parameter_file=cpu_air_params.json
```

## Additional Input Files

The prover also requires additional input files:

1. `fibonacci_private_input.json`: Contains private inputs for the computation
2. `fibonacci_public_input.json`: Contains public inputs and parameters for the computation

These files should be prepared according to the specific computation being proved.

## Best Practices

1. Start with the default parameters provided in the test files and adjust as needed for your specific use case.
2. Ensure all JSON files are correctly formatted and contain valid data.
3. When modifying parameters, consider the trade-offs between security, proof size, and proving time.
4. Test your parameter changes with actual computations to ensure they work for your specific use case.

## Troubleshooting

If you encounter issues:
1. Verify that all required files are in the correct locations and have the correct permissions.
2. Check that your input files are correctly formatted and contain valid data.
3. Ensure that the paths in your command match the actual file locations.
4. Review the Stone Prover logs for any error messages or warnings.

For more detailed troubleshooting, refer to the official Stone Prover documentation and GitHub repository.

## References

- Stone Prover GitHub Repository: https://github.com/dipdup-io/stone-packaging
- StarkWare Official Documentation: https://docs.starkware.co/
- "Overview of the Stone Prover" by LambdaClass: https://blog.lambdaclass.com/overview-of-the-stone-prover/

- "Diving into the Code of Stone Prover" by Starknet: https://www.starknet.io/blog/diving-into-the-code-of-stone-prover-video/

-STARK Paper: "Scalable, transparent, and post-quantum secure computational integrity" by Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, and Michael Riabzev. Available at: https://eprint.iacr.org/2018/046
