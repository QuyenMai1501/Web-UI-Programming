import { useState } from "react";

let k24dw03Student = [
  { id: 0, name: "Mai Xuân Gia Quyến" },
  { id: 1, name: "Dr.Tiên" },
  { id: 2, name: "Hòa" },
];

export const List = () => {
  const [student, setStudent] = useState(k24dw03Student);

  return (
    <div>
      <h1>List Item</h1>
      <ul>
        {student.map((s) => (
          <li key={s.id}>
            {s.name}
            <button
              onClick={() => setStudent(student.filter((e) => e.id !== s.id))}>
              Xóa Bỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
