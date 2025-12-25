## Top 5 common mistakes

This section describes the most common issues beginners may face
when running the API example for the first time.

---

### 1. Opening the HTML file directly

Problem:  
The API request fails or nothing happens when clicking the button.

Cause:  
The HTML file was opened directly using file://, which triggers browser security restrictions.

Solution:  
Open the file using Live Server in VS Code.

Right-click api-test.html → Open with Live Server

---

### 2. CORS error in the browser console

**Problem:**  
Error message similar to:

Access to fetch at ‘https://example-api.com’
has been blocked by CORS policy

**Cause:**  
CORS is a browser security feature. The server did not allow
requests from the current origin.

**Solution:**
Make sure you:
- Open the file via **Live Server**
- Use a public API that supports browser requests

CORS errors are **not caused by JavaScript bugs.**

---

### 3. API URL contains a typo

**Problem:**  
The request fails with a network error.

**Example:**
https://reques.in/api/users
**Correct URL:**
https://reqres.in/api/users

**Cause:** 
A small typo in the API URL.

**Solution:**  
Double-check the API endpoint spelling in the code.

---

### 4. Errors in the console from browser extensions

**Problem:**  
Red error messages appear in the browser console even though
the example works correctly.

**Cause:**  
Some browser extensions inject scripts and log errors.

**Solution:**  
If the API request works and data is displayed,
these errors can be safely ignored.

---

### 5. Nothing happens after clicking the button

**Problem:**  
Clicking the button produces no visible result.

**Cause:**  
Possible reasons:
- JavaScript is disabled
- The file is not opened via Live Server
- The script failed to load

**Solution:**  
Ensure that:
- JavaScript is enabled in the browser
- The page is opened via **Live Server**
- No syntax errors are shown in the console

---

If the problem persists, check the browser console and network tab
to verify that the API request is being sent.