---
title: Introduction
---

# Stone Packaging

This project provides various forms of distribution for [Stone](https://github.com/starkware-libs/stone-prover) executables.

## About

The goal of this project is to reduce friction and speed up the process of generating proofs using Stone. More broadly, the aim is to make Stone a &#34;known&#34; piece of infrastructure that can be easily integrated into application-specific workflows and maintained efficiently.

## Roadmap

- [x] Static binary releases for x86_64
- [x] Static binary releases for ARM64
- [x] Minimal Docker images for x86_64
- [x] Native packages for Debian/Ubuntu
- [x] Native packages for Fedora
- [x] Homebrew packages

Follow-up work:

- Native packages for Alpine
- Technical documentation for file formats (inputs, outputs, memory, trace, proof), and test data
- Documentation hosted on GitHub Pages
- Integrated proof decomposition (related to https://github.com/zksecurity/stark-evm-adapter)
- Observability suite (metrics, dashboards, configurable logging)
- Stwo support

This project is supported by Nethermind and Starknet Foundation via [OnlyDust platform](https://app.onlydust.com/p/stone-packaging-)