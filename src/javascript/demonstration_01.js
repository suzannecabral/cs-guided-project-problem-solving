// """
// Challenge #1:

// Write a function that retrieves the last n elements from a list.

// Examples:
// - last([1, 2, 3, 4, 5], 1) ➞ [5]
// - last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
// - last([1, 2, 3, 4, 5], 7) ➞ "invalid"
// - last([1, 2, 3, 4, 5], 0) ➞ []

// Notes:
// - Return "invalid" if n exceeds the length of the list.
// - Return an empty list if n == 0.
// """


function last(a, n){

    let oldList = a;
    let newList = [];

    let i=0
    while(i < n){
        newList.push(oldList[oldList.length-i-1])
        i++;
    }

    if(n <= oldList.length){
        return newList;
    }else{
        return "invalid"
    }
}

console.log(last([4, 3, 9, 9, 7, 6],3));


// NOTES
// ----------------------------