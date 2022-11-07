/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(arr, element) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]===element){
            return i
        }
    }

}
 