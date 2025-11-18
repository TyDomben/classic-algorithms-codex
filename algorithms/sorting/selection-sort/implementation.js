/**
 * Selection Sort - repeatedly select minimum and swap
 * Time: O(n²), Space: O(1), Stable: No
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

function selectionSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIdx]) maxIdx = j;
        }
        if (maxIdx !== i) {
            [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
        }
    }
    return arr;
}

if (require.main === module) {
    console.log('Selection Sort:', selectionSort([64, 25, 12, 22, 11]));
    console.log('Descending:', selectionSortDescending([64, 25, 12, 22, 11]));
}

module.exports = { selectionSort, selectionSortDescending };
