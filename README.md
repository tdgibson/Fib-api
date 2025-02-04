Fibonacci Sequence API

This API accepts an integer n as input and returns the nth Fibonacci number. The Fibonacci sequence is defined as:

F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

To run locally you can follow these steps.

Clone this repository:
    git clone https://github.com/tdgibson/Fib-api.git
    cd Fib-api

Install dependencies:
    npm install

Start the server:
    npm start

This will start the server at http://localhost:3000.

You can test this API using a browser and inputting the URL:
    http://localhost:3000/fibonacci?n=10

Your response should be:
    {
  "fib": 55
}

Dependencies include express, which is a minimal framework for Node.js


Production:
    This service is currently running in a production environment using the online Web Service hosted through Render. (However the free account will spin it down with inactivity, but let me know if you want to test it and I can spin it up)

    To test in Production you can use this sample URL:
    https://fib-api-we8y.onrender.com/fibonacci?n=10
    
    Your response should be:
        {
    "fib": 55
        }

Containerization
    Creating a Docker container would give this API advantages, such as consistency across environments, easy deployment to any cloud provider, and being isolated so it wouldn't conflict with other services.
    A Docker container is also easy to scale when deployed to a Kubernetes cluster.

Continuous Integration
    Code Repository in GitHub
    GitHub Actions could run tests (I did not implement any tests)
    GitHuyb Actions to build Docker Image

Continuous Deployment
    Push Image to Docker Registry
    Deploy using a Cloud Service (In this instance, I used Render)
    Rolling updates to avoid downtime

Logging and Monitoring
    Simple loggging using different log levels as necessary would collect errors and events.
    Monitoring through a Promethius + Grafana stack would be simple and effective to setup.  You could use that data to know when to scale.  
    Adding a Health Check endpoint would be a good idea so you could be notified if any issues cause the service to go down.

Scaling
    Scale up more containers in a Kubernetes cluster to handle increased requests.  Can be automated and wouldn't cause downtime.
    You could add a database with already computed numbers and cache them so they could be retrieved faster and use fewer resources.
