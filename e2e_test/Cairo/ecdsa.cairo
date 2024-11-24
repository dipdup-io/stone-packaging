//! ECDSA signature verification using STARK-curve
//!
//! This program calculates and checks the ECDSA signature using the STARK-curve.
//! IMPORTANT: It's not safe! Some important checks are omitted. 
//! Check `check_ecdsa_signature`` function comment.
//! Returns 1 if the signature is correct, 0 otherwise.
//!
//! Input arguments:
//!
//!     [hash, public_key, r, s] as Array<felt252>
//!    
//! Output values: 
//!
//!    [ 0 or 1 ] as Array<felt252>
//!
//! Memory layout:
//!
//!     all_cairo
//!

use core::felt252;
use core::pedersen::PedersenTrait;
use core::hash::{HashStateTrait, HashStateExTrait};
use core::ecdsa::check_ecdsa_signature;


fn main(args: Array<felt252>) -> Array<felt252> {
    assert!(args.len() == 4, "Expected 4 arguments: hash, public_key, r, s");
    
    let hash = *args.at(0);
    let public_key = *args.at(1);
    let r = *args.at(2);
    let s = *args.at(3);

    let mut result = array![];
    if check_ecdsa_signature(hash, public_key, r, s) {
        result.append(1);    
    } else {
        result.append(0);    
    }
    result
}


