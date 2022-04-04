### Serverless GraphQL API + DynamoDB

<p>This product was created to show my skills with serverless framework using AWS Lambda, DynamoDB and GraphQL</p> 

I choose this tech's cause it's a great option to create large faster applications.

- Serverless framework is used to create functions in cloud.
- GraphQL is used to create API's and it's bring just necessary data's.
- DynamoDB is a database no-sql it's 5x faster than others no-sql database as MongoDB for example.
- Typescript is a super tool to Javascript it's a great option to work with types in Javascript.
---------------------------------------------------------------------------------

<h5>What's contain in the project ?</h5>

- Serverless Framework (AWS provider)
- DynamoDB
- GraphQL
- Typescript 
- Docker Compose (Run DynamoDB Locally)

</br>
<h5>Architecture</h5>
</br>

![diagram](/docs/diagram.jpg?raw=true "Diagram")

<h5>Install dependencies</h5>

``yarn``

<h5>Create Dynamo Table locally</h5>

<small>DynamoDB Admin provider an graph interface to manage tables</small>

``npm install -g dynamo-admin``

<small>Docker compose simulate the database in the docker container</small>

``docker-compose -f docker-compose.yaml up -d``

<h5>How to create data in the table</h5>

<small>Run project with ``yarn dev`` the serverless-offline will to provide the path. With this path just to make request in the Postman or Insomnia </small>



