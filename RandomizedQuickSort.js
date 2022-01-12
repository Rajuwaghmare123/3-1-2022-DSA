function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];
  
    let left = [];
    let right = [];
    let equal = [];
  
    for (let val of arr) {
      if (val < pivot) {
        left.push(val);
      } else if (val > pivot) {
        right.push(val);
      } else {
        equal.push(val);
      }
    }
    return [
      ...quickSort(left),
      ...equal,
      ...quickSort(right)
    ];
  }
      
  console.log(quickSort([3,6,2,1,0]));