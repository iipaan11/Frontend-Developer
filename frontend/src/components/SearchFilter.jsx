function SearchFilter({ search, setSearch, searchAge, setSearchAge, filterGender, setFilterGender }) {
    return (
      <div className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="ค้นหาชื่อ-นามสกุล"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          placeholder="ค้นหาอายุ"
          value={searchAge}
          onChange={(e) => setSearchAge(e.target.value)}
        />
        <select className="form-control" value={filterGender} onChange={(e) => setFilterGender(e.target.value)}>
          <option value="">ทุกเพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="ไม่ระบุ">ไม่ระบุ</option>
        </select>
      </div>
    );
  }
  
  export default SearchFilter;
  