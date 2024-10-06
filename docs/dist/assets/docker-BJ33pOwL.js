import{u as s,j as e}from"./index-Dv0NejMW.js";const t={title:"Getting Stone Docker Images",description:"undefined"};function r(n){const i={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"getting-stone-docker-images",children:["Getting Stone Docker Images",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getting-stone-docker-images",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"Stone provides Docker images to simplify the deployment and usage of its prover and verifier components. There are currently three available images, hosted on GitHub Packages."}),`
`,e.jsxs(i.h2,{id:"available-images",children:["Available Images",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#available-images",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"prover-image-lightweight",children:["Prover Image (Lightweight)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prover-image-lightweight",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Contains only the Stone prover binary."}),`
`,e.jsx(i.li,{children:"Ideal for environments where only proving functionality is needed."}),`
`]}),`
`,e.jsxs(i.h3,{id:"verifier-image-lightweight",children:["Verifier Image (Lightweight)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verifier-image-lightweight",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Contains only the Stone verifier binary."}),`
`,e.jsx(i.li,{children:"Perfect for setups requiring only verification capabilities."}),`
`]}),`
`,e.jsxs(i.h3,{id:"combined-image",children:["Combined Image",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#combined-image",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Contains both the Stone prover and verifier binaries."}),`
`,e.jsx(i.li,{children:"Suitable for environments needing both proving and verification functionalities."}),`
`]}),`
`,e.jsxs(i.h2,{id:"accessing-the-images",children:["Accessing the Images",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accessing-the-images",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["You can find the Stone Docker images in the GitHub Packages repository:",e.jsx(i.br,{}),`
`,e.jsx(i.a,{href:"https://github.com/orgs/dipdup-io/packages?repo_name=stone-packaging",children:"GitHub Packages - Stone"})]}),`
`,e.jsxs(i.h2,{id:"pulling-the-images",children:["Pulling the Images",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pulling-the-images",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["To pull an image, use the ",e.jsx(i.code,{children:"docker pull"})," command followed by the image name. Here are examples for each image:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"For the Stone Prover :"}),`
`]}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/stone-prover:master"})]})})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"For the CPU Air Prover (Lightweight):"}),`
`]}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/cpu_air_prover:master"})]})})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.strong,{children:"For the CPU Air Verifier (Lightweight):"}),`
`]}),`
`]}),`
`,e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"docker"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" pull"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ghcr.io/dipdup-io/stone-packaging/cpu_air_verifier:master"})]})})})]})}function d(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{d as default,t as frontmatter};
