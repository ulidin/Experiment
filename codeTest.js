function find_duplicate_in_array(arra1) {
    const object = {};
    const result = [];

    arra1.forEach(item => {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
        if (object[prop] >= 2) {
            result.push(prop * 2);
        }
    }

    return result;

}

console.log(find_duplicate_in_array([4, 1, 2, 4, 5, ]));