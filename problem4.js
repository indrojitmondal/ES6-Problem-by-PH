const array1 = [2,7,4,8,6,5];
const array2 = [23,542,123,23];

const maxNumber = (array1,array2) =>{
    
    const newArray = array1.concat(array2);
    
     const max= Math.max(...newArray);
    return max;
}
console.log(maxNumber(array1,array2));