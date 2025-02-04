# Fibonacci Sequence API

This API accepts an integer `n` as input and returns the `n`th Fibonacci number.  

### **Fibonacci Sequence Definition**  
\[  F(0) = 0 \]  
\[  F(1) = 1 \]  
\[  F(n) = F(n-1) + F(n-2), \quad \text{for } n > 1  \]

## 🚀 Getting Started

### **Clone the Repository**
```sh
git clone https://github.com/tdgibson/Fib-api.git
cd Fib-api
```

### **Install Dependencies**
```sh
npm install
```

### **Start the Server**
```sh
npm start
```
This will start the server at **http://localhost:3000**.

## 🔍 Testing the API

### **Local Testing**
You can test the API using a browser or API tools (Postman, cURL) with:  
```
http://localhost:3000/fibonacci?n=10
```
Expected response:
```json
{
  "fib": 55
}
```

### **Production Testing**
The API is deployed on Render. (Note: Free-tier instances may sleep due to inactivity.)  

Test it with:
```
https://fib-api-we8y.onrender.com/fibonacci?n=10
```
Expected response:
```json
{
  "fib": 55
}
```

---

## 📺 Dependencies
This API uses:
- **Express.js** – A minimal Node.js framework for building web applications.

---

## 🐟 Containerization (Docker)
### **Why use Docker?**
- **Consistency:** Runs the same across all environments.  
- **Easy Deployment:** Works on any cloud provider.  
- **Isolation:** Prevents conflicts with other services.  
- **Scalability:** Can be deployed in Kubernetes for auto-scaling.

---

## 🔄 CI/CD (Continuous Integration & Deployment)

### **Continuous Integration**
- GitHub repository for version control.
- **GitHub Actions** (not implemented yet) could:
  - Run tests.
  - Build Docker images.

### **Continuous Deployment**
- **Push Docker Image** to a container registry (e.g., Docker Hub).
- **Deploy on a Cloud Service** (currently hosted on Render).
- **Rolling updates** for zero downtime.

---

## 📊 Logging & Monitoring

- **Logging:** Use different log levels (`info`, `warn`, `error`) to track issues.  
- **Monitoring:**  
  - **Prometheus + Grafana** for performance tracking and scaling insights.  
  - **Health Check Endpoint** to notify failures.

---

## 📈 Scaling Strategies

- **Kubernetes Auto-Scaling:** Increase container instances based on traffic.
- **Caching:** Store computed Fibonacci numbers in Redis or a database for faster responses.  
- **Load Balancing:** Distribute requests across multiple instances.

---

### ✅ Future Enhancements
- Implement **unit tests**.
- Add **Dockerfile** for containerization.
- Improve **error handling and input validation**.

---

