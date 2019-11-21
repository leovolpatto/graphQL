# graphQL
## Running NodeJS silly API's (Authors/Books and Person/Friendship)
### Prerequisites:
- You need to set the connection configs in:
  - /NodeJS/apis/books/config/config.json 
  - /NodeJS/apis/persons/config/config.json
- You also need to set init-db, pointing the cd command to the place where your mysql bin is, in:
  - /NodeJS/apis/books/package.json 
  - /NodeJS/apis/persons/package.json
  
Enter nodeJS/ folder

```
$ cd NodeJS/
```
Execute npm
```
$ npm start
```
All required dependencies will be installed, fake data will be inserted into database and each API will run on a specific port:

**Books/Authors**: http://127.0.0.1:5010/

**Person/Friendship**: http://127.0.0.1:5011/
