// Dynamic Skills List
const skills = ["HTML", "CSS", "JavaScript", "Java", "Graphic Design"];
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Dynamic Projects List
const projects = ["Portfolio Website", "Market Basket Analysis"];
const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
    let li = document.createElement("li");
    li.textContent = project;
    projectsList.appendChild(li);
});

// Resume Link 
const resumeLink = "https://your-resume-link.com"; 
document.getElementById("resume-link").setAttribute("href", resumeLink);

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
