

function insertionSort(array:number[]):number[] {
    let steps = 0;
    for(let i = 1; i<array.length; i++) {
        let tmpNumber = array[i];
        let consecutivo = i;
        for(let y = i; y > 0; y--) {
            steps++;
            if(array[y-1] > tmpNumber){
                steps++;
                array[y] = array[y-1];
                consecutivo--;
                steps++;
            }else {
                break;
            }
        }
        array[consecutivo] = tmpNumber;
    }
    console.log(array);
    console.log('Pasos realizados: ' + steps)
    return array;
}

// CODE IMPLEMENTATION BY BOOK "DATA STRUCTURES AND ALGORITHMS BY JAY WENGROW"

/* function insertionSort(array:number[]):number[] {
    let steps = 0;
    for(let i = 1; i<array.length; i++) {
        let tmpNumber = array[i];
        let position = i - 1;
        while(position >= 0) {
            steps++;
            if(array[position] > tmpNumber) {
                steps++;
                array[position + 1] = array[position];
                position = position - 1;
                steps++;
            } else {
                break;
            }
        }
        array[position + 1] = tmpNumber;
    }
    console.log(array);
    console.log('Pasos realizados: ' + steps)
    return array;
} */

insertionSort([5,4,3,2,1]);
insertionSort([4,2,8,6,9]);
insertionSort([25,267,1,7,5]);
insertionSort([4,20505,3,5555,2000,34,534354,7667576765756,4543354,223,43454,365,5663543546345543]);
insertionSort([100,21,9,20,15]);
insertionSort([24,23,2,943,7]);
