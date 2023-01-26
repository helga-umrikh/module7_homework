const hasOwnPropfunc = (object) => {
    for (let key in object) {

        if (object.hasOwnProperty(key)) {
        console.log(key);
        }

    }
}

hasOwnPropfunc(person);