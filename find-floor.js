function findFloor(arr, num) {
  let low = 0;
  let high = arr.length -1;

  if(num < arr[0]){
    return -1;
  }else if(num > arr[high]){
    return arr[high]
  }

  while(low<high){
    const mid = Math.floor((low+high)/2)
    if(arr[mid] > num){
        high = mid
    }else if(arr[mid]< num){
        if(arr[mid +1] > num){
            return arr[mid]
        }else{
            low = mid
        }
    }
  }
}

module.exports = findFloor