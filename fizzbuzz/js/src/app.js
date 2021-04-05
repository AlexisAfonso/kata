function fizzbuzz(i)  {
  let res = '';  
  
  if (i % 3 === 0) {
    res += 'Fizz';
  }

  if (i %5 == 0) {
    res += 'Buzz';
  }

  return res || i;
}

function main (n)  {
  let resArray = [];

   for (let i = 1; i <= n ; i ++ )  {
     resArray.push(fizzbuzz(i));
   }

  return resArray;
}

main(36);
