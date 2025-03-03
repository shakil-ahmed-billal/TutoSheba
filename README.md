# 🎓 TutorSheba

TutorSheba is an advanced web-based platform designed to seamlessly connect students and tutors. Built with a modern tech stack including **Next.js**, **React**, and **Express.js**, it ensures a dynamic, responsive, and secure user experience.

---

## 🌍 Live Demo
🔗 [ZapCash Live App](https://tutor-sheba.vercel.app)


## 🚀 Features

✅ **User Authentication:** Secure login with **JWT-based authentication**  
✅ **Secure Password Handling:** Encrypted with **bcrypt**  
✅ **Efficient API Management:** RESTful APIs for **user & data handling**  
✅ **Modern UI/UX:** Styled with **TailwindCSS & Radix UI**  
✅ **State Management:** Powered by **React Query** for efficient data fetching  
✅ **Database Management:** Uses **MongoDB with Mongoose** for smooth storage & retrieval  

---

## 🛠️ Tech Stack

### 🎨 Frontend:
- **Next.js** (15.2.0) - Fast & SEO-friendly React framework
- **React** (19.0.0) - UI library for building interfaces
- **TailwindCSS** (4) - Utility-first CSS framework
- **Shadcn UI** - Modular and accessible UI components
- **React Hook Form** - Form validation and state management
- **Lucide React** - Beautiful & customizable icons
- **React Fast Marquee** - Smooth scrolling animations

### 🔧 Backend:
- **Node.js** - JavaScript runtime for server-side operations
- **Express.js** - Fast and lightweight backend framework
- **MongoDB & Mongoose** - NoSQL database with an intuitive schema
- **JWT Authentication** - Secure token-based authentication
- **dotenv** - Environment variable management
- **Morgan** - HTTP request logger for debugging
- **CORS** - Cross-Origin Resource Sharing management

---

## 📌 Installation Guide

### ⚙️ Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version)
- **MongoDB** (Locally or cloud-based)

### 📂 Clone the Repository
```sh
git clone https://github.com/shakil-ahmed-billal/TutoSheba.git
cd tutorsheba
```

### 🔧 Install Dependencies
#### Frontend Setup
```sh
cd tutorsheba
pnpm install
```
#### Backend Setup
```sh
cd server
pnpm install
```

### 🔑 Configure Environment Variables
Create a `.env` file inside the `server` directory and add:
```env
MONGO_URI=mongodb+srv://
JWT_SECRET_KEY=fcc621e4d642b5c7d8ed3a3f274f67185cb568f7422163fdcfbaae435952b6ca9bb0e620e6923ada0fb80544cf971a395d4855306fdff2a647157437657111a6
JWT_EXPIRES_IN=30d
JWT_COOKIE_EXPIRES_IN=30
NEXT_PUBLIC_API_URL=https://tutorsheba-server-theta.vercel.app
```

---

## ▶️ Running the Project

### Start the Backend Server
```sh
cd server
pnpm run dev
```

### Start the Frontend Server
```sh
cd tutorsheba
pnpm run dev
```

---

## 🚀 Deployment Guide

### 🔹 Frontend Deployment (Vercel)
- Install Vercel CLI: `npm install -g vercel`
- Deploy: Run `vercel` and follow the setup prompts

### 🔹 Backend Deployment (Vercel/Heroku)
#### Deploy using Vercel
```sh
vercel
```
#### Deploy using 
```sh
vercel login
vercel --prod
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

🔥 **TutorSheba - Bridging the Gap Between Knowledge and Learners!**

