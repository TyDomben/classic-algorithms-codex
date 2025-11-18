/** Linear Search - O(n) time */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function linearSearchAll(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) indices.push(i);
    }
    return indices;
}

if (require.main === module) {
    console.log('Find 7:', linearSearch([4, 2, 7, 1, 9], 7));  // 2
    console.log('Find all 3s:', linearSearchAll([3, 1, 3, 7, 3], 3));  // [0,2,4]
}

module.exports = { linearSearch, linearSearchAll };
