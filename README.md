
# E notice board web application

E-notice board web application is a platform for students to view notices and teachers to post them for easy and efficient communication where students and teachers gather to get the latest release of notices. 

It has essential features such as notice creation, deletion, adding attachments, categorization, and enhancing user engagement through interactive features like commenting on the notices.





## Run Locally

Clone the project

```bash
  git clone https://github.com/UdayrajJhala/E-Notice-Board-Web-App
```

Go to the project directory

```bash
  cd E-Notice-Board-Web-App
```

Install NodeJS on your system

Install MySQL on your system

- create a database 'noticeboard'
- create a table user using this query 
```
create table credentials
(email varchar(50),
pass varchar(50));
```
Install dependencies

```bash
  npm install express
  npm install mysql2
  npm install path
  npm install body-parser
```
change the username and password according to your MySQL server
```
  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jhala@27',
  database: 'noticeboard'});
```

Start the server

```bash
  node server.js
```

run login.html

