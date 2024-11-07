{
  interface Iparams {
    sentence: string;
    word: string;
  }

  const countWordOccurrences = ({sentence, word} : Iparams) : number => {
    const words = sentence.split(' ')
    const count = words.filter(w => w === word  );
    console.log(count);
    return count.length;
   
  
  };


  const occurredWord = countWordOccurrences({ sentence: 'I love typescript', word:'typescript' });
  console.log(occurredWord);
}
