document.addEventListener("DOMContentLoaded", () => {
    const experimentList = document.getElementById("experiment-list");

    const experiments = [
        { title: "Chemical Reaction Study", description: "Exploring the effects of catalysts." },
        { title: "Physics Experiment", description: "Analyzing the properties of light." },
        { title: "Biological Analysis", description: "Studying cell behavior under microscopes." }
    ];

    experiments.forEach((experiment) => {
        const experimentDiv = document.createElement("div");
        experimentDiv.className = "experiment";
        experimentDiv.innerHTML = `
            <h3>${experiment.title}</h3>
            <p>${experiment.description}</p>
        `;
        experimentList.appendChild(experimentDiv);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
        contactForm.reset();
    });
});