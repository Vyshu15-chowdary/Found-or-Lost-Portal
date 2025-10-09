# 🧾 Lost and Found Management System

A full-stack **Lost and Found Management System** built using the **MERN stack** with **MySQL** as the database.  
This web application allows users to post lost or found items, manage their listings, and help others recover their belongings efficiently.

---

## 🚀 Features

- 🔐 **User Authentication** (Signup & Login with JWT)
- 🏷️ **Post Lost or Found Items**
- 🔍 **Search and Filter** items by title, description, or category
- ✏️ **Edit & Delete** your own posts
- 🖼️ **Image Upload** support for better identification
- 👤 **User-Specific Dashboard** for managing your posts
- 🗃️ **Real-Time Updates** using React hooks
- 💾 **MySQL Database Integration** for secure data storage

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Axios, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Authentication** | JSON Web Token (JWT), bcrypt |
| **Styling** | CSS / Tailwind CSS |
| **Hosting (optional)** | Render / Google Cloud / Vercel |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Vyshu15-chowdary/lost-and-found-management-system.git
cd lost-and-found-management-system

For Backend :
cd backend
npm install

For Frontend :
cd ../frontend
npm install

CREATE a MySQL database:

CREATE DATABASE lostfound;

Update your backend .env file:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=lostfound
JWT_SECRET=your_secret_key

Run the application

cd backend
npm start

Start frontend:
cd ../frontend
npm run dev


📁 Folder Structure

lost-and-found-management-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│
└── README.md

💡 Project Workflow

User Registration/Login → JWT authentication

Add Item → Users can post lost or found items with details and image

View/Search Items → Filter by keyword or category

Edit/Delete → Only the item owner can update or remove posts

Dashboard → Manage all your items in one place


🧠 Learning Outcomes

Full-stack development with MERN + MySQL

RESTful API design and integration

JWT-based authentication

State management and routing in React

CRUD operations using MySQL


🤝 Contributing

Contributions are welcome!
Fork this repo, make your changes, and submit a pull request.

📞 Contact

Developer: Yendluri Vyshnavi
📧 Email: vishuchowdary20@gmail.com

https://www.linkedin.com/in/vyshnaviyendluri/

⭐ If you like this project, don't forget to give it a star on GitHub! ⭐



