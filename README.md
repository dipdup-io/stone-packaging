# Stone Packaging

This project provides various forms of distribution for [Stone](https://github.com/starkware-libs/stone-prover) executables.

## About

The goal of this project is to reduce the friction and time to start producing proofs using Stone. More broadly the aim is to make Stone a &#34;known&#34; piece of infra that can be easily integrated into application specific workflows and maintained with ease.

## Roadmap

- [ ] Releases with static binaries for x86_64
- [ ] Minimal docker images for x86_64
- [ ] Native packages for Debian/Ubuntu
- [ ] Native packages for Fedora
- [ ] ARM builds

Follow-up work:
- Technical docs for file formats (inputs, outputs, memory, trace, proof), test data
- Integrated proof decomposition (related to https://github.com/zksecurity/stark-evm-adapter)
- Observability suite (metrics, dashboard, configurable logging)
- Stwo support
