{
    const removeDuplicates = (arr : number[]) => {
      const refinedArray: number[] = [];
      for(const num of arr){
        if(num !== refinedArray.length){
            refinedArray.push(num)
        }
      }
      return refinedArray;
        
    }


    const removed = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(removed);
}