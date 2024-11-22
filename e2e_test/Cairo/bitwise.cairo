// layout - small
// can't check & is not implemented for felt252
// does not compile

use core::felt252;

fn least_significant_bit(x: felt252) -> felt252 {
    x & -x
}

fn main() -> Array<felt252> {
    let mut result = array![];
    let next_power_of_two = 3 + least_significant_bit(3);
    if next_power_of_two == 4 {
        result.append(1);
    } else {
        result.append(0);
    }
    result
}