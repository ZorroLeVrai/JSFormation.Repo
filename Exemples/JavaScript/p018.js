const log = console.log;
log(0 == "0"); //true
log(0 == []);   //true
log("0" == []); //false

log(9+"1"); //91
log("91"-"1");  //90
log(9+"1"-"1"); //90

log(true === 1); //false
log(true+true === 2); //true

