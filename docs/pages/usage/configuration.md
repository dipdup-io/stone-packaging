## Stone Prover Configuration 

This guide will explain how to create a configuration file for the Stone prover, focusing on the security settings of the FRI protocol and the format of the configuration file. It also covers detailed instructions on configuring specific parameters for an optimal balance between security and performance.

### 1. Overview of the Stone Prover Configuration

The Stone prover requires a configuration file to define critical proof generation settings. These settings control various aspects, from security to performance optimizations. Key components in the configuration file include:
 
* Proof Options: Parameters for the FRI protocol, low-degree polynomial commitment, and Merkle tree depth.

* Optimization Settings: Settings for parallelization and memory allocation.

Proper configuration ensures that the prover operates within the desired security constraints while making efficient use of computational resources.

### 2. Security Settings for the FRI Protocol

The **Fast Reed-Solomon Interactive Oracle Proof (FRI)** protocol is used to prove that a function is a low-degree polynomial. It ensures the integrity of the proof while keeping computational overhead low. The following are critical security settings that should be adjusted based on your requirements:

### 2.1 Key Parameters for the FRI Protocol
### 2.1.1 Security Level (`security_bits`)

This setting determines the cryptographic security strength in bits. A higher number means that the proof is more secure, but it also requires more computational resources. This value typically ranges between **80** and **256** bits:

*  **Low Security (80-128 bits)** : Suitable for environments where performance is more important than strong security. Useful in development or non-sensitive environments.
  
* **High Security (128-256 bits)** : Suitable for production environments where high levels of cryptographic security are necessary.
  
**Example**: For strong cryptographic security, a 128-bit security level is common:

`security_bits": 128`

### 2.1.2 Expansion Factor (`expansion_factor`)

The expansion factor dictates how much redundancy is added during Reed-Solomon encoding. The goal is to increase error detection capabilities in the proof. The higher the expansion factor, the larger the proof, but the more secure and error-resilient it is.

* **Small Expansion Factor (2-4)** : Faster proof generation but lower error detection.
* **Large Expansion Factor (8-16)** : Stronger error detection but increases proof size and generation time.

**Example** : An expansion factor of 4 provides a good balance between performance and security:

`"expansion_factor": 4`

### 2.1.3 Blow-up Factor (blowup_factor)

The blow-up factor defines how much data is added to the original data for Reed-Solomon encoding. This setting influences both the security and efficiency of the proof generation process. A higher blow-up factor increases the security of the proof by ensuring a larger gap between the original data and the error correction data.

* **Low Blow-up Factor (2-8)** : Lower security but better performance.
* **High Blow-up Factor (16-32)** : Provides a higher level of security but increases the computational load.
  
**Example**: A blow-up factor of 16 is a commonly used value for balanced performance:

`"blowup_factor": 16`

### 2.1.4 Number of Queries (`num_queries`)

The number of queries refers to how many times the verifier queries different parts of the proof during verification. More queries lead to higher security by decreasing the probability that a verifier will miss any fraudulent proofs, but it increases the time required to verify the proof.

* **Low Query Count (10-20)** : Provides faster verification but lower security.
* **High Query Count (25-50)** : Provides better security but increases verification time.
  
Example: Setting 30 queries strikes a reasonable balance between verification time and security:

`"num_queries": 30`

**3. Configuration File Format**

The configuration file for the Stone prover is written in JSON format. This file contains all the necessary parameters for configuring the prover, including FRI settings, proof optimizations, and resource management.

**3.1 Example Configuration File**
Below is a full example of a configuration file with explanations for each section:

json

`{
  "proof_options": {
    "fri_protocol": {
      "security_bits": 128,
      "expansion_factor": 4,
      "blowup_factor": 16,
      "num_queries": 30
    },
    "lpc_degree_bound": 512,
    "merkle_tree_depth": 20
  },
  "optimization": {
    "max_threads": 8,
    "cache_size": "256MB"
  }
}`

### 3.2 Detailed Breakdown of Configuration Parameters

* `proof_options`: This section contains settings related to the proof generation process, including FRI protocol parameters and other proof-related settings.

* `fri_protocol`: Contains the key security settings for the FRI protocol. This includes:

    * `security_bits`: The security level in bits (e.g., 128).
    * `expansion_factor`: The redundancy factor for Reed-Solomon encoding (e.g., 4).
    * `blowup_factor`: The blow-up factor for error correction (e.g., 16).
    * `num_queries`: The number of verification queries to improve security (e.g., 30).

* `lpc_degree_bound`: Defines the degree bound for the low-degree polynomial commitment (LPC). This setting limits the degree of the polynomial being committed to. The higher this value, the more complex the proofs will be, but it also increases the proof size.

    * Example: `512`
* `merkle_tree_depth`: The depth of the Merkle tree used in the proof. A deeper Merkle tree allows for better security but increases both memory usage and computation time.

    * Example: `20`

* `optimization`: This section contains parameters for optimizing prover performance.
    * `max_threads`: Specifies the number of threads the prover can use to parallelize proof generation. More threads can speed up proof generation, especially on multi-core processors.

     * Example: `8` (for an 8-core processor)

* `cache_size`: Defines the amount of memory allocated for caching intermediate proof data. A larger cache reduces the number of reads/writes to disk, speeding up the process.

    * Example: `"256MB"` for medium-sized caches.

### **4. How to Create a Configuration File**

**4.1 Set the FRI Protocol Parameters**
Choose appropriate values for the FRI protocol parameters based on your desired security level. As a starting point, you can use the following recommendations:

* Security Level: 128 bits for strong cryptographic security.
* Expansion Factor: 4 for a balance of security and efficiency.
* Blow-up Factor: 16 for solid error-correction without excessive overhead.
* Number of Queries: 30 for high security.

**4.2 Configure the Proof Options**

Adjust proof options such as the LPC degree bound and the Merkle tree depth. For example:

* LPC Degree Bound : A value of 512 works well for most general-purpose applications.

* Merkle Tree Depth : A value of 20 is a good balance between security and performance.

**4.3 Optimize Performance**
To optimize the prover’s performance, adjust the number of threads and cache size based on your hardware capabilities:

*   Max Threads : Set this to the number of CPU cores available (e.g., 8 for an 8-core processor).
*   Cache Size : Allocate an appropriate amount of memory for caching. A value of `256MB` is a good starting point for most systems.

**4.4 Save the Configuration File**
Save your configuration file in JSON format. For example, create a file named `stone_prover_config.json` and include your customized parameters. 