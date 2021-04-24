// BUBBLE SORT JS

function bubbleSort(arr, sorted=false) {
    //Takes an array and returns it sorted
    while(!sorted){
      arr = bblSrt(arr);
      sorted = arr.pop()
    }
    return arr
}

function bblSrt(arr, sorted=true, r=[]){
  // Recursive logic
  if(arr.length === 1) return [arr.pop(), sorted]
  let [ith, next, ...rest] = arr;
  min = ith <= next ? ith : next;
  max = ith > next ? ith : next;
  sorted = sorted ? ith <= next : sorted;
  return r.concat([min, ...bblSrt([max, ...rest], sorted)])
} 

