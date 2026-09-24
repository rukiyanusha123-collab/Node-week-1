function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function fetchData() {
    try {
        const result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();