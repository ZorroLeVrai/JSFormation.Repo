const tab = [];
for (let i=0; i<10; ++i)
  tab.push(() => console.log(i));
for (let element of tab)
  element();
  