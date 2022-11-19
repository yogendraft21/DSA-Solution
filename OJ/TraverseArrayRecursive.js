function printArray(index,arr){
    if (index == arr.length){
    	return;
    }
    console.log(arr[index])
    return printArray(index+1,arr)
    //complete the rest of the function
}
