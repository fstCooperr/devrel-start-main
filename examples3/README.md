## Demo
Simple API demo using fetch:
```js
fetch("https://reqres.in/api/users?page=2")

## GET vs POST

### GET
- Used to retrieve data
- Does not change server state
- Parameters are usually in the URL
- Can be opened directly in the browser

Example:
```js
fetch("https://reqres.in/api/users?page=2")