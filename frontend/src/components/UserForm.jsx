function UserForm({ user, setUser, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-white">
        <div className="mb-3">
          <label>ชื่อ</label>
          <input
            className="form-control custom-input"
            value={user.firstname || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, firstname: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label>นามสกุล</label>
          <input
            className="form-control custom-input"
            value={user.lastname || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, lastname: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label>อายุ</label>
          <input
            className="form-control custom-input"
            type="number"
            value={user.age || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, age: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label>เพศ</label>
          <select
            className="form-control custom-input"
            value={user.gender || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, gender: e.target.value }))}
            required
          >
            <option value="">เลือกเพศ</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            <option value="ไม่ระบุ">ไม่ระบุ</option>
          </select>
        </div>
        <div className="mb-3">
          <label>ความสนใจ</label>
          <input
            className="form-control custom-input"
            value={user.interests || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, interests: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label>คำอธิบาย</label>
          <textarea
            className="form-control custom-input"
            value={user.description || ""}
            onChange={(e) => setUser((prev) => ({ ...prev, description: e.target.value }))}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success btn-block rounded-pill shadow">บันทึก</button>
      </form>
    );
  }
  
  export default UserForm;
  