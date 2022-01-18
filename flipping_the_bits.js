/*

There will be a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.
1 to 0 and then 0 to 1

Example: 
9 is based on 10 which is equal 00000000000000000000000000001001 based on 2
Flipped version will be 11111111111111111111111111110110 based on 2  the result should be 4294967286

mapping required otherwise all digits will be 1
*/

function flippingBits(n) {
  let c = parseInt(
    n
      .toString(2)
      .padStart(32, 0)
      .split("")
      .map((x) => (x == 0 ? (x = 1) : (x = 0)))
      .join(""),
    2
  );
  return c;
}
