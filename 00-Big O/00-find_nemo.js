// array
const nemo = ['nemo'];

// declare function
function findNemo(array){
    for (let i=0; i<array.length; i++){
        if (array[i] == 'nemo'){
            console.log("found Nemo!");
        }
    }
}

// invoke or call function
findNemo(nemo)