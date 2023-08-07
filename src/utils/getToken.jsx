const getToken = () => {
  let accessToken = localStorage.getItem("AccessToken");
  return accessToken;
};

export default getToken;
