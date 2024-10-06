import{u as o,j as e}from"./index-Dv0NejMW.js";const s=void 0;function i(n){const r={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(r.h2,{id:"stone-prover-configuration",children:["Stone Prover Configuration",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stone-prover-configuration",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"This guide will explain how to create a configuration file for the Stone prover, focusing on the security settings of the FRI protocol and the format of the configuration file. It also covers detailed instructions on configuring specific parameters for an optimal balance between security and performance."}),`
`,e.jsxs(r.h3,{id:"1-overview-of-the-stone-prover-configuration",children:["1. Overview of the Stone Prover Configuration",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-overview-of-the-stone-prover-configuration",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"The Stone prover requires a configuration file to define critical proof generation settings. These settings control various aspects, from security to performance optimizations. Key components in the configuration file include:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Proof Options: Parameters for the FRI protocol, low-degree polynomial commitment, and Merkle tree depth."}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Optimization Settings: Settings for parallelization and memory allocation."}),`
`]}),`
`]}),`
`,e.jsx(r.p,{children:"Proper configuration ensures that the prover operates within the desired security constraints while making efficient use of computational resources."}),`
`,e.jsxs(r.h3,{id:"2-security-settings-for-the-fri-protocol",children:["2. Security Settings for the FRI Protocol",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-security-settings-for-the-fri-protocol",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.strong,{children:"Fast Reed-Solomon Interactive Oracle Proof (FRI)"})," protocol is used to prove that a function is a low-degree polynomial. It ensures the integrity of the proof while keeping computational overhead low. The following are critical security settings that should be adjusted based on your requirements:"]}),`
`,e.jsxs(r.h3,{id:"21-key-parameters-for-the-fri-protocol",children:["2.1 Key Parameters for the FRI Protocol",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#21-key-parameters-for-the-fri-protocol",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.h3,{id:"211-security-level-security_bits",children:["2.1.1 Security Level (",e.jsx(r.code,{children:"security_bits"}),")",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#211-security-level-security_bits",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:["This setting determines the cryptographic security strength in bits. A higher number means that the proof is more secure, but it also requires more computational resources. This value typically ranges between ",e.jsx(r.strong,{children:"80"})," and ",e.jsx(r.strong,{children:"256"})," bits:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Low Security (80-128 bits)"})," : Suitable for environments where performance is more important than strong security. Useful in development or non-sensitive environments."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"High Security (128-256 bits)"})," : Suitable for production environments where high levels of cryptographic security are necessary."]}),`
`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Example"}),": For strong cryptographic security, a 128-bit security level is common:"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'security_bits": 128'})}),`
`,e.jsxs(r.h3,{id:"212-expansion-factor-expansion_factor",children:["2.1.2 Expansion Factor (",e.jsx(r.code,{children:"expansion_factor"}),")",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#212-expansion-factor-expansion_factor",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"The expansion factor dictates how much redundancy is added during Reed-Solomon encoding. The goal is to increase error detection capabilities in the proof. The higher the expansion factor, the larger the proof, but the more secure and error-resilient it is."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Small Expansion Factor (2-4)"})," : Faster proof generation but lower error detection."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Large Expansion Factor (8-16)"})," : Stronger error detection but increases proof size and generation time."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Example"})," : An expansion factor of 4 provides a good balance between performance and security:"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'"expansion_factor": 4'})}),`
`,e.jsxs(r.h3,{id:"213-blow-up-factor-blowup_factor",children:["2.1.3 Blow-up Factor (blowup_factor)",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#213-blow-up-factor-blowup_factor",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"The blow-up factor defines how much data is added to the original data for Reed-Solomon encoding. This setting influences both the security and efficiency of the proof generation process. A higher blow-up factor increases the security of the proof by ensuring a larger gap between the original data and the error correction data."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Low Blow-up Factor (2-8)"})," : Lower security but better performance."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"High Blow-up Factor (16-32)"})," : Provides a higher level of security but increases the computational load."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Example"}),": A blow-up factor of 16 is a commonly used value for balanced performance:"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'"blowup_factor": 16'})}),`
`,e.jsxs(r.h3,{id:"214-number-of-queries-num_queries",children:["2.1.4 Number of Queries (",e.jsx(r.code,{children:"num_queries"}),")",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#214-number-of-queries-num_queries",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"The number of queries refers to how many times the verifier queries different parts of the proof during verification. More queries lead to higher security by decreasing the probability that a verifier will miss any fraudulent proofs, but it increases the time required to verify the proof."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Low Query Count (10-20)"})," : Provides faster verification but lower security."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"High Query Count (25-50)"})," : Provides better security but increases verification time."]}),`
`]}),`
`,e.jsx(r.p,{children:"Example: Setting 30 queries strikes a reasonable balance between verification time and security:"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'"num_queries": 30'})}),`
`,e.jsx(r.strong,{children:"3. Configuration File Format"}),`
`,e.jsx(r.p,{children:"The configuration file for the Stone prover is written in JSON format. This file contains all the necessary parameters for configuring the prover, including FRI settings, proof optimizations, and resource management."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"3.1 Example Configuration File"}),`
Below is a full example of a configuration file with explanations for each section:`]}),`
`,e.jsx(r.p,{children:"json"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:'{   "proof_options": {     "fri_protocol": {       "security_bits": 128,       "expansion_factor": 4,       "blowup_factor": 16,       "num_queries": 30     },     "lpc_degree_bound": 512,     "merkle_tree_depth": 20   },   "optimization": {     "max_threads": 8,     "cache_size": "256MB"   } }'})}),`
`,e.jsxs(r.h3,{id:"32-detailed-breakdown-of-configuration-parameters",children:["3.2 Detailed Breakdown of Configuration Parameters",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#32-detailed-breakdown-of-configuration-parameters",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"proof_options"}),": This section contains settings related to the proof generation process, including FRI protocol parameters and other proof-related settings."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"fri_protocol"}),": Contains the key security settings for the FRI protocol. This includes:"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"security_bits"}),": The security level in bits (e.g., 128)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"expansion_factor"}),": The redundancy factor for Reed-Solomon encoding (e.g., 4)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"blowup_factor"}),": The blow-up factor for error correction (e.g., 16)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"num_queries"}),": The number of verification queries to improve security (e.g., 30)."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"lpc_degree_bound"}),": Defines the degree bound for the low-degree polynomial commitment (LPC). This setting limits the degree of the polynomial being committed to. The higher this value, the more complex the proofs will be, but it also increases the proof size."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Example: ",e.jsx(r.code,{children:"512"})]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"merkle_tree_depth"}),": The depth of the Merkle tree used in the proof. A deeper Merkle tree allows for better security but increases both memory usage and computation time."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Example: ",e.jsx(r.code,{children:"20"})]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"optimization"}),": This section contains parameters for optimizing prover performance."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"max_threads"}),": Specifies the number of threads the prover can use to parallelize proof generation. More threads can speed up proof generation, especially on multi-core processors."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:["Example: ",e.jsx(r.code,{children:"8"})," (for an 8-core processor)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"cache_size"}),": Defines the amount of memory allocated for caching intermediate proof data. A larger cache reduces the number of reads/writes to disk, speeding up the process."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Example: ",e.jsx(r.code,{children:'"256MB"'})," for medium-sized caches."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.h3,{id:"4-how-to-create-a-configuration-file",children:[e.jsx(r.strong,{children:"4. How to Create a Configuration File"}),e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-how-to-create-a-configuration-file",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"4.1 Set the FRI Protocol Parameters"}),`
Choose appropriate values for the FRI protocol parameters based on your desired security level. As a starting point, you can use the following recommendations:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Security Level: 128 bits for strong cryptographic security."}),`
`,e.jsx(r.li,{children:"Expansion Factor: 4 for a balance of security and efficiency."}),`
`,e.jsx(r.li,{children:"Blow-up Factor: 16 for solid error-correction without excessive overhead."}),`
`,e.jsx(r.li,{children:"Number of Queries: 30 for high security."}),`
`]}),`
`,e.jsx(r.strong,{children:"4.2 Configure the Proof Options"}),`
`,e.jsx(r.p,{children:"Adjust proof options such as the LPC degree bound and the Merkle tree depth. For example:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"LPC Degree Bound : A value of 512 works well for most general-purpose applications."}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Merkle Tree Depth : A value of 20 is a good balance between security and performance."}),`
`]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"4.3 Optimize Performance"}),`
To optimize the prover’s performance, adjust the number of threads and cache size based on your hardware capabilities:`]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Max Threads : Set this to the number of CPU cores available (e.g., 8 for an 8-core processor)."}),`
`,e.jsxs(r.li,{children:["Cache Size : Allocate an appropriate amount of memory for caching. A value of ",e.jsx(r.code,{children:"256MB"})," is a good starting point for most systems."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"4.4 Save the Configuration File"}),`
Save your configuration file in JSON format. For example, create a file named `,e.jsx(r.code,{children:"stone_prover_config.json"})," and include your customized parameters."]})]})}function a(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,s as frontmatter};
