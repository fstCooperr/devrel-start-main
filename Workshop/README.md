## Step 1: Install Node.js

Node.js is required to run JavaScript tools and examples locally.

### Installation

1. Go to https://nodejs.org
2. Download the LTS version
3. Install Node.js using default settings

### Verify installation

Open a terminal and run:

```bash
node -v

You should see a version number, for example:
v20.x.x

## Step 2: Run the example

In this step, you will run a working API example.

### Steps

1. Open the project folder in VS Code
2. Open the file: api-test.html
3. Right-click the file
4. Select **Open with Liev Server**

### Expected result

- A web page opens in the browser
- Click the Load users button
- A list of users appears in JSON format

## Step 3: Create your own API request

Now let's modify the example and make your own request.

### Task

1. Open api-test.html
2. Find this line:

```js
fetch("https://jsonplaceholder.typicode.com/users")

Replace it with:
fetch("https://jsonplaceholder.typicode.com/posts")

### Result

After clicking the button again,
you should see a list of posts instead of users.