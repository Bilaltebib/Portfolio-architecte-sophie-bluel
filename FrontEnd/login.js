document.querySelector("input[type=submit]").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Submit button clicked");

  login();
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log("Email:", email);
  console.log("Password:", password);

  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("L’authentification a échoué.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Login successful. Response data:", data);
      localStorage.setItem("token", data.token);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      alert("Identifiant ou mot de passe incorrect");
    });
}
