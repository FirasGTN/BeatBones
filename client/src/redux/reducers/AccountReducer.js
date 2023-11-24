const prevstate = null;

const AccountReducer = (state = prevstate, action) => {
  if (action.type === "GET_ACC") {
    // console.log(action.type);
    return (state = action.payload);
  }
  return state;
};

export default AccountReducer;
