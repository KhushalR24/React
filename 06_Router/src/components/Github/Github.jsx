import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/KhushalR24")
          .then((response) => response.json())
          .then((data) => {
            setdata(data);
          });
    }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers : {data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        style={{ borderRadius: "50%"}}
      />
    </div>
  );
}

export default Github


