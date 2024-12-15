function prefixSum(arr) {
    const prefixSumArray = new Array(arr.length);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        prefixSumArray[i] = sum;
    }

    return prefixSumArray;
}