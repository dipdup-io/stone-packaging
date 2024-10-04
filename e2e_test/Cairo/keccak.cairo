use core::felt252;
use core::keccak::compute_keccak_byte_array;


fn main() -> Array<felt252> {
    let keccak: u256 = compute_keccak_byte_array(@"");
    let mut result = array![];
    result.append(keccak.low.into());
    result.append(keccak.high.into());
    result
}