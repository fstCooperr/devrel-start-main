async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        console.log("Users from API:");
        console.log(users);
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}

loadUsers();