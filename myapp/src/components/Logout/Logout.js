const Logout = ({ deleteToken }) => {
   deleteToken();
   window.location.href = "/login";
}

export default Logout