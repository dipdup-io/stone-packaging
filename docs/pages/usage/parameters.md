# Stone Prover Parameters

## Introduction

StarkWare developed a high-performance STARK prover called the Stone Prover. It's designed to provide zero-knowledge proofs for computational integrity, which are vital in blockchain and other cryptographic applications. 

When setting the Stone Prover for various programs and use cases, parameter files are essential. Users can alter constraint systems, speed optimisations, input sizes, and other proving process elements with these files.


Properly configured parameter files are very important for the following:
1. Ensuring the prover can handle your specific program or computation
2. Optimizing proof generation time and resource usage
3. Balancing security and efficiency in the resulting proofs

This documentation will walk you through the process of creating, understanding, and optimizing parameter files for the Stone Prover.

## Parameter File Format

JSON (JavaScript Object Notation) files are used by the Stone Prover to configure its parameters. These files include important configurations that influence the behaviour, efficiency, and final proof properties of the prover.


Key aspects of the parameter file format:

1. File type: JSON
2. Structure: A nested object with specific keys for different aspects of the prover
3. File extension: Typically `.json`

The parameter file must satisfy certain mathematical relationships to ensure proper functioning. The most critical equation is:

```
log₂(last_layer_degree_bound) + ∑fri_step_list = log₂(#steps) + 4
```

Where:
- `last_layer_degree_bound` is a parameter in the FRI (Fast Reed-Solomon IOP) configuration
- `fri_step_list` is a list of integers representing FRI step sizes
- `#steps` is the number of steps in the computation being proved

The constant 4 in this equation represents log₂(trace

## Key Components

The Stone Prover parameter file contains several critical components that configure various parts of the proving process.  These are the essential elements:


### Field Prime

The prime field that the STARK proof is created upon is defined by the field_prime argument. The proof's level of security is usually determined by this big prime number.


Example:
```json
"field_prime": 3618502788666131213697322783095070105623107215331596699973092056135872020481
```

### STARK Configuration

The `stark` object contains parameters specific to the STARK protocol:

#### FRI (Fast Reed-Solomon Interactive Oracle Proofs)

The `fri` object within `stark` configures the FRI protocol, which is crucial for the low-degree testing part of the STARK proof:

```json
"fri": {
  "fri_step_list": [0, 3, 3, 3, 3, 3, 2, 1],
  "last_layer_degree_bound": 64,
  "n_queries": 18,
  "proof_of_work_bits": 24
}
```

- `fri_step_list`: A list of integers representing the step sizes in the FRI protocol. Each number indicates how many times the polynomial degree is reduced in each step.
- `last_layer_degree_bound`: The maximum degree of the polynomial in the last layer of FRI.
- `n_queries`: The number of query points used in the FRI protocol.
- `proof_of_work_bits`: The number of bits used for the proof-of-work component, which adds security against certain types of attacks.

#### Log Number of Cosets

The `log_n_cosets` parameter determines the size of the evaluation domain:

```json
"log_n_cosets": 4
```

This value is the logarithm (base 2) of the number of cosets used in the proof construction.

### Program-Specific Parameters

Depending on the type of program being proved (e.g., Cairo programs, custom AIRs), there may be additional parameters specific to that program type. These could include:

- Input sizes
- Memory segment configurations
- Custom constraint parameters

These characteristics would be established in accordance with the particular program needs and the AIR (Algebraic Intermediate Representation) that is being utilised.

It is essential to comprehend and set up these elements appropriately in order to produce reliable and effective STARK proofs using the Stone Prover.


## Creating a Parameter File

In order for the Stone Prover to provide accurate and effective proofs, it is imperative that you create a suitable parameter file. To generate a parameter file for your particular use case, follow these steps:


1. Determine Your Program Type
   - Identify whether you're using a Cairo program, a custom AIR, or another type of computation.
   - This will influence which parameters you need to include.

2. Set the Field Prime
   - Choose a prime field large enough to ensure security for your application.
   - For most applications, you can use the default Stark252 prime:
     ```json
     "field_prime": 3618502788666131213697322783095070105623107215331596699973092056135872020481
     ```

3. Configure STARK Parameters
   - Set up the `stark` object with appropriate FRI parameters:
     ```json
     "stark": {
       "fri": {
         "fri_step_list": [0, 3, 3, 3, 3, 3, 2, 1],
         "last_layer_degree_bound": 64,
         "n_queries": 18,
         "proof_of_work_bits": 24
       },
       "log_n_cosets": 4
     }
     ```
   - Adjust `fri_step_list` and `last_layer_degree_bound` based on your program's size and security requirements.

4. Add Program-Specific Parameters
   - For Cairo programs:
     - Specify memory segment sizes, number of steps, etc.
   - For custom AIRs:
     - Include parameters related to your specific constraint system.

5. Validate the Parameter File
   - Ensure that the critical equation is satisfied:
     ```
     log₂(last_layer_degree_bound) + ∑fri_step_list = log₂(#steps) + 4
     ```
   - Check that all required parameters for your program type are included.

6. Save the File
   - Save your parameter file with a `.json` extension.
   - Use a descriptive name, e.g., `my_program_params.json`.

7. Test the Parameter File
   - Run the Stone Prover with your parameter file on a small test case.
   - Verify that the prover executes successfully and produces a valid proof.

Keep in mind that your particular use case may dictate different requirements for the precise characteristics. When creating a parameter file, always check the requirements of your program and the Stone Prover manual.


## Example Configuration

Below is an example of a complete parameter file for the Stone Prover, along with explanations for each component:

```json
{
  "field_prime": 3618502788666131213697322783095070105623107215331596699973092056135872020481,
  "stark": {
    "fri": {
      "fri_step_list": [0, 3, 3, 3, 3, 3, 2, 1],
      "last_layer_degree_bound": 64,
      "n_queries": 18,
      "proof_of_work_bits": 24
    },
    "log_n_cosets": 4
  },
  "program_specific": {
    "number_of_steps": 1048576,
    "memory_segments": {
      "main_page": {"begin_addr": 0, "stop_ptr": 131072},
      "program": {"begin_addr": 131072, "stop_ptr": 262144}
    }
  }
}
```

Let's break down each part of this configuration:

1. `field_prime`: This is the Stark252 prime, commonly used in Stone Prover applications.

2. `stark`: This object contains STARK-specific parameters:
   - `fri`: Configures the FRI protocol:
     - `fri_step_list`: Defines the degree reduction steps in FRI. Each number represents how many times the degree is halved in that step.
     - `last_layer_degree_bound`: The maximum degree of the last FRI layer.
     - `n_queries`: Number of queries for the FRI protocol.
     - `proof_of_work_bits`: Adds security against certain types of attacks.
   - `log_n_cosets`: Logarithm (base 2) of the number of cosets used in the proof.

3. `program_specific`: This object contains parameters specific to the program being proved:
   - `number_of_steps`: The number of steps in the computation.
   - `memory_segments`: Defines the memory layout for the program:
     - `main_page`: The main memory segment.
     - `program`: The segment containing the program instructions.


```
log₂(last_layer_degree_bound) + ∑fri_step_list = log₂(number_of_steps) + 4
```

In this case: log₂(64) + (0 + 3 + 3 + 3 + 3 + 3 + 2 + 1) = log₂(1048576) + 4, which equals 20 on both sides.

## Validation



1. JSON Syntax Check
   - Use a JSON validator tool or a text editor with JSON linting capabilities to ensure your file has valid JSON syntax.
   - Common errors include missing commas, unmatched brackets, or incorrect quotation marks.

2. Required Fields Check
   - Verify that all required fields are present in your parameter file:
     - `field_prime`
     - `stark` object with `fri` and `log_n_cosets`
     - Any program-specific parameters required for your use case

3. Field Prime Validation
   - Ensure the `field_prime` is a valid prime number.
   - For most applications, it should be the Stark252 prime: 3618502788666131213697322783095070105623107215331596699973092056135872020481

4. FRI Parameters Check
   - Verify that `fri_step_list` is a list of non-negative integers.
   - Check that `last_layer_degree_bound` is a power of 2.
   - Ensure `n_queries` and `proof_of_work_bits` are positive integers.

5. Critical Equation Verification
   - Verify that the following equation holds:
     ```
     log₂(last_layer_degree_bound) + ∑fri_step_list = log₂(number_of_steps) + 4
     ```
   - Use a calculator or a simple script to check this equation.

6. Program-Specific Validation
   - For Cairo programs:
     - Ensure memory segment addresses are properly aligned and don't overlap.
     - Verify that `number_of_steps` is consistent with your program's actual length.
   - For custom AIRs:
     - Check that all required parameters for your constraint system are present and have valid values.

7. Consistency Check
   - Ensure that all parameters are consistent with each other. For example, the total memory size should be sufficient for the number of steps specified.

8. Stone Prover Dry Run
   - If possible, perform a dry run with the Stone Prover using your parameter file.
   - Look for any error messages or warnings that might indicate issues with your configuration.


## Adjusting Parameters for Different Programs

For different scenarios you can use this method

### Small vs. Large Programs

For smaller programs (e.g., fewer than 2^20 steps):
- Use a smaller `last_layer_degree_bound`, such as 64 or 32
- Use a shorter `fri_step_list`, e.g., [0, 3, 3, 3, 2, 1]

For larger programs (e.g., more than 2^20 steps):
- Increase `last_layer_degree_bound` to 128 or 256
- Use a longer `fri_step_list`, e.g., [0, 3, 3, 3, 3, 3, 3, 2, 1]

### Cairo Programs vs. Custom AIRs

For Cairo programs:
- Use the default Stark252 prime field
- Adjust `number_of_steps` based on your program's execution trace
- Configure `memory_segments` according to your program's memory usage

For custom AIRs:
- Choose a prime field appropriate for your constraint system
- Adjust `number_of_steps` based on the size of your computation
- Add custom parameters specific to your AIR implementation

### Security Considerations

For higher security:
- Increase `n_queries` (e.g., from 18 to 24 or 32)
- Increase `proof_of_work_bits` (e.g., from 24 to 28 or 32)

Also note that increasing these parameters will result in longer proving times and larger proof sizes.

### Example Configurations

1. Small Cairo Program:
```json
{
  "field_prime": 3618502788666131213697322783095070105623107215331596699973092056135872020481,
  "stark": {
    "fri": {
      "fri_step_list": [0, 3, 3, 3, 2, 1],
      "last_layer_degree_bound": 32,
      "n_queries": 18,
      "proof_of_work_bits": 24
    },
    "log_n_cosets": 4
  },
  "program_specific": {
    "number_of_steps": 65536,
    "memory_segments": {
      "main_page": {"begin_addr": 0, "stop_ptr": 8192},
      "program": {"begin_addr": 8192, "stop_ptr": 16384}
    }
  }
}
```

2. Large Cairo Program with High Security:
```json
{
  "field_prime": 3618502788666131213697322783095070105623107215331596699973092056135872020481,
  "stark": {
    "fri": {
      "fri_step_list": [0, 3, 3, 3, 3, 3, 3, 2, 1],
      "last_layer_degree_bound": 256,
      "n_queries": 32,
      "proof_of_work_bits": 28
    },
    "log_n_cosets": 4
  },
  "program_specific": {
    "number_of_steps": 4194304,
    "memory_segments": {
      "main_page": {"begin_addr": 0, "stop_ptr": 524288},
      "program": {"begin_addr": 524288, "stop_ptr": 1048576}
    }
  }
}
```

## Best Practices

When working with the Stone Prover and configuring its parameters, following these best practices can help you optimize performance, security, and reliability:

1. Understand Your Program's Requirements
   - Analyze your program's complexity, memory usage, and specific needs before setting parameters.
   - Choose parameters that accommodate your program's size and computational requirements.

2. Balance Security and Performance
   - Higher security often comes at the cost of performance. Find the right balance for your use case.
   - Increase `n_queries` and `proof_of_work_bits` for higher security, but be aware this will increase proving time.

3. Optimize FRI Parameters
   - Adjust `fri_step_list` based on your program's size. Larger programs generally benefit from more FRI steps.
   - Keep `last_layer_degree_bound` as small as possible while still satisfying the critical equation.

4. Use Powers of 2
   - When possible, use powers of 2 for parameters like `number_of_steps` and `last_layer_degree_bound`.
   - This can lead to more efficient computations in the proving process.

5. Start with Defaults, Then Customize
   - Begin with default parameters provided in Stone Prover examples or documentation.
   - Gradually adjust parameters based on your specific needs and performance observations.

6. Test Incrementally
   - When changing parameters, modify one at a time and test the impact before making further changes.
   - This approach helps isolate the effects of each parameter on proving time and proof size.

7. Monitor Resource Usage
   - Keep track of memory usage and CPU time during the proving process.
   - If resource usage is too high, consider adjusting parameters or optimizing your program.

8. Version Control Your Parameter Files
   - Keep different versions of parameter files for various use cases or program sizes.
   - Document the reasons for parameter choices in comments or accompanying documentation.

9. Regular Updates
   - Stay informed about updates to the Stone Prover and best practices in the STARK community.
   - Periodically review and update your parameter files based on new recommendations or improvements in the prover.

10. Collaborate and Seek Feedback
    - Share your parameter configurations with the community (without revealing sensitive information).
    - Seek feedback from experienced users or the Stone Prover developers for complex use cases.



## Testing the Parameter File

Here's an example of how to use a parameter file with the Stone Prover:

1. Save your parameter file as `my_params.json`

2. Run the Stone Prover with:

   ```bash
   cpu_air_prover --parameter_file=my_params.json --public_input_file=public_input.json --private_input_file=private_input.json --prover_config_file=prover_config.json --out_file=proof.json
   ```

3. Verify the proof with:

   ```bash
   cpu_air_verifier --in_file=proof.json
   ```

In our tests with a small Cairo program (65,536 steps), the proving process took approximately X minutes on a machine with Y specifications. Increasing `n_queries` from 18 to 24 increased the proving time by about Z% but enhanced security.


## Troubleshooting

During your work with the Stone Prover, parameter configuration problems could come up. The following are some typical issues and possible fixes for them:


1. Prover Fails to Start
   - Check JSON syntax in your parameter file.
   - Ensure all required fields are present and correctly formatted.

2. "Invalid FRI Parameters" Error
   - Verify that your `fri_step_list` contains only non-negative integers.
   - Check that `last_layer_degree_bound` is a power of 2.

3. "Constraint Degree Too High" Error
   - Increase `last_layer_degree_bound` or adjust `fri_step_list`.
   - Ensure the critical equation is satisfied.

4. Out of Memory Errors
   - Reduce `number_of_steps` or optimize your program to use less memory.
   - If possible, increase the available RAM on your system.

5. Extremely Long Proving Times
   - Consider reducing `n_queries` or `proof_of_work_bits`, but be aware this may impact security.
   - Optimize your program to reduce the number of steps if possible.

6. Proof Verification Fails
   - Double-check all parameters, especially `field_prime` and FRI settings.
   - Ensure your program's output matches the expected public inputs.

7. Inconsistent Results Across Runs
   - Verify that your program is deterministic and doesn't rely on random inputs.
   - Check for potential race conditions or undefined behavior in your code.


## References

1. Stone Prover GitHub Repository: https://github.com/starkware-libs/stone-prover

2. StarkWare Official Documentation: https://docs.starkware.co/

3. "Overview of the Stone Prover" by LambdaClass: https://blog.lambdaclass.com/overview-of-the-stone-prover/

4. "Diving into the Code of Stone Prover" by Starknet: https://www.starknet.io/blog/diving-into-the-code-of-stone-prover-video/

5. STARK Paper: "Scalable, transparent, and post-quantum secure computational integrity" by Eli Ben-Sasson, Iddo Bentov, Yinon Horesh, and Michael Riabzev. Available at: https://eprint.iacr.org/2018/046

6. Cairo Programming Language Documentation: https://www.cairo-lang.org/docs/

7. StarkEx System Documentation: https://docs.starkware.co/starkex-v4/


