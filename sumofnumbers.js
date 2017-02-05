const data = [1,2,3,4];

function sumFor(list) {
  let sum = 0;

  for(let x = 0; x < list.length; x++) {
    sum += list[x];
  }

  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let x = 0;

  while (x < list.length) {
    sum += list[x];
    x++;
  }

  return sum;
}

function sumRecursion(list) {
  return sumRecursionHelper(list, 0, 0);
}

function sumRecursionHelper(list, sum, counter) {
  if (counter > list.length)
    return 0;

  return sum + sumRecursionHelper(list, list[counter], ++counter);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, index){
    return memo + index;
  }, 0);
}

console.log(sumFor(data));
console.log(sumWhile(data));
console.log(sumRecursion(data));
console.log(sumTheSimpleWay(data));
