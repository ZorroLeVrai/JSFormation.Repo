class Simple {
  get prop() { console.log("getter")};
  set prop(value) { console.log(`setter: ${value}`)};
}
const obj = new Simple;
obj.prop;  //getter
obj.prop = 'OK';  //setter: OK
