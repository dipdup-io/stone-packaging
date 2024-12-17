---
title: Examples
---

## Table of content:

| Name | Description | Source   | Args  | Memory | Trace | Private Input | Public Input | Proof | Prover config | Prover Params |
| :--- | :---        | :---: | :---: | :---:  | :---: | :---:         | :---:        | :---: | :---:         | :---:         |
| [Basic](#basic) | Linear function calculation | [●](../e2e_test/Cairo/basic.cairo) |  [●](../e2e_test/Cairo/basic_args.json)  | [●](../test_files/basic/memory.b) | [●](../test_files/basic/trace.b) | [●](../test_files/basic/private_input.json) | [●](../test_files/basic/public_input.json) | [●](../test_files/basic/proof.json) | [●](../test_files/cpu_air_prover_config.json) | [●](../test_files/cpu_air_params.json) |
| [Hash poseidon](#hash-poseidon) | Calculate Poseidon hash | [●](../e2e_test/Cairo/hash_poseidon.cairo) |  x  | [●](../test_files/hash_poseidon/memory.b) | [●](../test_files/hash_poseidon/trace.b) | [●](../test_files/hash_poseidon/private_input.json) | [●](../test_files/hash_poseidon/public_input.json) | [●](../test_files/hash_poseidon/proof.json) | [●](../test_files/cpu_air_prover_config.json) | [●](../test_files/hash_poseidon_cpu_air_params.json) |
| [Fibonacci](#fibonacci) | Fibonacci number calculation | [●](../e2e_test/Cairo/fibonacci.cairo) |  [●](../e2e_test/Cairo/fibonacci_args.json)  | [●](../test_files/fibonacci/memory.b) | [●](../test_files/fibonacci/trace.b) | [●](../test_files/fibonacci/private_input.json) | [●](../test_files/fibonacci/public_input.json) | [●](../test_files/fibonacci/proof.json) | [●](../test_files/cpu_air_prover_config.json) | [●](../test_files/cpu_air_params.json) |
| [Ecdsa](#ecdsa) | ECDSA signature verification using STARK-curve | [●](../e2e_test/Cairo/ecdsa.cairo) |  [●](../e2e_test/Cairo/ecdsa_args.json)  | [●](../test_files/ecdsa/memory.b) | [●](../test_files/ecdsa/trace.b) | [●](../test_files/ecdsa/private_input.json) | [●](../test_files/ecdsa/public_input.json) | [●](../test_files/ecdsa/proof.json) | [●](../test_files/cpu_air_prover_config.json) | [●](../test_files/ecdsa_cpu_air_params.json) |
| [Hash pedersen](#hash-pedersen) | Calculate Pedersen hash | [●](../e2e_test/Cairo/hash_pedersen.cairo) |  x  | [●](../test_files/hash_pedersen/memory.b) | [●](../test_files/hash_pedersen/trace.b) | [●](../test_files/hash_pedersen/private_input.json) | [●](../test_files/hash_pedersen/public_input.json) | [●](../test_files/hash_pedersen/proof.json) | [●](../test_files/cpu_air_prover_config.json) | [●](../test_files/hash_pedersen_cpu_air_params.json) |



## Basic 

([src](../e2e_test/Cairo/basic.cairo))
([input arguments](../e2e_test/Cairo/basic_args.json))
([table of contents](#table-of-content))

This program calculates value of a basic linear function using equation:

    y = a*x + b

where:

    a = 12345678901234567890
    b = 98765432109876543210


**Outputs Format**: 

    [ y ] as Array<felt252>

**Memory Layout**: 

    basic

**Arguments Format**: ([arguments file](../e2e_test/Cairo/basic_args.json))

    [ x ] as Array<felt252>

**Execution traces**:

[Memory File](../test_files/basic/memory.b)

[Trace File](../test_files/basic/trace.b)

[Private Input](../test_files/basic/private_input.json)

[Public Input](../test_files/basic/public_input.json)

[Proof](../test_files/basic/proof.json)

[Prover Config](../test_files/cpu_air_prover_config.json)

[Prover Params](../test_files/cpu_air_params.json)


## Hash poseidon 

([src](../e2e_test/Cairo/hash_poseidon.cairo))

([table of contents](#table-of-content))

This program calculates Poseidon hash of the struct. For the struct definition see below.

    StructForHash { first: 0, second: 1, third: (1, 2), last: false };



**Outputs Format**: 

    [ hashValue ] as Array<felt252>

**Memory Layout**: 

    recursive_with_poseidon

**Execution traces**:

[Memory File](../test_files/hash_poseidon/memory.b)

[Trace File](../test_files/hash_poseidon/trace.b)

[Private Input](../test_files/hash_poseidon/private_input.json)

[Public Input](../test_files/hash_poseidon/public_input.json)

[Proof](../test_files/hash_poseidon/proof.json)

[Prover Config](../test_files/cpu_air_prover_config.json)

[Prover Params](../test_files/hash_poseidon_cpu_air_params.json)


## Fibonacci 

([src](../e2e_test/Cairo/fibonacci.cairo))
([input arguments](../e2e_test/Cairo/fibonacci_args.json))
([table of contents](#table-of-content))

This program calculates Nth Fibonacci number using recursion.


**Outputs Format**: 

    [ nth_number ] as Array<felt252>

**Memory Layout**: 

    small

**Arguments Format**: ([arguments file](../e2e_test/Cairo/fibonacci_args.json))

    [ n ] as Array<felt252>

**Execution traces**:

[Memory File](../test_files/fibonacci/memory.b)

[Trace File](../test_files/fibonacci/trace.b)

[Private Input](../test_files/fibonacci/private_input.json)

[Public Input](../test_files/fibonacci/public_input.json)

[Proof](../test_files/fibonacci/proof.json)

[Prover Config](../test_files/cpu_air_prover_config.json)

[Prover Params](../test_files/cpu_air_params.json)


## Ecdsa 

([src](../e2e_test/Cairo/ecdsa.cairo))
([input arguments](../e2e_test/Cairo/ecdsa_args.json))
([table of contents](#table-of-content))

This program calculates and checks the ECDSA signature using the STARK-curve.
IMPORTANT: It's not safe! Some important checks are omitted. 
Check `check_ecdsa_signature`` function comment.
Returns 1 if the signature is correct, 0 otherwise.


**Outputs Format**: 

    [ 0 or 1 ] as Array<felt252>

**Memory Layout**: 

    all_cairo

**Arguments Format**: ([arguments file](../e2e_test/Cairo/ecdsa_args.json))

    [hash, public_key, r, s] as Array<felt252>

**Execution traces**:

[Memory File](../test_files/ecdsa/memory.b)

[Trace File](../test_files/ecdsa/trace.b)

[Private Input](../test_files/ecdsa/private_input.json)

[Public Input](../test_files/ecdsa/public_input.json)

[Proof](../test_files/ecdsa/proof.json)

[Prover Config](../test_files/cpu_air_prover_config.json)

[Prover Params](../test_files/ecdsa_cpu_air_params.json)


## Hash pedersen 

([src](../e2e_test/Cairo/hash_pedersen.cairo))

([table of contents](#table-of-content))

This program calculates Pedersen hash of the struct. For the struct definition see below.

    StructForHash { first: 0, second: 1, third: (1, 2), last: false };



**Outputs Format**: 

    [ hashValue ] as Array<felt252>

**Memory Layout**: 

    recursive_large_output

**Execution traces**:

[Memory File](../test_files/hash_pedersen/memory.b)

[Trace File](../test_files/hash_pedersen/trace.b)

[Private Input](../test_files/hash_pedersen/private_input.json)

[Public Input](../test_files/hash_pedersen/public_input.json)

[Proof](../test_files/hash_pedersen/proof.json)

[Prover Config](../test_files/cpu_air_prover_config.json)

[Prover Params](../test_files/hash_pedersen_cpu_air_params.json)





