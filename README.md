# 🛍️ MERN Web App with Recommendation & Sentiment Analysis

This project is a full-stack e-commerce web application with machine learning algorithms built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and **Flask + Python**. It features:

- ✅ A **custom-built recommendation system** using the **Apriori algorithm**.
- 💬 **Sentiment analysis** on product reviews using a **Bag-of-Words (BoW)** model.
- 🎯 Intuitive UI for product browsing, review submission, and personalized suggestions.

---

#### Output
<img width="1440" alt="Screenshot 2025-04-19 at 2 23 52 PM" src="https://github.com/user-attachments/assets/aaf58f54-08d6-4608-846e-3aa257b7243d" />
<img width="1440" alt="Screenshot 2025-04-19 at 2 23 59 PM" src="https://github.com/user-attachments/assets/8b9b9b73-8c7c-4086-908d-18f127c88b58" />
<img width="1440" alt="Screenshot 2025-04-19 at 2 24 50 PM" src="https://github.com/user-attachments/assets/590a0cf7-bb61-423d-8ebd-3bed63d0e1e5" />
<img width="1440" alt="Screenshot 2025-04-19 at 2 24 29 PM" src="https://github.com/user-attachments/assets/187bc157-9c9c-4699-8ff0-cefbac567e61" />
<img width="1440" alt="Screenshot 2025-04-19 at 2 24 17 PM" src="https://github.com/user-attachments/assets/d14a20a5-67ba-4b9e-bd53-79173d8069dc" />

## 🔍 Features

### 🔗 Association Rule-Based Recommendation
- Implemented from scratch using the **Apriori algorithm**.
- Recommends products based on user interaction history and frequent itemsets.

### 💬 Sentiment Analysis
- Built a **Bag-of-Words model from scratch** to classify customer reviews as **positive** or **negative**.
- Real-time feedback displayed alongside product reviews.

### 🛒 E-commerce Functionality
- User authentication and authorization.
- Product listing and detail pages.
- Review system with sentiment feedback.
- Cart management.

---

## 🧠 Technologies Used

### Frontend
- React.js
- Redux (optional)
- Tailwind CSS / Bootstrap (as used)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Machine Learning (Custom Logic)
- Apriori algorithm (pure JS/Python, no external lib)
- Bag-of-Words model (custom preprocessing, feature extraction, and classification)

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js & npm
- MongoDB installed & running

### Clone the Repository
```bash
git clone https://github.com/HarshJani1/Webapp-With-Machine-Learning.git
cd Webapp-With-Machine-Learning
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

This project is open-source and available under the MIT License.

