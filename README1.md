# DevRel Start

Learning DevRel step by step from zero.

## About
This repository documents my journey into DevRel.
Starting with GitHub, API basics, and demos.

## What I learned
- Git & GitHub basics
- Pull Requests
- API fundamentals
- Working demos

## Why is this really DevRel, and not just "pretty"?

DevRel README:
- explains what it is
- explains why
- shows the result
- beginner-friendly

❌ Bad:
> "Here's the code, you'll figure it out"

✅ Good:
> "Here's the goal, here's an example, here's how to try it"


## 🔹 End-of-day checklist

Before committing:
```
- ✅ There are headings
- ✅ There are lists
- ✅ There is a code block
- ✅ The README reads like a story
- ✅ Clear for a beginner
```

## Installation

To run this project locally, you need:

- A modern web browser (Chrome, Edge, Firefox)
- Visual Studio Code
- Live Server extension for VS Code

### Install Live Server

1. Open VS Code
2. Go to Extensions (left sidebar)
3. Search for Live Server
4. Click Install

## Run example

1. Open this project folder in VS Code
2. Navigate to the file:
3. Right-click the file
4. Select Open with Live Server

After opening the page:
- Click the Load users button
- You should see a list of users in JSON format

## How it works

This example uses the browser Fetch API to send an HTTP GET request
to a public API endpoint.

When the button is clicked:
1. A request is sent to the API
2. The API returns JSON data
3. The data is displayed on the page

```js
fetch("https://jsonplaceholder.typicode.com/users")
```

### CORS error

Make sure you open the file using Live Server.

Opening the HTML file directly (file://)
will cause browser security errors.

### Console errors from browser extensions

Some console errors may come from browser extensions.
These can be safely ignored if the example works correctly.

### Button does nothing

Check that JavaScript is enabled
and that the file is opened via Live Server.