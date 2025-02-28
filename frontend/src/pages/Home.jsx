import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../api/userApi";
import UserTable from "../components/UserTable";
import SearchFilter from "../components/SearchFilter";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchAge, setSearchAge] = useState(""); 
  const [filterGender, setFilterGender] = useState("");


  useEffect(() => {
    fetchUsers();
  }, []);

 
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("❌ โหลดข้อมูลผู้ใช้ไม่สำเร็จ:", error);
    }
  };


  const handleDelete = async (id) => {
    if (window.confirm("แน่ใจหรือไม่ที่จะลบผู้ใช้นี้?")) {
      try {
        await deleteUser(id);
        fetchUsers(); 
      } catch (error) {
        console.error("❌ ลบผู้ใช้ไม่สำเร็จ:", error);
      }
    }
  };

  const filteredUsers = users.filter((user) =>
    (user.firstname?.toLowerCase().includes(search.toLowerCase()) || 
     user.lastname?.toLowerCase().includes(search.toLowerCase())) &&
    (searchAge === "" || user.age.toString().includes(searchAge)) && 
    (filterGender === "" || user.gender === filterGender)
  );

  return (
    <div className="container">
      <h2>รายการผู้ใช้</h2>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        searchAge={searchAge}
        setSearchAge={setSearchAge}
        filterGender={filterGender}
        setFilterGender={setFilterGender}
      />
      <UserTable users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
