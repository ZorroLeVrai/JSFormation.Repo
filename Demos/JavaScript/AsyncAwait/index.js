const TIMER = 4000;

function createPromise(result, time)
{
  return new Promise((resolve, _) => {
    setTimeout(
      () => resolve(result),
      time
    );
  });
}

function funProm1()
{
  createPromise('result1', TIMER)
    .then(res => console.log(res));
  
  funProm2();
  console.log("après funProm1");
}

function funProm2()
{
  createPromise('result2', TIMER)
    .then(res => console.log(res));

  console.log("après funProm2");
}

async function funAsync1()
{
  const result = await createPromise('result1', TIMER)
  console.log(result);
  
  await funAsync2();
  console.log("après funAsync1");
}

async function funAsync2()
{
  const result = await createPromise('result2', TIMER)
  console.log(result);

  console.log("après funAsync2");
}


(async () => {
  await funAsync1();
  //funProm1();
  console.log('END');
})();

console.log("Après END");