const fs = require('fs/promises');

// function readFile(path, format)
// {
//     const dataPromise = fs.readFile(path, { encoding: format });
//     return dataPromise.then(data => data.toString(format))
//                       .catch(err => console.log(err));
// }

// async function readFileAsync(path, format)
// {
//   try {
//     const data = await fs.readFile(path, { encoding: format });
//     return data.toString(format);
//   }
//   catch (err)
//   {
//     console.log(err);
//   }
// }

function getCheckSum(str)
{
  //const lastBits = 2**16;
  return [...str]
    .map(char => char.charCodeAt())
    .reduce((acc, item) => acc + item);
}

fs.readFile('./Test.txt', { encoding: 'utf-8' })
  .then(res => getCheckSum(res))
  .then(res => console.log(res))
  .catch(err => console.error(err.message));
