{
  //   function sumArray(arr: number[]) : number {
  //     let sum: number = 0;
  //     for (let i: number = 0; i < arr.length; i++) {
  //       sum += arr[i];
  //       console.log(sum);
  //     }

  //     return sum;
  //   }


  function sumArray(arr: number[]): number {
    let sum: number = 0;
    for (const num of arr) {
      sum += num;
      //   console.log(num);
      //   console.log(sum);
    }

    return sum;
  }

  const sumTotal = sumArray([1, 2, 3, 4, 5]);
  console.log(sumTotal);
}
