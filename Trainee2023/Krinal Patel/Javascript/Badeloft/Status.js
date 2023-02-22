window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Badeloft.html");
    }
    
  };