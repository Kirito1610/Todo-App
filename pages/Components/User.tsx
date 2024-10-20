import React, { useEffect, useState } from "react";

function User() {
  const date = new Date();
  const Today = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  const [greeting, setGreeting] = useState("");

  const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };

  useEffect(() => {
    updateGreeting();
  }, []);

  return (
    <>
      <div>
        <h1 className=" text-2xl">{greeting}, User 👋</h1>
        <p className=" opacity-70">Today, {Today}</p>
      </div>
    </>
  );
}

export default User;
