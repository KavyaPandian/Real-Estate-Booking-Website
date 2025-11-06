# 🏡 Real Estate Booking Website

A modern **MERN Stack (MongoDB, Express.js, React, Node.js)** web application that allows users to explore, list, and book properties seamlessly.  
This project provides an elegant user interface, robust backend integration, and secure user authentication for managing real estate listings and visits.

---

## 🚀 Live Demo  
👉 

---


## 🧠 Features

- 🏘️ **Property Listings** — Browse through multiple real estate listings with price, address, and amenities.  
- 🔍 **Advanced Search & Filters** — Search properties by location, type, price, and more.  
- 🧑‍💻 **User Authentication** — Secure login and registration system (with JWT).  
- 🗓️ **Book a Visit** — Schedule property visits directly from the platform.  
- ❤️ **Mark as Favourite** — Save your favourite properties for quick access.  
- 📍 **Integrated Map Info** — Display property locations and nearby facilities.  
- 🗂️ **Responsive Design** — Fully mobile-friendly UI built using React and TailwindCSS.  

---

## 🛠️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (via Mongoose / Prisma) |
| **Authentication** | JWT (JSON Web Token) |
| **Hosting** | Vercel (Frontend), Render / Railway (Backend) |

---

## ⚙️ Installation & Setup (Run Locally)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/Real-Estate-Booking-Website.git
cd Real-Estate-Booking-Website

2️⃣ Backend Setup
cd server
npm install


Create a .env file inside the server folder:

MONGO="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret_key"
PORT=5000


Start the backend:

npm run dev

3️⃣ Frontend Setup
cd ../client
npm install
npm run dev


Frontend will start on:
👉 http://localhost:5173

🧩 Folder Structure
Real-Estate-Booking-Website/
│
├── client/              # React Frontend
│   ├── src/
│   ├── components/
│   └── pages/
│
├── server/              # Node.js + Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── index.js
│
├── .env                 # Environment variables (ignored in Git)
├── package.json
└── README.md

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/user/create	Create a new user
POST	/api/user/bookVisit/:id	Book a property visit
POST	/api/user/cancelBooking/:id	Cancel a booked visit
POST	/api/user/fav/:rid	Add/Remove favourites
GET	/api/residency	Fetch all property listings
🔒 Environment Variables

Your .env should contain the following keys:

MONGO="mongodb+srv://<username>:<password>@cluster.mongodb.net/realestate"
JWT_SECRET="your_secret_key"
PORT=5000

📚 Future Enhancements
💳 Payment Gateway Integration
📱 Mobile App Version
🌟 User Reviews & Ratings
🔔 Push Notifications
🌐 Social Media Property Sharing

📧 **Email:** [kavyapandian15@gmail.com](mailto:kavyapandian15@gmail.com)  
🔗 **LinkedIn:** [www.linkedin.com/in/kavyapandian](https://www.linkedin.com/in/kavyapandian)  
💻 **GitHub:** [github.com/KavyaPandian](https://github.com/KavyaPandian)

🪪 License

This project is licensed under the MIT License
.

⭐ If you like this project, give it a star on GitHub! ⭐


---

### ✅ What to Do Next:
1. Copy the full text above into a file named **`README.md`** in your project root.
2. Replace:
   - `yourusername` → your actual GitHub username  
   - `your_mongodb_connection_string` → your MongoDB URI  
   - `your-email@example.com` → your email  
3. Save the file.
4. Run:
   ```bash
   git add README.md
   git commit -m "Added README documentation"
   git push
