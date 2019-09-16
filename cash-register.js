function checkCashRegister(price, cash, cid) {

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
const PENNY = .01;
const NICKEL = .05;
const DIME = .1;
const QUARTER = .25;
const DOLLAR = 1;
const FIVE = 5;
const TEN = 10;
const TWENTY = 20;
const HUNDRED = 100;
const ARRAY = [HUNDRED,TWENTY,TEN,FIVE,DOLLAR,QUARTER,DIME,NICKEL,PENNY];

var _change = {
_price: price,
_cash: cash,
_cid: cid,
state(){
  var newArr = howMany(ARRAY);
if (this.cidSum < this.changeDue){ //start here
this.status = 'INSUFFICIENT_FUNDS';
return this.status;
}
if (this.cidSum == this.changeDue){
this.status = 'CLOSED'; //good
return this.status;
} if ((newArr[newArr.length-1][2]) == 0) {
  this.status = 'OPEN';
return this.status;
}
else{
  this.status = 'INSUFFICIENT_FUNDS';
  return this.status;
}
},
get changeDue(){
let changeDue = this._cash - this._price;
return changeDue;
},
get cidSum(){
let sum = 0;
for (let i = 0; i < cid.length; i++){
sum += cid[i][1];
}
return Math.ceil(sum*100)/100; //clean rounding
}
};

var change = {
status: _change.state(),
change: calcChange(_change.changeDue,cid)
};

// ============== Next FUNCTION ============

function howMany(ARRAY){
let numUnit;
let remaining = _change.changeDue;
var changeDueArray = [];
let j = 1;

for (let i = 0; i < ARRAY.length; i++){
if (remaining - ARRAY[i] >= 0){
numUnit = Math.floor(remaining/(ARRAY[i]));
if (numUnit > ((cid[cid.length-j][1])/(ARRAY[i]))){
numUnit = ((cid[cid.length-j][1])/(ARRAY[i]));
} if (ARRAY[i]<1){
remaining -= (numUnit*ARRAY[i]);
remaining = Math.round(remaining*100)/100;
} else {
remaining = Math.round((remaining % (numUnit*ARRAY[i]))*100)/100;
}
}else {
numUnit = 0;
}

changeDueArray.push([ARRAY[i],(numUnit),(remaining)]);
j++;
}
return changeDueArray;
}
// ============== Next FUNCTION ============

function getDenom(value){
switch (value){
case 100:
return 'ONE HUNDRED';
break;
case 20:
return 'TWENTY';
break;
case 10:
return 'TEN';
break;
case 5:
return 'FIVE';
break;
case 1:
return 'ONE';
break;
case 0.25:
return 'QUARTER';
break;
case 0.10:
return 'DIME';
break;
case 0.05:
return 'NICKEL';
break;
case 0.01:
return 'PENNY';
break;
}
}

// ============== Next FUNCTION ============

function calcChange(change, cidArray){

var calcChangeArray = [];
let changeArray = [];

calcChangeArray = howMany(ARRAY);
//console.log(JSON.stringify(howMany(ARRAY)));
//console.log((_change.state()));

for (let i = 0; i < calcChangeArray.length; i++){
if (calcChangeArray[i][1] > 0)
{
changeArray.push([getDenom(calcChangeArray[i][0]),(calcChangeArray[i][1]*calcChangeArray[i][0])]);
}
}
if (_change.state() == 'INSUFFICIENT_FUNDS'){
changeArray = [];
}

if (_change.state() == 'CLOSED'){
changeArray = cidArray;
}

return changeArray;
}

//console.log(JSON.stringify(_change));
console.log(JSON.stringify(change));

return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
