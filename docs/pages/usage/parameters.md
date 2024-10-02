# Creating a Parameter File for the Stone Prover

To configure the Stone Prover for your specific program, you need to create a parameter file. This file defines settings such as field definitions, FRI configurations, and other operational constraints.

## Importance of Parameter Files

Parameter files are essential because they:

- **Customize the Prover**: Tailor settings to your program's requirements.
- **Optimize Performance**: Enhance proof generation speed and resource usage.
- **Define Constraints**: Specify conditions your program must adhere to.

## Sample Configuration

## JSON
```
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

## YAML
```
field: PrimeField0
stark:
  fri:
    fri_step_list:
      - 0
      - 4
      - 3
    last_layer_degree_bound: 64
    n_queries: 18
    proof_of_work_bits: 24
  log_n_cosets: 4
use_extension_field: false
```

## Arguments and Optional Parameters

### Required

- **`field`**: Finite field for computations.
- **`stark`**: STARK-specific configurations.

### Optional

- **`use_extension_field`**: Defaults to `false`.
- **Within `stark.fri`**:
  - **`fri_step_list`**: Defaults as needed.
  - **`last_layer_degree_bound`**: Default based on typical use cases.
  - **`n_queries`**: Adjust based on security/performance.
  - **`proof_of_work_bits`**: Adjust to balance security and usability.
- **`stark.log_n_cosets`**: Adjust based on desired security/performance.

## Validating the Parameter File

### Syntax Check

- **YAML**: Use a YAML linter.
- **JSON**: Use a JSON validator.

### Parameter Consistency

- Ensure correct data types.
- Verify nested parameters are properly structured.

### Field Validity

- Confirm `field` is supported by Stone Prover.
- Align with your program's cryptographic needs.

### STARK Configuration

- Ensure FRI settings match your program's requirements.
- Validate `log_n_cosets` for desired security and performance.

### Extension Field Usage

- Set `use_extension_field` based on computation needs.