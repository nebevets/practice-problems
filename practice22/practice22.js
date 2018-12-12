/* 
    sorts an array of objects based on a object key.
    array: an array of objects
    property: a property in the objects for sorting
    order: (optional) 1 for ascending (default), -1 for descending
*/

const sortObjectListByField = (array, property, order=1) => {
    const output = array.sort((a, b) => {
        if(a[property]>b[property]){
            return order
        }
        return -order
    });
    return output;
}