const newObj = {
    a: 1,
    b: 2
};


const nameCheckKeyObj = (str, object) => {
    
    if ((str in object) === true) {
        return true;
    } else {
        return false;
    }
};

console.log(nameCheckKeyObj('c', newObj));