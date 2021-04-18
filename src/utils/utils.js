export const Randomize = (array) =>{
    let currentIndex = array.length;
    let temp;
    let random;

    while(currentIndex!== 0 ){
        random = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;
        temp = array[currentIndex];
        array[currentIndex] = array[random];
        array[random] = temp;
    }

    return array;
}

export const Sort = (array, patterns, values) => {
    console.log(array)
    console.log(patterns)
    console.log(values)
    let temp = [];
    for (let i = 0; i < patterns.length; i++) {
      for (let j = 0; j < values.length; j++) {
          //console.log(patterns[i]);
         // console.log(values[i]);
        const found = array.find(
    
          (x) => x.pattern === patterns[i] && x.value === values[j]
        );
        found && temp.push(found);
      }
    }
    return temp;
  };