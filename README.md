# 🌿 EcoClean Connect

**EcoClean Connect** là một ứng dụng quản lý và kết nối các hoạt động dọn dẹp môi trường. Dự án sử dụng cấu trúc Monorepo để quản lý đồng thời cả Backend (Spring Boot) và Frontend (React).

---

## 🏗 Cấu trúc dự án
Dự án được chia thành hai phần chính:
- **/demo**: Backend API được xây dựng bằng Java Spring Boot.
- **/frontend/frontend**: Giao diện người dùng (Client-side) được xây dựng bằng React + Vite.

---

## 🛠 Công nghệ sử dụng

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Maven** (Quản lý thư viện và build)
- **MySQL** (Cơ sở dữ liệu)

### Frontend
- **React.js**
- **Vite** (Công cụ build cực nhanh)
- **Tailwind CSS** (Giao diện)
- **Axios** (Kết nối API)

---

## 🚀 Hướng dẫn cài đặt và khởi chạy

### 1. Yêu cầu hệ thống
- Đã cài đặt **Node.js** (v18 trở lên)
- Đã cài đặt **Java JDK** (v17 trở lên)
- Đã cài đặt **Maven** (Hoặc dùng Maven Wrapper đi kèm)

### 2. Cài đặt thư viện
Mở Terminal tại thư mục gốc và chạy lệnh:
```bash
# Cài đặt công cụ chạy đồng thời
npm install

# Cài đặt thư viện cho Frontend
cd frontend/frontend && npm install
