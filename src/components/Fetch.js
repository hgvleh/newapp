import React, { useEffect, useState } from "react";
import { db } from "../firebase";

function Fetch() {
  const [customers, setCustomers] = useState([]);

  React.useEffect(() => {
    db.collection("app")
      .doc("GrKLAVBbCjmYPK3B4Ucp")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc);

          setCustomers(querySnapshot.docs.map((doc) => doc.data()));
        });
      });
    console.log(app);
  }, []);

  return (
    <div className="fetch">
      <h2>I am A Fetch Component...</h2>
      {customers.map((cs, id) => (
        <li key={id}>
          Ochestra Version: {cs.pass} Installed: {cs.code} Build: {cs.build}
        </li>
      ))}
    </div>
  );
}

export default Fetch;
