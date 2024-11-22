//! Calculate Pedersen hash 
//!
//! This program calculates Pedersen hash of the struct. For the struct definition see below.
//!
//!     StructForHash { first: 0, second: 1, third: (1, 2), last: false };
//!
//!
//! Output values: 
//!
//!     [ hashValue ] as Array<felt252>
//!
//! Memory layout:
//!
//!     recursive_large_output
//!


use core::felt252;
use core::pedersen::PedersenTrait;
use core::hash::{HashStateTrait, HashStateExTrait};

#[derive(Drop, Hash)]
struct StructForHash {
    first: felt252,
    second: felt252,
    third: (u32, u32),
    last: bool,
}

fn main() -> Array<felt252> {
    let struct_to_hash = StructForHash { first: 0, second: 1, third: (1, 2), last: false };
    let hash = PedersenTrait::new(0).update_with(struct_to_hash).finalize();
    
    let mut result = array![];
    result.append(hash);
    result
}