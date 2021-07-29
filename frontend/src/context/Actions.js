export const LoginStart = (userCredentails) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure =()=>({
    type: "LOGIN_FAILURE"
})

export const Logout =()=>({
    type: "LOGOUT"
})



//works with setting jsx.. for profilePic update ----then Reducer file
export const updateStart = (userCredentails) => ({
    type: "UPDATE_START",
});

export const updateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});

export const updateFailure =()=>({
    type: "UPDATE_FAILURE"
})