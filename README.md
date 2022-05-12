run: node index.js

get all user:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET http://localhost:8080

get single user: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET http://localhost:8080/{id}

remove single user: &nbsp;DELETE http://localhost:8080/{id}

update single user: &nbsp;&nbsp;PUT http://localhost:8080/
<br />
request body:
````
Content-Type: application/json
{
"id": <value>
"first_name": "<value>",
"last_name": "<value>",
"email": "<value>",
"phone": "<value>",
"img": "<value>"
}
````

create single user: &nbsp;&nbsp;&nbsp;&nbsp;POST http://localhost:8080/ + POST http://localhost:8080/image
<br />
request body:
````
Content-Type: application/json
{
"first_name": "<value>",
"last_name": "<value>",
"email": "<value>",
"phone": "<value>",
"img": "<value>"
}
````