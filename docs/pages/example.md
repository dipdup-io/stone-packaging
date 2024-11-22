---
title: Examples
---

## Table of content:

| Name | Description | Src   | Args  | Memory | Trace | Private Input | Public Input | Proof | Prover config | Prover Params |
| :--- | :---        | :---: | :---: | :---:  | :---: | :---:         | :---:        | :---: | :---:         | :---:         |
| [Basic](#basic-arrow_up) | Linear function calculation | [link]() |  [link](/./e2e_test/Cairo/basic_args.json)  | [link](/./test_files/basic/memory.b) | [link](/./test_files/basic/trace.b) | [link](/./test_files/basic/private_input.json) | [link](/./test_files/basic/public_input.json) | [link](/./test_files/basic/proof.json) | [link](/./test_files/cpu_air_prover_config.json) | [link](/./test_files/cpu_air_params.json) |
| [Hash poseidon](#hash-poseidon-arrow_up) | Calculate Poseidon hash | [link]() |  :x:  | [link](/./test_files/hash_poseidon/memory.b) | [link](/./test_files/hash_poseidon/trace.b) | [link](/./test_files/hash_poseidon/private_input.json) | [link](/./test_files/hash_poseidon/public_input.json) | [link](/./test_files/hash_poseidon/proof.json) | [link](/./test_files/cpu_air_prover_config.json) | [link](/./test_files/hash_poseidon_cpu_air_params.json) |
| [Fibonacci](#fibonacci-arrow_up) | Fibonacci number calculation | [link]() |  [link](/./e2e_test/Cairo/fibonacci_args.json)  | [link](/./test_files/fibonacci/memory.b) | [link](/./test_files/fibonacci/trace.b) | [link](/./test_files/fibonacci/private_input.json) | [link](/./test_files/fibonacci/public_input.json) | [link](/./test_files/fibonacci/proof.json) | [link](/./test_files/cpu_air_prover_config.json) | [link](/./test_files/cpu_air_params.json) |
| [Ecdsa](#ecdsa-arrow_up) | ECDSA signature verification using STARK-curve | [link]() |  [link](/./e2e_test/Cairo/ecdsa_args.json)  | [link](/./test_files/ecdsa/memory.b) | [link](/./test_files/ecdsa/trace.b) | [link](/./test_files/ecdsa/private_input.json) | [link](/./test_files/ecdsa/public_input.json) | [link](/./test_files/ecdsa/proof.json) | [link](/./test_files/cpu_air_prover_config.json) | [link](/./test_files/ecdsa_cpu_air_params.json) |
| [Hash pedersen](#hash-pedersen-arrow_up) | Calculate Pedersen hash | [link]() |  :x:  | [link](/./test_files/hash_pedersen/memory.b) | [link](/./test_files/hash_pedersen/trace.b) | [link](/./test_files/hash_pedersen/private_input.json) | [link](/./test_files/hash_pedersen/public_input.json) | [link](/./test_files/hash_pedersen/proof.json) | [link](/./test_files/cpu_air_prover_config.json) | [link](/./test_files/hash_pedersen_cpu_air_params.json) |



## Basic [:arrow_up:](#table-of-content)

([src](/))
([input arguments](//./e2e_test/Cairo/basic_args.json))

This program calculates value of a basic linear function using equation:

    y = a*x + b

where:

    a = 12345678901234567890
    b = 98765432109876543210


**Outputs Format**: 

    [ y ] as Array<felt252>

**Memory Layout**: 

    basic

**Arguments Format**: ([arguments file](/./e2e_test/Cairo/basic_args.json))

    [ x ] as Array<felt252>

**Execution traces**:

[Memory File](/./test_files/basic/memory.b)

[Trace File](/./test_files/basic/trace.b)

[Private Input](/./test_files/basic/private_input.json)

[Public Input](/./test_files/basic/public_input.json)

[Proof](/./test_files/basic/proof.json)

[Prover Config](/./test_files/cpu_air_prover_config.json)

[Prover Params](/./test_files/cpu_air_params.json)


## Hash poseidon [:arrow_up:](#table-of-content)

([src](/))
([input arguments](/None))

This program calculates Poseidon hash of the struct. For the struct definition see below.

    StructForHash { first: 0, second: 1, third: (1, 2), last: false };



**Outputs Format**: 

    [ hashValue ] as Array<felt252>

**Memory Layout**: 

    recursive_with_poseidon

**Arguments Format**: ([arguments file](None))

    None

**Execution traces**:

[Memory File](/./test_files/hash_poseidon/memory.b)

[Trace File](/./test_files/hash_poseidon/trace.b)

[Private Input](/./test_files/hash_poseidon/private_input.json)

[Public Input](/./test_files/hash_poseidon/public_input.json)

[Proof](/./test_files/hash_poseidon/proof.json)

[Prover Config](/./test_files/cpu_air_prover_config.json)

[Prover Params](/./test_files/hash_poseidon_cpu_air_params.json)


## Fibonacci [:arrow_up:](#table-of-content)

([src](/))
([input arguments](//./e2e_test/Cairo/fibonacci_args.json))

This program calculates Nth Fibonacci number using recursion.


**Outputs Format**: 

    [ nth_number ] as Array<felt252>

**Memory Layout**: 

    small

**Arguments Format**: ([arguments file](/./e2e_test/Cairo/fibonacci_args.json))

    [ n ] as Array<felt252>

**Execution traces**:

[Memory File](/./test_files/fibonacci/memory.b)

[Trace File](/./test_files/fibonacci/trace.b)

[Private Input](/./test_files/fibonacci/private_input.json)

[Public Input](/./test_files/fibonacci/public_input.json)

[Proof](/./test_files/fibonacci/proof.json)

[Prover Config](/./test_files/cpu_air_prover_config.json)

[Prover Params](/./test_files/cpu_air_params.json)


## Ecdsa [:arrow_up:](#table-of-content)

([src](/))
([input arguments](//./e2e_test/Cairo/ecdsa_args.json))

This program calculates and checks the ECDSA signature using the STARK-curve.
IMPORTANT: It's not safe! Some important checks are omitted. 
Check `check_ecdsa_signature`` function comment.
Returns 1 if the signature is correct, 0 otherwise.


**Outputs Format**: 

    [ 0 or 1 ] as Array<felt252>

**Memory Layout**: 

    all_cairo

**Arguments Format**: ([arguments file](/./e2e_test/Cairo/ecdsa_args.json))

    [hash, public_key, r, s] as Array<felt252>

**Execution traces**:

[Memory File](/./test_files/ecdsa/memory.b)

[Trace File](/./test_files/ecdsa/trace.b)

[Private Input](/./test_files/ecdsa/private_input.json)

[Public Input](/./test_files/ecdsa/public_input.json)

[Proof](/./test_files/ecdsa/proof.json)

[Prover Config](/./test_files/cpu_air_prover_config.json)

[Prover Params](/./test_files/ecdsa_cpu_air_params.json)


## Hash pedersen [:arrow_up:](#table-of-content)

([src](/))
([input arguments](/None))

This program calculates Pedersen hash of the struct. For the struct definition see below.

    StructForHash { first: 0, second: 1, third: (1, 2), last: false };



**Outputs Format**: 

    [ hashValue ] as Array<felt252>

**Memory Layout**: 

    recursive_large_output

**Arguments Format**: ([arguments file](None))

    None

**Execution traces**:

[Memory File](/./test_files/hash_pedersen/memory.b)

[Trace File](/./test_files/hash_pedersen/trace.b)

[Private Input](/./test_files/hash_pedersen/private_input.json)

[Public Input](/./test_files/hash_pedersen/public_input.json)

[Proof](/./test_files/hash_pedersen/proof.json)

[Prover Config](/./test_files/cpu_air_prover_config.json)

[Prover Params](/./test_files/hash_pedersen_cpu_air_params.json)





