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

*Landing Page:*

![Blogs](https://user-images.githubusercontent.com/65642947/147504502-8c170592-ebd4-4037-aabc-482ea5fb1b36.JPG)

Click on "Register" to go to the register page and fill the details and click on "register" to register a new user and use that username and password.

![Capture](https://user-images.githubusercontent.com/65642947/147504632-bd2b2aa0-4ec7-4fbd-a9db-e515dc9f6909.JPG)


Once you login, you are greeted with a screen similar to the one below

![image](https://user-images.githubusercontent.com/65642947/147504990-6b46eac7-3332-4fc4-8e49-3a6cda6a14e2.png)

You can add a blog by clicking on the "Add Blog" button

![image](https://user-images.githubusercontent.com/65642947/147505113-27e841aa-7d3c-4a15-b41f-1876fdde1efd.png)

When the blogs are added, you can click on the "show" button beside the items to expand the details of those items. From here, you can view the details, like or delete the blogs. The blogs are arranged in the order of their likes from highest to lowest.

![image](https://user-images.githubusercontent.com/65642947/147505201-1c5c1918-8d47-41e0-9120-e639e33bb776.png)

