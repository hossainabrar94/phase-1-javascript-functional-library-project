function myEach(collection, callBack) {
    // Check if the collection is an object
    let processedCollection = collection;

    if (typeof collection === 'object' && !Array.isArray(collection)) {
      // If it's an object, convert it to an array of values
      processedCollection = Object.values(collection);
    }
  
    for (let i = 0; i < processedCollection.length; i++) {
      // Call the callback function with the current element
      callBack(processedCollection[i]);
    }
  
    // Return the original collection
    return collection;
}

function myMap(collection, callback){
    let processedCollection = [...collection]
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        // If it's an object, convert it to an array of values
        processedCollection = Object.values(collection);
      }
    for(let i =0; i<processedCollection.length; i++){
        processedCollection[i] = callback(processedCollection[i])
    }
    return processedCollection
}

function myReduce(collection, callback, acc){
    let processedCollection = [...collection]
    let reducedValue
    let startIdx = 0
    if (typeof collection === 'object' && !Array.isArray(collection)) {
        // If it's an object, convert it to an array of values
        processedCollection = Object.values(collection);
    }
    if(acc){
        reducedValue = acc
    }else{
        reducedValue = processedCollection[0]
        startIdx = 1
    }
    for(let i = startIdx; i<processedCollection.length; i++){
        reducedValue = callback(reducedValue, processedCollection[i], collection)
    }
    return reducedValue
}

// function myFind(collection, predicate){
//     let processedCollection = [...collection]
//     if(typeof collection === 'object' && !Array.isArray(collection)){
//         processedCollection = Object.values(collection)
//     }
//     let findValue = processedCollection.forEach(element => {
//         if(predicate(element)){
//             findValue = element
//         }
//     })
//     return findValue
// }

function myFind(collection, predicate){
    let processedCollection = [...collection]
    if(typeof collection === 'object' && !Array.isArray(collection)){
        processedCollection = Object.values(collection)
    }
    let findValue
    for(let i = 0; i< processedCollection.length; i++){
        if(predicate(processedCollection[i])){
            findValue = processedCollection[i]
            break;
        }
    }
    return findValue
}

function myFilter(collection, predicate){
    let processedCollection = [...collection]
    if(typeof collection === 'object' && !Array.isArray(collection)){
        processedCollection = Object.values(collection)
    }
    let filteredCollection = []
    for(let i = 0; i<processedCollection.length; i++){
        if(predicate(processedCollection[i])){
            filteredCollection.push(processedCollection[i])
        }
    }
    return filteredCollection
}

function mySize(collection){
    let processedCollection = [...collection]
    if(typeof collection === 'object' && !Array.isArray(collection)){
        processedCollection = Object.values(collection)
    }
    return processedCollection.length
}

function myFirst(array, n=1){
    let myFirstOutput
    if(n!=1){
        myFirstOutput = []
        for(let i = 0; i < n; i++){
            myFirstOutput.push(array[i])
        }
    }else{
        myFirstOutput = array[0]
    }
    return myFirstOutput
}

function myLast(array, n) {
    if (n) {
        // Return the last n elements of the array
        return array.slice(-n);
    } else {
        // Return the last element of the array
        return array.slice(-1)[0];
    }
}

function myKeys(object){
    let processedObject = []
    return processedObject = Object.keys(object)
}

function myValues(object){
    let processedObject = []
    return processedObject = Object.values(object)
}