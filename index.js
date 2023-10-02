const org_arr = [96,56,56,82,33,16,34,41,80,10,24,74,67,27,54,49,19,1,25,98,89,26,24,3,29,78,49,99,64,82,74,8,13,73,13,10,13,85,91,45,56,75,50,5,77,15,33,12,38];
//const org_arr = [2,5,3,4,6,8,1,7,9];
const container = document.querySelector(".container")
function createbars(arr)
{
    container.innerHTML = "";
    for(let i=0;i<arr.length;i++)
    {
      const bar = document.createElement('div');
      const desc = document.createElement('span');
      desc.classList.add('desc');
      desc.innerHTML = arr[i];
      bar.style.height = arr[i]/2+"vh";
      bar.style.width= "20px";
      bar.classList.add('bar');
      container.appendChild(bar);
      bar.appendChild(desc);
    }
}

//Insertion Sort
function insertionSort(arr) {
  
    for (let i = 1; i < arr.length; i++) {
      let key = org_arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    createbars(arr);
  }
  

createbars(org_arr);

//Selection sort
function selectionSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
        for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
        if (i !== minIndex) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    createbars(arr);
  }

  //Bubble sort
  function bubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    createbars(arr);
  }

  //quick sort
  function quickSort(arr) 
  {
    if(arr.length < 2)
    {
       return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i =0; i<arr.length-1; i++)
    {
       if(arr[i] < pivot)
       {
        left.push(arr[i]);
       }
       else
       {
        right.push(arr[i]);
       }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  //merge sort
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }

  //shell sort
  function shellSort(arr) {
    const len = arr.length;
    let gap = Math.floor(len / 2);
  
    while (gap > 0) {
      for (let i = gap; i < len; i++) {
        let temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  
    createbars(arr);
  }

  //Randomize array
  function randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    createbars(arr)
  }

  //Change size


  function changeSize() {
    
    if(size == 'full')
    {
        size = 'small';
    for(let i = 0; i< org_arr.length;i++)
    {
        org_arr[i] = org_arr[i]/2;
    }
    createbars(org_arr);
    }

    else
    {
       size = 'full';
       for(let i = 0; i< org_arr.length;i++)
       {
        org_arr[i] = org_arr[i]*2;
       }
    createbars(org_arr);
    }
  }

  let size = 'full';