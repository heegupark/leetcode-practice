const quickSort = (arr, left, right) => {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left, j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;
            i++;
            j--;
        }
    }
    return i;
}
