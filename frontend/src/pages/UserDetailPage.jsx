import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userApi";
import UserDetail from "../components/UserDetail";

function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <p>กำลังโหลดข้อมูล...</p>;

  return (
    <div className="container mt-4">
      <h2>รายละเอียดผู้ใช้</h2>
      <UserDetail user={user} />
    </div>
  );
}

export default UserDetailPage;
