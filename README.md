# HTTP Server 

This project implements a simple static HTTP server using **vanilla JavaScript** and Node.js built-in modules.


### Description

- **server.js**  
  Contains all the route handling logic for the server.
  
- **package.json**  
  Defines project name, version, type (module), and start script.

- **package-lock.json**  
  Automatically generated to lock installed Node.js package versions.

- **.gitignore**  
  Ensures that unnecessary files like `node_modules` and OS-specific files are not committed.

- **README.md**  
  Explains project setup, endpoints, and usage instructions.

## Setup & Run

```bash
npm install
npm start
```

# Supported Endpoints

## GET /html

Returns an HTML page rendered in the browser.

```
http://localhost:3000/html
```

## GET /json

Returns a JSON response.

```
http://localhost:3000/json
```

## GET /uuid

Returns a UUID v4.

```
http://localhost:3000/uuid
```

**Example response:**

```json
{
  "uuid": "14d96bb1-5d53-472f-a96e-b3a1fa82addd"
}
```

## GET /status/{status_code}

Returns a response with the specified HTTP status code.

**Examples:**

```
/status/100
/status/200
/status/300
/status/400
/status/500
```

## GET /delay/{delay_in_seconds}

Delays the response by the specified number of seconds, then returns `200 OK`.

**Example:**

```
/delay/3
```

(Response is sent after 3 seconds)

## Root Path `/`

Accessing `http://localhost:3000` directly will return:

```
Not Found
```
