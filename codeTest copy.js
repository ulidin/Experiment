function pariOfTwo() {
    let arra1 = [4, 1, 5, 4, 5]
    let object = {};
    let result = [];

    arra1.forEach(item => {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (let prop in object) {
        if (object[prop] >= 2) {
            result.push(prop * 2);
        }
    }

    return result;

}

//console.log(find_duplicate_in_array([4, 1, 5, 4, 5]));
console.log(pariOfTwo());