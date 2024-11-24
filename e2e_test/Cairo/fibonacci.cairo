//! Fibonacci number calculation
//!
//! This program calculates Nth Fibonacci number using recursion.
//!
//! Input arguments:
//!
//!     [ n ] as Array<felt252>
//!    
//! Output values: 
//!
//!     [ nth_number ] as Array<felt252>
//!
//! Memory layout:
//!
//!     small
//!


use core::felt252;

fn main(args: Array<felt252>) -> Array<felt252> {
    assert!(args.len() > 0, "Expected n as argument");

    let n = *args.at(0);
    let mut result = array![];
    result.append(fib(1, 1, n));
    result
}

fn fib(a: felt252, b: felt252, n: felt252) -> felt252 {
    match n {
        0 => a,
        _ => fib(b, a + b, n - 1),
    }
}
