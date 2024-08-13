const removeFromArray = function(arr, ...valsToRemove) {

    let removedArr = [];

    // elements that should not be removed mapped to 'false'
    let toRemove = arr.map((val) => valsToRemove.indexOf(val) > -1);

    // for every "false" in toRemove
    for (let i = 0; i < toRemove.length; i++) {

        if (toRemove[i] === false) {
            // keep corresponding val from arr to removedArr
            removedArr.push(arr[i]);
        }
    }

    return removedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
