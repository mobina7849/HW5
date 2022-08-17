//1
//func boolean
let resualt = 0;
function findTruevalue(arr) {
    resualt = arr.filter(Boolean);
    return resualt.length
}
console.log(findTruevalue([2, 3, false, "", null, NaN, -65, undefined, 0]));
//ravesh2
function findTrue(arry) {
    let counter = 0;
    for (let i of arry) {
        if (i) {
            counter++
        }
    }
    return counter;
}
console.log(findTrue([2, false, 68, -77, undefined, NaN, 0, '']));
//--------------------------------------------------------------------------------------
//2
const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};
function convertArray(obj){
    console.log(Object.entries(obj));
}
convertArray(numbers);
//.........................................................................................
//3
function sumArray(arry1, arry2) {
    let resualt = [];
    let counter = 0;
    let n = 0;
    while (counter < arry1.length && counter < arry2.length) {
        resualt.push(arry1[counter] + arry2[counter]);
        counter++;

    }
    if (counter === arry1.length) {
        for (n = counter; n < arry2.length; n++) {
            resualt.push(arry2[n]);
        }
    } else {
        for (n = counter;n<arry1.length;n++){
            resualt.push(arry1[n]);

        }
    }
    return resualt;
}
console.log(sumArray([1,0,2,3,4],[3,5,6,7,8,13]));
//-----------------------------------------------------------------------------------------
//4
function subset(str) {
    let resualt = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            resualt.push(str.slice(i, j));
        }
    }
    return resualt;
}
console.log(subset("ali"));
//------------------------------------------------------------------------------------------
//5
function addUnderline(number) {
    let myarry = String(number).split('');
    let resualt = [myarry[0]];
    //console.log(myarry);
    for (let i = 0; i < myarry.length; i++) {
        if (myarry[i] % 2 == 0 && myarry[i + 1] % 2 == 0) {
            resualt.push('-', myarry[i + 1]);
        } else {
            resualt.push(myarry[i + 1]);
        }
    }
    return resualt.join('')
}
//console.log(addUnderline(02546));
console.log(addUnderline(4478962));
//------------------------------------------------------------------------------
//6
const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    morestuff: {
                        magicnumber: 44,
                        somting: 'foo2'
                    }
                }
            }
        }
    }
}
const hh = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
function sumNumber (obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
      if (typeof value === "number") {
        sum ++;
      }
      if (typeof value === "object") {
        sum += sumNumber(value);
      }
    }
    return sum;
  };
//console.log(sumNumber(nestedObject));
//console.log(sumNumber(hh));
//-------------------------------------------------------------------
function count(arrr,number=[]){
    for(let key in arrr){
        if(typeof arrr[key]==='number'){
            number.push(arrr[key]);
        }else if(typeof arrr[key]==='object' && arrr!==null){
            count(arrr[key],number);
        }
    }
    return number.length
}
console.log(count(hh));
console.log(count(nestedObject));