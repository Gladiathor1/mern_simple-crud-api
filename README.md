# MERN Simple CRUD API

A simple full-stack **MERN** (MongoDB, Express, React, Node.js) example that manages a list of website URLs. The Express API supports create, read, update and delete operations against MongoDB, and the React front end provides forms and a table for using it.

## Features

- REST API for URLs with Mongoose (each URL name is unique)
- React UI to add, list, edit and delete entries
- Bootstrap styling and Formik forms
- Axios service layer for calling the API

## API

The server runs on port **5000**.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/urls` | List all URLs |
| GET | `/urls/:name` | Find a URL by name |
| POST | `/urls/add` | Add a URL — body: `{ "urlName": "example.com" }` |
| POST | `/urls/update/:id` | Update a URL — body: `{ "urlName": "new.com" }` |
| DELETE | `/urls/:id` | Delete a URL |

## Project structure

```
index.js            Express server & MongoDB connection
routes/urls.js      CRUD routes
models/urls.js      Mongoose schema
mongodb_facade.js   Earlier version using the native MongoDB driver (not used)
frontend/           React app (Create React App)
  src/Components/   Create, edit and list components
  src/services/     Axios API service
```

## Getting started

### Prerequisites

- Node.js
- A MongoDB database (local or MongoDB Atlas)

### Back end

1. Set the MongoDB connection string in `index.js` to your own database (ideally load it from a `.env` file — `dotenv` is already installed).
2. Install and run:

```bash
npm install
npm run serve      # nodemon, http://localhost:5000
```

### Front end

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

The front end calls the API at `http://localhost:5000` (see `frontend/src/http-common.js`).
