function UserDetail({ user }) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.firstname} {user.lastname}</h5>
          <p className="card-text">อายุ: {user.age}</p>
          <p className="card-text">เพศ: {user.gender}</p>
          <p className="card-text">ความสนใจ: {user.interests}</p>
          <p className="card-text">รายละเอียด: {user.description}</p>
        </div>
      </div>
    );
  }
  
  export default UserDetail;
  