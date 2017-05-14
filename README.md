### For Any Query Ping Me

[![Join the chat](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/divyanshu001)

##

#### Description 
* Built a rest Api in Node.js by leveraging Node.js.
* Used JSON web tokens for token-based user authentication.
* Used ‘Haversine’ formula to calculate distance between given (Latitude,longitude) pairs.

##

### How it works !
#### Api Consist of following End Points

```

  app.post('/post_location',callback.post_location);

	app.get('/get_location',callback.get_location);

	app.get('/',callback.basic_route);

	app.post('/register',callback.register_user);

	app.get('/users',callback.get_users);

	app.post('/get_using_self',callback.get_using_self);

```


##

#### Installation Instructions :grey_exclamation:

* Clone or download the repo. into any fresh temporary folder.

* Cd into that root folder you just cloned locally.

* Open terminal in the current folder and to install all dependencies type 

```javascript
   npm install 
```

* Now typing 

```javascript
   nodemon server.js
```

* will start a server !

##

#### DB Used (MongoDB)

* MLab's MongoDB hosting platform is the fastest growing cloud Database-as-a-Service in the world. Get started with a free database and expert support.

##

#### Package Manager Used (NPM)

* NPM is the default package manager for the JavaScript runtime environment Node.js.

##

#### Package.json (dependencies)
  
* For dependencies refer Package.json.

##

#### For Testing (Postman)

* Postman extension can be used for testing !
* Supercharge your API workflow with Postman! Build, test, and document your APIs faster.
* You can now fire up postman and then perform several operations on the REST API.

##

### Contributing

1. Create your **_branch_**: `git checkout -b my-new-feature`

2. **_Commit_** your changes: `git commit -m 'Add some feature'`

3. **_Push_** to the branch: `git push origin my-new-feature`

4. Send a **Pull Request**

5. **_Enjoy!_**

##


#### Examples

* GET Request to URL http://localhost:4000/api/get_location    (without access token !)

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/without_access_token.png)

##

* GET Request to URL http://localhost:4000/api/get_location    (with access token!)

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/with_access_token.png)

##

* POST Request to URL http://localhost:4000/api/get_using_self  (Just Enter LAT,LNG,RADIUS !)

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/get_using_self.png)

##
