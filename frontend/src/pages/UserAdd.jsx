import { useState } from "react";
import { addUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

function UserAdd() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    interests: "",  
    description: "",  
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🟢 ข้อมูลที่ส่งไป API:", user);

    if (!user.firstname || !user.lastname || !user.age || !user.gender || !user.interests || !user.description) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const ageValue = parseInt(user.age, 10);
    if (isNaN(ageValue) || ageValue <= 0) {
      alert("กรุณากรอกอายุให้ถูกต้อง");
      return;
    }

    try {
      const response = await addUser({ ...user, age: ageValue });

      console.log("✅ API Response:", response);

      navigate("/");
    } catch (error) {
      console.error("❌ เกิดข้อผิดพลาดในการเพิ่มข้อมูล:", error);
      alert(`เกิดข้อผิดพลาด: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2>เพิ่มผู้ใช้</h2>
      <UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
    </div>
  );
}

export default UserAdd;
