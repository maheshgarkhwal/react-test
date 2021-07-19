import React, { useState } from "react";

function Profile() {
  const [loggedin, setLoggedin] = useState(2);

  return (
    <div>
      {loggedin == 1 ? (
        <h1>welcome user1</h1>
      ) : loggedin == 2 ? (
        <h1>welcome user2</h1>
      ) : (
        <h1>welcome user3</h1>
      )}
    </div>
  );
}

export default Profile;
