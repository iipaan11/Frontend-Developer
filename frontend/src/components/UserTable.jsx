import { Link } from "react-router-dom";

function UserTable({ users, onDelete }) {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-primary">
        <tr>
          <th>ชื่อ-นามสกุล</th>
          <th>อายุ</th>
          <th>เพศ</th>
          <th>จัดการ</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center text-muted">ไม่มีข้อมูลผู้ใช้</td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/user/${user.id}`} className="text-decoration-none text-dark">
                  {user.firstname} {user.lastname}
                </Link>
              </td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <Link to={`/user/edit/${user.id}`} className="btn btn-warning btn-sm">แก้ไข</Link>
                <button 
                  onClick={() => onDelete(user.id)} 
                  className="btn btn-danger btn-sm ms-2"
                  data-bs-toggle="tooltip" 
                  data-bs-placement="top" 
                  title="ลบผู้ใช้"
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default UserTable;
