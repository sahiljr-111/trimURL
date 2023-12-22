
# TrimURL

trim url project is based on the short a url in min 8 chatacters 


## Installation

install node-module folder

```terminal
 npm install
```

    
## How to start

```terminal 
 npm start 
```
there is starting development server and running in port:3000


## API Reference

#### POST URL

```http
  POST /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `urlID` | `string` | **Required**. Your website url |

#### Get Website

```http
  GET /${shortID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `urlID` | `string` |  **Required**. its return your original website with this short id you pass in the URL |

#### Get Information

```http
  GET /statistics/${shortID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `urlID` | `string` |  **Required**. it is return a information about the specific id. |



## Tech Stack

**Server:** Node, Express

## Support Packages

`mongoose` ` shortid`

## Folder structure creted By
```terminal
npx express-generator -e
```
