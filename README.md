Built a rest Api in Node.js by leveraging Node.js

[![Greenkeeper badge](https://badges.greenkeeper.io/divyanshu-rawat/A-Rest-Api.svg)](https://greenkeeper.io/)

##
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)


[![Contact me on Codementor](https://cdn.codementor.io/badges/contact_me_github.svg)](https://www.codementor.io/divyanshurawat?utm_source=github&utm_medium=button&utm_term=divyanshurawat&utm_campaign=github)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/r46956)


[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/divyanshu-rawat)
[![Build Status](https://travis-ci.org/divyanshu-rawat/JS-Testing.svg?branch=master)](https://travis-ci.org/divyanshu-rawat/JS-Testing)

##

Back-End API 

* https://myrestfulapplication.herokuapp.com/api/users
* Please Use POSTMAN for Testing Purpose !!
* Authenticate Client First
* Username : divyanshu
* Password : xyz
* A JWT will be generated and used for subsequent request from Client to server !
* You can register as well no need to rely on username :  divyanshu !!

##

#### Description 
* This Api compares results returned by ‘Haversine’ formula and MongoDB Geospatial Indexes and Queries feature.
* when a location is given and we need to fetch all the nearby points within a radius.
* Used JSON web tokens for token-based user authentication.
* Used ‘Haversine’ formula to calculate distance between given (Latitude,longitude) pairs.
* This Api compares results returned by ‘Haversine’ formula and MongoDB Geospatial Indexes and Queries feature.


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
	
	app.post('/get_using_self',callback.get_using_mongodb

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


Examples

* GET Request to URL http://localhost:4000/api/get_location    (with access token!)

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/with_access_token.png)


##

* POST Request to URL https://myrestfulapplication.herokuapp.com/api/register  (User Registration !)

![alt tag](https://github.com/divyanshu-rawat/A-Rest-Api/blob/master/snapshots/post_location.png)

##


Comparison between Haversine Formula v/s Mongodb Geospatial

* Sample Data via Postman

```
	{"radius":"10","coordinates":[38.8,-77.0]} Data Format - [lat,long]
```

* POST Request to URL localhost:4000/api/get_using_self

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/get_using_self.png)

##

* POST Request to URL localhost:4000/api/get_using_mongodb 

![alt tag](https://github.com/divyanshu-rawat/task/blob/master/snapshots/get_using_mongoDB.png)

##
