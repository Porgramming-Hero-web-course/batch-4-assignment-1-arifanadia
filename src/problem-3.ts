{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.split(" ");
    const count = words.filter((w) => w === word);
    // console.log(count);
    return count.length;
  };

  const occurredWord = countWordOccurrences("I love typescript", "typescript");
  // console.log(occurredWord);
}
