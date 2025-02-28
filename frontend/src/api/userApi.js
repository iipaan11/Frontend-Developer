const API_URL = "http://localhost:8000/users"; 

export async function getUsers() {
  try {
    console.log("📡 กำลังดึงข้อมูลผู้ใช้...");
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`โหลดข้อมูลไม่สำเร็จ (Status: ${res.status})`);
    }

    const data = await res.json();
    console.log("✅ ได้ข้อมูลผู้ใช้:", data);
    return data;
  } catch (error) {
    console.error("❌ getUsers Error:", error);
    throw error;
  }
}

export async function getUserById(id) {
  try {
    console.log(`📡 กำลังดึงข้อมูลผู้ใช้ ID: ${id}`);
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
      throw new Error(`ไม่พบข้อมูลผู้ใช้ (ID: ${id})`);
    }

    const data = await res.json();
    console.log(`✅ ได้ข้อมูลผู้ใช้ ID: ${id}`, data);
    return data;
  } catch (error) {
    console.error(`❌ getUserById (${id}) Error:`, error);
    throw error;
  }
}

export async function addUser(userData) {
  try {
    const userToSend = { ...userData, age: parseInt(userData.age, 10) };

    console.log("📤 กำลังส่งข้อมูลผู้ใช้ไปยัง API:", userToSend);
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToSend),
    });

    console.log("📩 API Response Status:", res.status);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `เพิ่มข้อมูลไม่สำเร็จ (Status: ${res.status})`);
    }

    const data = await res.json();
    console.log("✅ เพิ่มผู้ใช้สำเร็จ:", data);
    return data;
  } catch (error) {
    console.error("❌ addUser Error:", error);
    throw error;
  }
}

export async function updateUser(id, userData) {
  try {
    const userToSend = { ...userData, age: parseInt(userData.age, 10) };

    console.log(`📤 กำลังอัปเดตข้อมูลผู้ใช้ ID: ${id}`, userToSend);
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToSend),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || `อัปเดตข้อมูลไม่สำเร็จ (ID: ${id}, Status: ${res.status})`);
    }

    const data = await res.json();
    console.log(`✅ อัปเดตข้อมูลผู้ใช้ ID: ${id} สำเร็จ`, data);
    return data;
  } catch (error) {
    console.error(`❌ updateUser (${id}) Error:`, error);
    throw error;
  }
}

export async function deleteUser(id) {

  try {
    console.log(`🗑️ กำลังลบข้อมูลผู้ใช้ ID: ${id}`);
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!res.ok) {
      throw new Error(`ลบข้อมูลไม่สำเร็จ (ID: ${id}, Status: ${res.status})`);
    }

    console.log(`✅ ลบข้อมูลผู้ใช้ ID: ${id} สำเร็จ`);
    return await res.json();
  } catch (error) {
    console.error(`❌ deleteUser (${id}) Error:`, error);
    throw error;
  }
}
