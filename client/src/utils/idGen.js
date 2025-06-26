import rn from "random-number";
export let gen = rn.generator({
  min: 1000000,
  max: 9999999,
  integer: true,
});
// gen(500, null, false) // example outputs → 828.6001032683998
