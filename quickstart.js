console.log("Starting Quickstart...");

async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();

    console.log("API response:");
    console.log(data);
}

main();