"use strict";
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let tmpNumber = 0;
        let consecutivo = i;
        tmpNumber = array[i];
        delete array[i];
        for (let y = i; y > 0; y--) {
            if (array[y - 1] > tmpNumber) {
                array[y] = array[y - 1];
                consecutivo--;
            }
            else {
                break;
            }
        }
        array[consecutivo] = tmpNumber;
    }
    console.log(array);
    return array;
}
insertionSort([4, 2, 8, 6, 9]);
insertionSort([25, 267, 1, 7, 5]);
insertionSort([4, 20505, 3, 5555, 2000, 34, 534354, 7667576765756, 4543354, 223, 43454, 365, 5663543546345543]);
insertionSort([100, 21, 9, 20, 15]);
insertionSort([24, 23, 2, 943, 7]);
