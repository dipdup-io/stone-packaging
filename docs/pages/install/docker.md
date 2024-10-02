# Getting Stone Docker Images

Stone provides Docker images to simplify the deployment and usage of its prover and verifier components. There are currently three available images, hosted on GitHub Packages.

## Available Images

### Prover Image (Lightweight)
- Contains only the Stone prover binary.
- Ideal for environments where only proving functionality is needed.

### Verifier Image (Lightweight)
- Contains only the Stone verifier binary.
- Perfect for setups requiring only verification capabilities.

### Combined Image
- Contains both the Stone prover and verifier binaries.
- Suitable for environments needing both proving and verification functionalities.

## Accessing the Images

You can find the Stone Docker images in the GitHub Packages repository:  
[GitHub Packages - Stone](https://github.com/orgs/dipdup-io/packages?repo_name=stone-packaging)

## Pulling the Images

To pull an image, use the `docker pull` command followed by the image name. Here are examples for each image:

- **For the Stone Prover :**
  ```bash
docker pull ghcr.io/dipdup-io/stone-packaging/stone-prover:master
```

- **For the CPU Air Prover (Lightweight):**
  ```bash
docker pull ghcr.io/dipdup-io/stone-packaging/cpu_air_prover:master
```

- **For the CPU Air Verifier (Lightweight):**
  ```bash
docker pull ghcr.io/dipdup-io/stone-packaging/cpu_air_verifier:master
```
