function fizzBuzz(rules, start, end)
{
  for (let i = start; i <= end; ++i)
    console.log(`${i}: ${fizzBuzzTag(i)}`);

  function fizzBuzzTag(n)
  {
    const tag = applyRules(n);
    if (tag === "")
      return String(n);
    return tag;
  }

  function applyRules(n)
  {
    return rules.reduce((acc, item) => acc.concat(applyRule(item)), "");

    function applyRule(rule)
    {
      return rule.predicate(n) ? rule.tag : "";
    }
  }
}

module.exports = fizzBuzz;