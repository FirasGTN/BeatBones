import React from "react";
import "../styles/AccountSetting.css";

function AccountSetting() {
  return (
    <main className="NewPass-container">
      <div className="NewPass-item">
          <h3>Username :</h3>
          <input
            type="text"
            //   onChange={(e) => setUserReg({ ...userReg, username: e.target.value })}
          />
          <h3>Email Address :</h3>
          <input
            type="text"
            //   onChange={(e) => setUserReg({ ...userReg, email: e.target.value })}
          />
          <h3>Password :</h3>
          <input
            type="text"
            //   onChange={(e) => setUserReg({ ...userReg, password: e.target.value })}
          />
      </div>
    </main>
  );
}

export default AccountSetting;
