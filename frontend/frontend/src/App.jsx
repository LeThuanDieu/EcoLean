import React, { useEffect, useState } from "react";
import api from "./api/axios";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllStudents = async () => {
    setLoading(true);
    try {
      // Gọi endpoint lấy toàn bộ
      const response = await api.get("/students");

      // Vì trả về List nên data chính là mảng sinh viên
      setStudents(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách:", error);
      alert("Không thể kết nối đến Server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllStudents();
  }, []); // Chỉ chạy 1 lần duy nhất khi load trang

  return (
    <div style={{ padding: "30px", fontFamily: "Segoe UI" }}>
      <h2 style={{ color: "#2c3e50" }}>DANH SÁCH TOÀN BỘ SINH VIÊN</h2>
      <button
        onClick={fetchAllStudents}
        style={{ marginBottom: "15px", padding: "8px 16px", cursor: "pointer" }}
      >
        Làm mới dữ liệu
      </button>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table
          border="1"
          width="100%"
          style={{ borderCollapse: "collapse", textAlign: "left" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#3498db", color: "white" }}>
              <th style={{ padding: "12px" }}>STT</th>
              <th style={{ padding: "12px" }}>MSV</th>
              <th style={{ padding: "12px" }}>Họ và Tên</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Lớp</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((s, index) => (
                <tr key={s.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{index + 1}</td>
                  <td style={{ padding: "10px" }}>{s.msv}</td>
                  <td style={{ padding: "10px" }}>{s.name}</td>
                  <td style={{ padding: "10px" }}>{s.email}</td>
                  <td style={{ padding: "10px" }}>
                    {s.className || "Chưa xếp lớp"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  Không có dữ liệu sinh viên nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <p style={{ marginTop: "10px" }}>
        Tổng số: <strong>{students.length}</strong> sinh viên.
      </p>
    </div>
  );
}

export default App;
