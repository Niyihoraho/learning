import React from "react";

const Index = () => {
  const userInfo = [
    {
      name: "heroic",
      location: "bugarama",
    },
    {
      name: "Niyihoraho",
      location: "bugarama",
    },
    {
      name: "Kwitonda",
      location: "bugarama",
    },
  ];
  return (
    <div>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.name}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </div>
  );
};

export default Index;
