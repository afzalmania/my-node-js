# Node APIs Demo with MongoDB

### Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Technologies used](#technologies-used)

### Project structure

```

|- server.js _______________________________ # Application entry
src/
|  |- controllers/
|       |- customers.js _______________________ # Main controller
|       |- notfound.js _______________________ # If any api not found
|  |- models/
|       |- models/
|       |   |- customers.js _______________________ # customers Model
|  |- routes/
|       |- index.js _______________________ # Main router
|       |- notfound.js _______________________ # Not found router
|  |- utils/
|       |- index.js _______________________ # Utility functions
```

### Installation

1- Clone the repo

2-`npm install` to install npm packages

3- start dev server using `npm start`.

4- To create connection with mongo create .env file and give DATABASE_URL='db_url_with_name'.

5- You are set to fly....

#### Technologies used

- [express 4](https://github.com/expressjs/express)
- [mongoose 5](https://github.com/Automattic/mongoose) mongo connectivity module.
