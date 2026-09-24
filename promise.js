const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Something went wrong!");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });