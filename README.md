---

# E-Learning App - MEAN Stack Project

Welcome to the official repository of the **E-Learning Platform** built with **MongoDB, Express.js, Angular, Node.js**!

> Empowering learning through a modern, scalable, and beautiful web application.

---

## 🚀 Features

- **User Roles**: Instructor and Student
- **Authentication**: Secure login/signup with JWT
- **Course Management**:
  - Add, edit, delete courses (Instructor only)
  - Upload multiple course videos
  - Publish/unpublish courses
- **Course Sections**:
  - Video links
  - Title & Description
- **Assignments**:
  - Upload assignment instructions and file (Instructor)
  - Students can submit their assignments
  - Instructors can review submissions
- **Enrollment System**:
  - Students can enroll in available courses
- **Dashboard**:
  - My Courses, Submitted Assignments
  - Instructor Panel
- **Responsive UI** (Mobile + Desktop Friendly)

---

## 🛠️ Tech Stack

- **Frontend**: Angular 19 + Bootstrap
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas / Local MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Storage**: Cloud-based file hosting (for videos & assignments)

---

## 📁 Project Structure

/backend /controllers /models /routes /middleware server.js /frontend /src /app /components /services /models angular.json .env (NOT included in GitHub)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/e-learning-platform.git
cd e-learning-platform

2. Install Dependencies

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

3. Environment Variables

Create your own .env file inside /backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

(⚡ Important: .env file is NOT uploaded to GitHub for security reasons.)


---

4. Run the Project

# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
ng serve

By default:

Frontend will run on: http://localhost:4200

Backend will run on: http://localhost:5000



---

🎨 UI Screenshots

> (Add screenshots here later after hosting or capturing from localhost.)




---

✨ Future Scope

Online Video Streaming

Certificate generation after course completion

Payment gateway integration

Admin dashboard for platform management

Notifications and messaging



---

🙏 Credits

Developed by Saksham Srivastava
Follow me on LinkedIn
GitHub: yaxxhsri7444


---

📜 License

This project is licensed under the MIT License.


---

---

# **Notes:**
- Maine `.env` mention kar diya but bola ki GitHub me upload nahi kiya gaya (for security reason) — perfect hai.
- Tum chaaho to `"Screenshots"` wale section me apne local UI ke screen capture daal sakte ho (jab ready ho jaaye).
- **License** wala part optional hai, warna normal "MIT License" likh dena — vo GitHub suggest karta hai.
- Username & LinkedIn ka bhi proper credit diya hai.
---

# **Ready to upload!**

Agar chaaho to main **ek `LICENSE` file ka bhi content** de du MIT ke liye?  
Chaaho to **"badhiya commit message"** bhi suggest kar dunga!  
Batao?

