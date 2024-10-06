import{u as r,j as e}from"./index-Dv0NejMW.js";const o=void 0;function n(s){const i={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"verifying-stone-proofs-on-starknet",children:["Verifying Stone proofs on Starknet",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verifying-stone-proofs-on-starknet",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"This guide provides detailed instructions on creating and verifying Stone proofs on Starknet as well as how to deploy integrity contracts. Follow the steps below to ensure a smooth verification process."}),`
`,e.jsxs(i.h2,{id:"prerequisites",children:["Prerequisites",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Before you begin, ensure you have the following tools and dependencies installed these are outlined here ",e.jsx(i.a,{href:"https://github.com/HerodotusDev/integrity?tab=readme-ov-file#prerequisites",children:"Integrity prerequisites"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://docs.swmansion.com/scarb/download.html",children:"Scarb"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/foundry-rs/starknet-foundry?tab=readme-ov-file#installation",children:"Starknet Foundry"})}),`
`]}),`
`,e.jsxs(i.p,{children:["Make sure to follow the next usage instructions as referenced ",e.jsx(i.a,{href:"https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#usage-instructions",children:"here"}),"."]}),`
`,e.jsxs(i.h3,{id:"download-binaries",children:["Download Binaries",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#download-binaries",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["By following the next ",e.jsx(i.a,{href:"/home/jemiah/stone-packaging/docs/pages/install/binaries",children:"installation guide"}),"."]}),`
`,e.jsxs(i.h3,{id:"creating-and-verifying-a-test-proof-using-binaries",children:["Creating and Verifying a Test Proof Using Binaries",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-and-verifying-a-test-proof-using-binaries",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To create and verify a test proof, follow the next steps outlined in the ",e.jsx(i.a,{href:"https://github.com/dipdup-io/stone-packaging?tab=readme-ov-file#creating-and-verifying-a-test-proof-using-binaries",children:"Creating and Verifying a Test Proof Guide"}),"."]}),`
`,e.jsx(i.p,{children:"Clone the repository:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/dipdup-io/stone-packaging.git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging"})]})})}),`
`,e.jsx(i.p,{children:"Navigate to the example test directory:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp/stone-packaging/test_files/"})]})})}),`
`,e.jsx(i.p,{children:"Copy or download the binary files from the latest release to this directory."}),`
`,e.jsxs(i.h3,{id:"splitting-the-proof",children:["Splitting the Proof",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#splitting-the-proof",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Run the following command to generate the annotated split proof:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cpu_air_prover"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --out_file=fibonacci_proof.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --private_input_file=fibonacci_private_input.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --public_input_file=fibonacci_public_input.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --prover_config_file=cpu_air_prover_config.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --parameter_file=cpu_air_params_integrity.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --generate_annotations"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"})]})]})}),`
`,e.jsxs(i.p,{children:["The proof will be available at ",e.jsx(i.code,{children:"fibonacci_proof.json"}),"."]}),`
`,e.jsx(i.p,{children:"Run the verifier to verify the proof:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cpu_air_verifier"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --in_file=fibonacci_proof.json"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" && "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"echo"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "Successfully verified example proof."'})]})})}),`
`,e.jsxs(i.h2,{id:"stark_evm_adapter",children:["stark_evm_adapter",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stark_evm_adapter",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Alternatively, you can use the ",e.jsx(i.code,{children:"stark_evm_adapter"})," by following the next instructions shown ",e.jsx(i.a,{href:"https://github.com/zksecurity/stark-evm-adapter?tab=readme-ov-file#cli",children:"here"}),"."]}),`
`,e.jsxs(i.h3,{id:"installation",children:["Installation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cargo"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" stark_evm_adapter"})]})})}),`
`,e.jsxs(i.h3,{id:"usage",children:["Usage",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"stark_evm_adapter"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --help"})]})})}),`
`,e.jsxs(i.h3,{id:"example-using-stark_evm_adapter",children:["Example Using ",e.jsx(i.code,{children:"stark_evm_adapter"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-using-stark_evm_adapter",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To generate an annotated proof:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cpu_air_verifier"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --in_file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test_files/fibonacci_proof.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --annotation-file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test_files/fibonacci_proof_annotation.txt"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --extra-output-file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test_files/fibonacci_proof_annotation_extra.txt"})]})]})}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"stark_evm_adapter"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" gen-annotated-proof"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --stone-proof-file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_proof.json"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --stone-annotation-file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_proof_annotation.txt"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --stone-extra-annotation-file"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_proof_annotation_extra.txt"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --output"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_annotated_proof.json"})]})]})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stark_evm_adapter --stone-proof-file"})," comes from ",e.jsx(i.code,{children:"cpu_air_prover --out_file"})," (JSON format)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stark_evm_adapter --stone-annotation-file"})," comes from ",e.jsx(i.code,{children:"cpu_air_verifier --annotation-file"})," (.txt format)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stark_evm_adapter --stone-extra-annotation-file"})," comes from ",e.jsx(i.code,{children:"cpu_air_verifier --extra-output-file"})," (.txt format)"]}),`
`]}),`
`,e.jsx(i.p,{children:"Proceed when receiving the next output:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Annotated"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" proof"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wrote"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" to"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_annotated_proof.json"})]})})}),`
`,e.jsxs(i.h2,{id:"utilizing-the-herodotus-integrity-file-to-serialize-the-proof",children:["Utilizing the Herodotus Integrity File to Serialize the Proof",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#utilizing-the-herodotus-integrity-file-to-serialize-the-proof",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Clone the Herodotus Integrity repository for later procedures:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/HerodotusDev/integrity.git"})]})})}),`
`,e.jsx(i.p,{children:"Alternatively, you can install the proof serializer tool directly:"}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cargo"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/HerodotusDev/integrity"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" proof_serializer"})]})})}),`
`,e.jsxs(i.h3,{id:"serializing-the-proof",children:["Serializing the Proof",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#serializing-the-proof",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To serialize the proof, use the proof_serializer tool as follows:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"For the Original Proof:"}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"proof_serializer"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_proof.json"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_calldata"})]})})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"For the Annotated Proof:"}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"proof_serializer"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_annotated_proof.json"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fibonacci_calldata"})]})})}),`
`,e.jsxs(i.h2,{id:"setting-up-starknet-foundry",children:["Setting Up Starknet Foundry",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#setting-up-starknet-foundry",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To interact with Starknet Foundry, set up your account and configuration as follows."}),`
`,e.jsxs(i.h3,{id:"acount-management",children:["Acount Management",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#acount-management",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Refer to the following links for managing your Starknet Foundry account:"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/account.html",children:"Account Management"}),`
`,e.jsx(i.a,{href:"https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/add.html",children:"Add account"}),`
`,e.jsx(i.a,{href:"https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/create.html",children:"Create account"})]}),`
`,e.jsx(i.p,{children:"Make sure you set up up your 'snfoundry.toml' configuration with appropriate account name and RPC url inside your Integrity cloned repository."}),`
`,e.jsxs(i.h3,{id:"deploying-your-account",children:["Deploying Your Account",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying-your-account",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Before deploying make sure you prefunded your account."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://foundry-rs.github.io/starknet-foundry/appendix/sncast/account/deploy.html",children:"Deploy Account"})}),`
`,e.jsxs(i.p,{children:["Execute the next ",e.jsx(i.a,{href:"https://github.com/HerodotusDev/integrity?tab=readme-ov-file#monolith-proof",children:"example"})," to check if the setup is correct."]}),`
`,e.jsxs(i.h2,{id:"cairo-vm-verifier",children:["Cairo-VM-Verifier",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cairo-vm-verifier",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["For veryfing the proof.json you can utilize the next tool by pasting the proof.json file in the drop box, it's made in Rust and WASM in JS: ",e.jsx(i.a,{href:"https://demo.swiftness.iosis.tech/",children:"cairo-vm-verifier"})]}),`
`,e.jsxs(i.h2,{id:"deploying-in-the-integrity-contracts-for-verification",children:["Deploying in the Integrity Contracts for Verification",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying-in-the-integrity-contracts-for-verification",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Make sure you're in the Integrity cloned repository."}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" integrity"})]})})}),`
`,e.jsxs(i.p,{children:["For verifying onchain with the Integrity contracts we will use the ",e.jsx(i.code,{children:"verify-on-starknet.sh"})," script following the ",e.jsx(i.a,{href:"https://github.com/HerodotusDev/integrity/blob/main/deployed_contracts.md#main-contracts",children:"deployed contracts"}),"."]}),`
`,e.jsx(i.p,{children:"This is the main Herodotus example for testing."}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./verify-on-starknet.sh"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x16409cfef9b6c3e6002133b61c59d09484594b37b8e4daef7dcba5495a0ef1a"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" examples/calldata"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" recursive"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" keccak_248_lsb"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" stone5"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" cairo0"})]})})}),`
`,e.jsx(i.p,{children:"You can use the next configurations."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["layout: [",e.jsx(i.code,{children:"dex"}),", ",e.jsx(i.code,{children:"recursive"}),", ",e.jsx(i.code,{children:"recursive_with_poseidon"}),", ",e.jsx(i.code,{children:"small"}),", ",e.jsx(i.code,{children:"starknet"}),", ",e.jsx(i.code,{children:"starknet_with_keccak"}),"]"]}),`
`,e.jsxs(i.li,{children:["hashers: [",e.jsx(i.code,{children:"keccak"}),", ",e.jsx(i.code,{children:"blake2s"}),"]"]}),`
`,e.jsxs(i.li,{children:["cairo_version: [",e.jsx(i.code,{children:"cairo0"}),", ",e.jsx(i.code,{children:"cairo1"}),"]"]}),`
`,e.jsxs(i.li,{children:["stone_version: [",e.jsx(i.code,{children:"stone5"}),", ",e.jsx(i.code,{children:"stone6"}),"]"]}),`
`]}),`
`,e.jsx(i.p,{children:"Hash function and hasher bit length are combined into one setting:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["hasher: [",e.jsx(i.code,{children:"keccak_160_lsb"}),", ",e.jsx(i.code,{children:"blake2s_160"}),", ",e.jsx(i.code,{children:"blake2s_248_lsb"}),"]"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Following this let's deploy our fibonacci_calldata in the Herodotus ",e.jsx(i.a,{href:"https://github.com/HerodotusDev/integrity?tab=readme-ov-file#factregistry-and-proxy-contract",children:"proxy contract"}),"."]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./verify-on-starknet.sh"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    0x16409cfef9b6c3e6002133b61c59d09484594b37b8e4daef7dcba5495a0ef1a"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    /home/'user'/stone-packaging/test_files/fibonacci_calldata"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    small"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    keccak_160_lsb"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    stone6"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"    cairo1"})})]})}),`
`,e.jsx(i.p,{children:"Wait for the tx and you've made the verification in Starknet! :)"})]})}function t(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{t as default,o as frontmatter};
