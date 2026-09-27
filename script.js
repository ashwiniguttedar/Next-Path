function generateRoadmap() {

    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;
    const career = document.getElementById("career").value;

    if (name === "" || skill === "" || career === "") {
        alert("Please complete all fields.");
        return;
    }

    let careerName = "";
    let roadmap = [];

    if (career === "software") {

        careerName = "Software Engineer";

        roadmap = [
            "Java / Python Fundamentals",
            "Data Structures & Algorithms",
            "OOP + DBMS + OS + Computer Networks",
            "Build 3-5 Real World Projects",
            "Git & GitHub",
            "Technical Interview Preparation"
        ];

    } else if (career === "data") {

        careerName = "Data Scientist";

        roadmap = [
            "Python",
            "NumPy & Pandas",
            "Statistics",
            "Data Visualization",
            "Machine Learning",
            "Real World Data Projects"
        ];

    } else if (career === "ml") {

        careerName = "Machine Learning Engineer";

        roadmap = [
            "Python",
            "Mathematics & Statistics",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision / NLP",
            "Deploy ML Projects"
        ];

    } else if (career === "web") {

        careerName = "Full Stack Developer";

        roadmap = [
            "HTML & CSS",
            "JavaScript",
            "Frontend Framework",
            "Backend Development",
            "Databases",
            "Full Stack Projects"
        ];
    }

    let list = "";

    roadmap.forEach(function(item) {
        list += `<li>✅ ${item}</li>`;
    });

    document.getElementById("welcomeText").innerHTML =
        `Welcome, <strong>${name}</strong>! Based on your assessment, here is your starting roadmap.`;

    document.getElementById("careerResult").innerHTML = `
        <div class="result-card">
            <h3>🎯 Recommended Career Path: ${careerName}</h3>

            <p><strong>Your current skill:</strong> ${skill}</p>

            <br>

            <h4>Your Roadmap:</h4>

            <ul>
                ${list}
            </ul>
        </div>
    `;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}