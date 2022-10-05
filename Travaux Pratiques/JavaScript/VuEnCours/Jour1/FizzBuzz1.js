const divide = (n,d) => n % d === 0;
const divideBy3 = (n) => divide(n,3);
const divideBy5 = (n) => divide(n,5);

function fizzBuzzTag(n)
{
  let tag = "";
  if (divideBy3(n))
    tag = tag.concat("Fizz");
  if (divideBy5(n))
    tag = tag.concat("Buzz");
  if (tag === "")
    tag = String(n);
  return tag;
};

function fizzBuzz(start, end)
{
  for (let i = start; i <= end; ++i)
    console.log(`${i}: ${fizzBuzzTag(i)}`);
}

fizzBuzz(1, 30);