// 1. Promise
const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

const messages = async () => {
    try {
        const msg = await helloWorld();
        console.log(msg);
    } catch (error) {
        console.error(error);
    }
}

messages();

// 2. Fetch
const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then((json) => {
            json.data.forEach((user) => {
                console.log(user.email);
            });
        });
}

ambilDataUser();

// 3. Async Await
const ambilDataUserAsync = async () => {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();
    json.data.forEach((user) => {
        console.log(user.email);
    })
};

ambilDataUserAsync();

// 4. Axios

const ambilDataUserAxios = async () => {
    let result = await axios.get("https://reqres.in/api/users");
    result.data.data.forEach((user) => {
        console.log(user.email);
    });
}

ambilDataUserAxios();




