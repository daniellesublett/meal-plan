function findMissingNumber(list) {
    const numbersMap = {};
   
    for (let idx = 1; idx <= list.length + 1; idx += 1) {
      numbersMap[idx] = false;
    }
   
    for (let idx = 0; idx < list.length; idx += 1) {
      numbersMap[list[idx]] = true;
    }
   
    Object.entries(numbersMap).forEach(([number, exists]) => {
      if (!exists) {
        return parseInt(number, 10);
      }
    });
   }