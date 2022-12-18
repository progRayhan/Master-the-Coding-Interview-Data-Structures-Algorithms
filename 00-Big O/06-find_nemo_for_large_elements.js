const large = new Array(1000).fill('nemo')

function findNemo(array) {
    T0 = performance.now()
    for (let i=0; i<array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo')
        }
    }
    T1 = performance.now()
    console.log('call to find nemo took : ' + (T1-T0) + 'milliseconds')
}

findNemo(large)