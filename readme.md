## User Managment System Using Node, Express & MongoDB
###### This is a simple CRUD Application for users managment built to learn basics of node.js (v18.3.0)
<br/>

After clonning the project repository, we need to set up a new or existing npm package.
```shell
npm init
```

then install the requirements 
```shell
npm i express mongoose ejs nodemon morgan dotenv body-parser axios
```

After that its better to create a **config.env** file
```file
PORT=(port number-optional)
MONGO_URI=(url for mongo cloud db)
```

Now run the application
```shell
npm start
```

- ! You can also use ```node server.js``` but its recomended to use npm start


You can use ```postman``` to test the ```API``` on these urls:
  - ```GET``` /api/users : read users.
  - ```POST``` /api/users : create user.
  - ```PUT``` /api/users/<id> : update a user.
  - ```DELETE```  /api/users/<id> : Ddelete a user.
  
  ***
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
  
