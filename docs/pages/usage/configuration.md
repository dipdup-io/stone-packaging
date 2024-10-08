## Stone Prover Configuration 

This guide will explain how to create a configuration file for the Stone prover, focusing on the security settings of the FRI protocol and the format of the configuration file. It also covers detailed instructions on configuring specific parameters for an optimal balance between security and performance.

### 1. Overview of the Stone Prover Configuration

The Stone Prover Configuration defines the parameters that govern how the Stone prover operates in proving systems based on the STARK protocol. These configurations can significantly affect both the performance and security of the proving and verification processes. The configuration is stored in JSON files, such as `cpu_air_params.json` and `cpu_air_prover_config.json`, which allow the user to set up various aspects of the prover and verifier interaction.

A breakdpwn of key areas in  Stone Prover configuration:

**i. Field Configuration**

The field configuration is one of the most fundamental aspects of the proving system, as it defines the arithmetic field in which computations take place.

Field Type (`field`): The proving system relies on operations in a specific prime field. This configuration option defines the field. For example:

  `"field": "PrimeField0"`

  In this example, computations are performed in a prime field denoted as `PrimeField0`.

**ii. STARK Configuration**

This section encompasses the STARK-related configurations, which include how the Fast Reed-Solomon Interactive Oracle Proofs of Proximity (FRI) protocol is set up.

FRI Protocol (`fri`): The FRI protocol is crucial to the soundness of STARK proofs. It reduces the complexity of the proximity proofs generated by STARK and can be fine-tuned to balance performance and security.

Step List (`fri_step_list`): A list that controls the size of the proof at each step of the FRI process. Each number represents the rate at which the proof size decreases in the corresponding step. For instance:

  `"fri_step_list": [4, 4, 4, 1]`

This configuration defines that the proof size will reduce by a factor of 4 for the first three steps, and by a factor of 1 at the last step.

* **Last Layer Degree Bound** (`last_layer_degree_bound`): Specifies the maximum degree of the polynomial at the last layer, ensuring the proof’s accuracy. Example:

  `"last_layer_degree_bound": 64`

* **Number of Queries** (`n_queries`): Determines the number of proximity queries performed to validate the proof. A higher value increases security but also increases the cost of the verification process.

  `"n_queries": 18`

* **Proof of Work Bits** (`proof_of_work_bits`): Adds computational complexity for generating proofs to deter brute-force attacks. For example:

  `"proof_of_work_bits": 24`

* **Cosets** (`log_n_cosets`): This parameter defines how many cosets (subgroups of elements) are involved in the polynomial evaluations of the STARK protocol.

* **Use of Extension Fields** (`use_extension_field`): In some cases, extension fields may be used to enhance security. Setting this parameter to `false` disables this feature:

  `"use_extension_field": false  `

**iii.  **Prover Configuration****

The prover configuration is another critical section that governs how the prover operates during the proof generation phase.

  * **Cached LDE Configuration** (`cached_lde_config`): LDE (Low Degree Extension) is an important optimization for speeding up polynomial evaluations. The `cached_lde_config` object holds settings to control whether to store the full LDE and whether to use FFT (Fast Fourier Transform) for evaluations.

  * **Store Full LDE** (`store_full_lde`): If set to `true`, the full Low Degree Extension is cached, potentially speeding up subsequent operations but using more memory. Example:

    `"store_full_lde": false`

  * **Use FFT for Evaluation** (`use_fft_for_eval`): Determines whether to use FFT to accelerate polynomial evaluations. For example:

    `"use_fft_for_eval": false`

* **Constraint Polynomial Task Size** (`constraint_polynomial_task_size`): This defines the size of tasks for evaluating constraint polynomials, influencing the prover's parallelism.

  `"constraint_polynomial_task_size": 256`

* **Out-of-Memory Merkle Layers** (`n_out_of_memory_merkle_layers`): This parameter controls the number of Merkle layers that are processed out-of-memory. Increasing this can reduce the memory footprint but may slow down the proving process.

  `"n_out_of_memory_merkle_layers": 1`

* **Table Prover Tasks** (`table_prover_n_tasks_per_segment`): Specifies the number of tasks assigned to each segment during proof generation. This impacts how the prover workload is distributed.

  `"table_prover_n_tasks_per_segment": 32`

**iv. **Verifier Settings****

These parameters are often found in configuration files related to the verifier, and they aim to optimize the verification process.

* **Verifier-Friendly Channel Updates**(`verifier_friendly_channel_updates`): If true, this option configures the prover to update the verification channel in a way that simplifies verification.

  `"verifier_friendly_channel_updates": true`

* **Verifier-Friendly Commitment Hash** (`verifier_friendly_commitment_hash`): Specifies the type of hash function used for the verifier's commitment, optimized for verification. Example:

  `"verifier_friendly_commitment_hash": "poseidon3"`

**V.  Hash Function**

Several cryptographic hash functions are utilized in the configuration for security purposes:

* **Channel Hash** (`channel_hash`): Specifies the hash function used for secure communication between the prover and verifier. Example:

  `"channel_hash": "poseidon3"`

* **Commitment Hash** (`commitment_hash`): Hash function used for generating commitments, which are crucial for zero-knowledge proofs.

  `"commitment_hash": "keccak256_masked160_lsb"`

* **Proof-of-Work Hash** (`pow_hash`): Defines the hash used for proof-of-work, ensuring security in proof generation.

  `"pow_hash": "keccak256"`

### 2. Security Settings fof the FRI Protocol

In the context of the `STARK` proof system, the FRI (Fast Reed-Solomon Interactive Oracle Proofs of Proximity) protocol is an essential part of ensuring the soundness of the proof by reducing the proximity query overhead. Key security settings related to FRI are:

  * `fri_step_list`: This list defines the step sizes used in FRI, where each entry specifies the reduction rate in proof size at each FRI layer. Larger numbers indicate fewer layers but bigger proofs. For example:

    `"fri_step_list": [4, 4, 4, 1]`

  This shows that in the first three layers, the proof size reduces by a factor of 4, and in the final layer by a factor of 1.

  * `last_layer_degree_bound`: This parameter represents the maximum degree of the polynomial in the last layer. Setting this value helps in bounding the error probability. For example:

    `"last_layer_degree_bound": 64`

  * `n_queries`: This is the number of proximity queries performed in the proof to ensure correctness. Higher values increase security at the cost of efficiency. For Example:
  
    `"n_queries": 18`

  * `proof_of_work_bits`: This determines the computational difficulty of proof generation, acting as a deterrent against brute force attacks. For example:

    `"proof_of_work_bits": 24`

### 3. Configuration File Format
The configuration file typically contains parameters that define how the prover and verifier should function in a STARK system, with particular focus on FRI parameters. Here are key sections in the configuration files, as observed from your examples:

Example Structure (`cpu_air_params.json`)

```json
{
    "field": "PrimeField0",
    "stark": {
        "fri": {
            "fri_step_list": [4, 4, 4, 1],
            "last_layer_degree_bound": 64,
            "n_queries": 18,
            "proof_of_work_bits": 24
        },
        "log_n_cosets": 4
    },
    "use_extension_field": false
}
```

* `field`: Specifies the type of prime field used in computations (e.g., PrimeField0).

* `stark`: Contains the main STARK settings.

   * `fri`: Includes all the FRI-related configurations (described above).
  
   * `log_n_cosets`: Determines the number of cosets (subgroups of elements) involved in polynomial evaluation. Example:

  `"log_n_cosets": 4`

* `use_extension_field`: Indicates whether or not to use an extension field for higher security. Example:

  `"use_extension_field": false`

Example Structure (`cpu_air_prover_config.json`)

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

* `cached_lde_config`: Configures caching for Low Degree Extension (LDE).

  * `store_full_lde`: If `true`, the full LDE will be stored for later use. Example:

  `"store_full_lde"`: false

  * `use_fft_for_eval`: Determines if FFT (Fast Fourier Transform) should be used for evaluation. Example:

  `"use_fft_for_eval": false`

* `constraint_polynomial_task_size`: Defines the task size for constraint polynomial evaluation. Example:

  `"constraint_polynomial_task_size": 256`

* `n_out_of_memory_merkle_layers`: Specifies the number of Merkle layers processed out of memory to reduce computational load. Example:  

  `"n_out_of_memory_merkle_layers": 1`

 * `table_prover_n_tasks_per_segment`: Defines the number of tasks assigned per table segment during proving. Example: 

    `"table_prover_n_tasks_per_segment": 32`

**3.1 How to Create a Configuration File**

creating a configuration file for a Stone Prover, follow these steps:

i.  Step 1: Define the basic STARK settings, focusing on the FRI protocol configurations. Start by deciding on `fri_step_list`, `last_layer_degree_bound`, `n_queries`, and `proof_of_work_bits` based on your security requirements.

ii. Step 2: Specify additional fields like `log_n_cosets` and `use_extension_field` based on whether you're using an extension field for added security.

iii.  Step 3: For prover-specific settings (as shown in `cpu_air_prover_config.json`), decide on the task size for constraint polynomial evaluations, whether to store the full LDE, and how many tasks are assigned per segment.

iv. Step 4: Save the configuration file in a `.json` format, adhering to the structure outlined above.
Example of a custom Configuration File:

**3.2 Example of a Configuration File**

```json
{
"field": "PrimeField0",
"stark": {
    "fri": {
        "fri_step_list": [4, 4, 4, 1],
        "last_layer_degree_bound": 64,
        "n_queries": 18,
        "proof_of_work_bits": 24
    },
    "log_n_cosets": 4
},
"use_extension_field": false,
"cached_lde_config": {
    "store_full_lde": false,
    "use_fft_for_eval": false
},
"constraint_polynomial_task_size": 256,
"n_out_of_memory_merkle_layers": 1,
"table_prover_n_tasks_per_segment": 32
}
```
