// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// const container = document.getElementById("projectList");
// const email = localStorage.getItem("clientEmail");

// async function loadProjects() {

//   const querySnapshot = await getDocs(collection(window.db, "projects"));

//   container.innerHTML = "";

//   querySnapshot.forEach((doc) => {
//     const project = doc.data();

//     if (project.email.toLowerCase() === email.toLowerCase()) {

//       const div = document.createElement("div");

//       div.className = "bg-white/5 p-6 rounded-xl";

//       div.innerHTML = `
//         <h3 class="text-xl font-bold">${project.name}</h3>
//         <p class="text-gray-400">${project.description}</p>
//         <span class="text-yellow-500">${project.status}</span>
//       `;

//       container.appendChild(div);
//     }
//   });
// }

// loadProjects();






const container = document.getElementById("projectList");

const email = localStorage.getItem("clientEmail");
const projects = JSON.parse(localStorage.getItem("projects")) || [];

const userProjects = projects.filter(p => p.email === email);

let total = userProjects.length;
let ongoing = 0;
let completed = 0;

container.innerHTML = "";

if (userProjects.length === 0) {
  container.innerHTML = "<p>No projects assigned.</p>";
}

userProjects.forEach((project, index) => {

  // Status logic
  let statusColor = "bg-gray-600";

  if (project.status.toLowerCase() === "ongoing") {
    statusColor = "bg-yellow-500 text-black";
    ongoing++;
  } else if (project.status.toLowerCase() === "done") {
    statusColor = "bg-green-600";
    completed++;
  }

  const div = document.createElement("div");

  div.className = `
    bg-white/5 backdrop-blur-lg p-6 rounded-xl 
    hover:-translate-y-2 hover:shadow-2xl transition duration-300
  `;

  div.setAttribute("data-aos", "fade-up");

  div.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${project.name}</h3>

    <p class="text-gray-400 mb-4">${project.description}</p>

    <span class="${statusColor} px-3 py-1 rounded-full text-sm">
      ${project.status}
    </span>
  `;

  container.appendChild(div);
});

// Stats update
document.getElementById("totalProjects").innerText = total;
document.getElementById("ongoingProjects").innerText = ongoing;
document.getElementById("completedProjects").innerText = completed;

// Logout
function logout() {
  localStorage.removeItem("clientEmail");
  window.location.href = "index.html";
}