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

function fizzBuzzWithRange(rules, range)
{
  const regexRange = /(?<firstParentheis>\[|\])(?<min>[0-9]+)\s*,\s*(?<max>[0-9]+)(?<secondParentheis>\[|\])/;
  const {groups} = regexRange.exec(range);
  const min = groups.firstParentheis === '\[' ? groups.min : Number(groups.min) + 1;
  const max = groups.secondParentheis === '\]' ? groups.max : Number(groups.max) - 1;
  fizzBuzz(rules, min, max);
}

module.exports = fizzBuzzWithRange;