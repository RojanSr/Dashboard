const delToken = () => {
  localStorage.removeItem("AccessToken");
  window.location.reload();
};

export default delToken;
