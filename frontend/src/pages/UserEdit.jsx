import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../api/userApi";
import UserForm from "../components/UserForm";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      navigate("/");
    } catch (error) {
      console.error("❌ เกิดข้อผิดพลาดในการแก้ไข:", error);
    }
  };

  if (!user) return <p>กำลังโหลดข้อมูล...</p>;

  return (
    <div className="container mt-4">
      <h2>แก้ไขข้อมูลผู้ใช้</h2>
      <UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} />
    </div>
  );
}

export default UserEdit;
