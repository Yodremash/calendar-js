const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to
  const newArray = [];
  for (let i = from; i <= to; i++) {
    console.log(i);
    newArray.push(i);
  }
  return newArray;
};
