const form = document.getElementById("projectForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const project = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    status: document.getElementById("status").value.trim(),
    description: document.getElementById("desc").value
  };

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.push(project);

  localStorage.setItem("projects", JSON.stringify(projects));

  alert("Project Added!");

  form.reset();
});