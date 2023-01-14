const nemo = ['nemo']

function findNemo(array) {
    let T0 = performance.now()
    for (let i=0; i<array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo')
        }
    }
    let T1 = performance.now()
    console.log("call to find nemo took " + (T1-T0) + "milliseconds")
}

findNemo(nemo)