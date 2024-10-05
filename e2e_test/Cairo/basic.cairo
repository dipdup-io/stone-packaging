// layout - small
// can't check modulus application because it is not implemented!
// only range check is used

use core::felt252;

fn main() -> Array<felt252> {
    let a = 12345678901234567890;
    let b = 98765432109876543210;

    let mut result = array![];
    if (a * b) == 1219326311370217952237463801111263526900 {
        result.append(1);
    } else {
        result.append(0);
    }
    result
}