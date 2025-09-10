const firebaseConfig = {
  apiKey: "AIzaSyBb7ThAx8mL064B78DWaEOc_gVEyrWwBnY",
  authDomain: "my2dgame-1855b.firebaseapp.com",
  projectId: "my2dgame-1855b",
  storageBucket: "my2dgame-1855b.firebasestorage.app",
  messagingSenderId: "443864721106",
  appId: "1:443864721106:web:b1cdca162df9ced6346f0b",
  measurementId: "G-VVG0H14LPP"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function checkAuth(required = false) {
  auth.onAuthStateChanged(function (user) {
    const protectedContent = document.getElementById("protectedContent");
    if (user) {
      if (protectedContent) {
        protectedContent.style.display = "block";
      }
    } else if (required) {
      alert("You must be logged in to view this page.");
      window.location.href = "login.html";
    } else {
      if (protectedContent) {
        protectedContent.style.display = "none";
      }
    }
  });
}


if (window.location.pathname.endsWith("dashboard.html")) {
  checkAuth(true);
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Login successful");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      alert("Logged out successfully");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
}