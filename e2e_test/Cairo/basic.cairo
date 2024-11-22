//! Linear function calculation
//!
//! This program calculates value of a basic linear function using equation:
//!
//!     y = a*x + b
//!
//! where:
//!
//!     a = 12345678901234567890
//!     b = 98765432109876543210
//!
//! Input arguments:
//!
//!     x : felt252
//!    
//! Output values: 
//!
//!     (felt252)
//!
//! Memory layout:
//!
//!     basic
//!


use core::felt252;

fn main(input: Array<felt252>) -> Array<felt252> {
    assert!(input.len() > 0, "x argument must be specified");
    
    let x = *input.at(0);
    let a = 12345678901234567890;
    let b = 98765432109876543210;

    let mut result = array![];
    result.append(x * a + b);
    result
}