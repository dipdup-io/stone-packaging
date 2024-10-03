# Stone Prover Parameters

## Introduction

The Stone Prover is a high-performance STARK prover developed by StarkWare. It's designed to generate zero-knowledge proofs for computational integrity, which are crucial in blockchain and other cryptographic applications. 

Parameter files play a vital role in configuring the Stone Prover for different programs and use cases. These files allow users to customize various aspects of the proving process, including input sizes, constraint systems, and performance optimizations.

Properly configured parameter files are essential for:
1. Ensuring the prover can handle your specific program or computation
2. Optimizing proof generation time and resource usage
3. Balancing security and efficiency in the resulting proofs

This guide will walk you through the process of creating, understanding, and optimizing parameter files for the Stone Prover.

## Parameter File Format

The Stone Prover uses JSON (JavaScript Object Notation) files for parameter configuration. These files contain crucial settings that affect the prover's behavior, performance, and the resulting proof characteristics.

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

The Stone Prover parameter file contains several important components that configure various aspects of the proving process. Let's examine each of these key components:

### Field Prime

The `field_prime` parameter defines the prime field over which the STARK proof is constructed. This is typically a large prime number that determines the security level of the proof.

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

These parameters would be defined based on the specific requirements of the program and the AIR (Algebraic Intermediate Representation) being used.

Understanding and correctly configuring these components is crucial for generating valid and efficient STARK proofs with the Stone Prover.

## Creating a Parameter File

Creating an appropriate parameter file is crucial for the Stone Prover to generate correct and efficient proofs. Follow these steps to create a parameter file for your specific use case:

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

Remember, the exact parameters you need may vary depending on your specific use case. Always refer to the Stone Prover documentation and your program's requirements when creating a parameter file.

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

This example configuration is suitable for a medium-sized Cairo program. You may need to adjust these parameters based on your specific program's requirements and the desired security level.

Remember to validate that this configuration satisfies the critical equation:

```
log₂(last_layer_degree_bound) + ∑fri_step_list = log₂(number_of_steps) + 4
```

In this case: log₂(64) + (0 + 3 + 3 + 3 + 3 + 3 + 2 + 1) = log₂(1048576) + 4, which equals 20 on both sides.

## Validation

Before using your parameter file with the Stone Prover, it's crucial to validate it to ensure it meets all requirements and will work correctly. Follow these steps to validate your parameter file:

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

By following these validation steps, you can catch and correct many common issues before attempting to generate a proof. This can save time and prevent errors during the actual proving process.

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

By following these best practices, you can make the most of the Stone Prover's capabilities while ensuring efficient and secure proof generation for your specific use case.

## Troubleshooting

When working with the Stone Prover, you may encounter issues related to parameter configuration. Here are some common problems and their potential solutions:

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

These references provide additional information on the Stone Prover, STARK proofs, and related technologies. They can be valuable resources for users looking to deepen their understanding of the system or troubleshoot complex issues.