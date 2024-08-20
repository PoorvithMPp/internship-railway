document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (email === "intern" && password === "intern") {
      window.location.href = "files/main.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  var script = document.createElement('script');
  script.src = 'path/to/your/script.js';
  document.head.appendChild(script);