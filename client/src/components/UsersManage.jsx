import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAccount } from "../redux/action";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

function UsersManage() {
  let [userBan, setUserban] = useState();
  let [users, setUsers] = useState();
  let [role] = useState(localStorage.getItem("acc"));
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  useEffect(() => {
    if (role === "b") {
      dispatch(getAccount());
      if (data.userShow) {
        setUsers(data.userShow.data.data);
      }
    }
  }, [dispatch, role, data.userShow]);

  const banhandle = () => {
    axios
      .put("/banuser", {
        userBan,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="table-height">
        <table className="users-managment">
          <tr className="top-table-users">
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>BAN</th>
            <th>CHANGE ROLE</th>
          </tr>
          {users?.map((user) => (
            <tr key={user.id} className="users-managment-list">
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="ban"
                  onClick={() => {
                    setUserban(user._id);
                    setTimeout(() => {
                      banhandle();
                    }, 1000);
                  }}
                >
                  BAN
                </button>
              </td>
              <td>
                <button className="admin-bt-set submit">Set Admin</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default UsersManage;
