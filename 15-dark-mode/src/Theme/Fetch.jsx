import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  // Fetch API

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((Res) => setData(Res));
  }, []);

  return (
    <div>
      {" "}
      {data.map((data, id) => {
        return (
          <div key={id}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Fetch;
