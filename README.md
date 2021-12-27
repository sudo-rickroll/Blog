# Blog Application

This is an application built using MongoDB, ExpressJS, ReactJS. This application involves a user logging in and adding a blog, viewing blogs added by different users and liking the blogs. Users will need to register to use the username and password of their choice.

## Installation

Clone the application to your local machine and create a `.env` file with the following details :

```
PORT = <Port which you want the application to be run on>
MONGODB_URI = <Atlas Database URL for production/main database>
MONGODB_URI_TEST = <Atlas Database URL of the test database - this can be left empty if test DB is not required for usage>
SECRET_KEY = <Custom Secret key to be used for hashing of passwords that are used for creating a user> 
```

Run `npm install` in a CLI terminal pointing to the root of the directory.

## Usage




