const syllabus = {
    "Java": [
        "Java Basics",
        "Variables and Data Types",
        "Operators",
        "Input and Output",
        "Conditional Statements",
        "Loops",
        "Patterns",
        "Methods",
        "Recursion",
        "Arrays",
        "2D Arrays",
        "Strings",
        "StringBuilder",
        "OOP",
        "Classes and Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Interfaces",
        "Encapsulation",
        "Exception Handling",
        "File Handling",
        "Collections",
        "ArrayList",
        "LinkedList",
        "HashSet",
        "HashMap",
        "Stack",
        "Queue",
        "Generics",
        "Lambda Expressions",
        "Stream API",
        "Multithreading",
        "JDBC",
        "DSA with Java",
        "Projects",
        "Interview Preparation"
    ],

    "Python": [
        "Python Basics",
        "Variables and Data Types",
        "Operators",
        "Input and Output",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Recursion",
        "Lists",
        "Tuples",
        "Sets",
        "Dictionaries",
        "Strings",
        "List Comprehension",
        "Modules and Packages",
        "Exception Handling",
        "File Handling",
        "OOP",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "APIs",
        "Database Connectivity",
        "Projects",
        "Interview Preparation"
    ],

    "C++": [
        "C++ Basics",
        "Variables and Data Types",
        "Operators",
        "Input and Output",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Arrays",
        "Strings",
        "Pointers",
        "References",
        "Structures",
        "Classes and Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "STL",
        "Vector",
        "Stack",
        "Queue",
        "Set",
        "Map",
        "Priority Queue",
        "Templates",
        "Exception Handling",
        "DSA with C++",
        "Projects",
        "Interview Preparation"
    ],

    "HTML": [
        "HTML Basics",
        "HTML Structure",
        "Headings and Paragraphs",
        "Links",
        "Images",
        "Lists",
        "Tables",
        "Forms",
        "Input Elements",
        "Buttons",
        "Semantic HTML",
        "HTML5",
        "Accessibility",
        "SEO Basics",
        "Projects"
    ],

    "CSS": [
        "CSS Basics",
        "Selectors",
        "Colors",
        "Fonts",
        "Box Model",
        "Margin and Padding",
        "Borders",
        "Display",
        "Position",
        "Flexbox",
        "Grid",
        "Responsive Design",
        "Media Queries",
        "Animations",
        "Transitions",
        "Projects"
    ],

    "JavaScript": [
        "JavaScript Basics",
        "Variables",
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Arrays",
        "Objects",
        "Strings",
        "DOM",
        "Events",
        "Event Listeners",
        "Forms",
        "Local Storage",
        "JSON",
        "ES6",
        "Arrow Functions",
        "Promises",
        "Async and Await",
        "Fetch API",
        "APIs",
        "Projects"
    ],

    "SQL": [
        "Database Basics",
        "DBMS and RDBMS",
        "SQL Basics",
        "CREATE",
        "INSERT",
        "SELECT",
        "UPDATE",
        "DELETE",
        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "HAVING",
        "Aggregate Functions",
        "Joins",
        "Subqueries",
        "Constraints",
        "Primary Key",
        "Foreign Key",
        "Normalization",
        "Indexes",
        "Transactions",
        "SQL Projects",
        "Interview Questions"
    ],

    "DSA": [
        "Time Complexity",
        "Space Complexity",
        "Arrays",
        "Strings",
        "Searching",
        "Binary Search",
        "Sorting",
        "Two Pointer",
        "Sliding Window",
        "Hashing",
        "Prefix Sum",
        "Recursion",
        "Backtracking",
        "Linked List",
        "Stack",
        "Queue",
        "Binary Tree",
        "Binary Search Tree",
        "Heap",
        "Priority Queue",
        "Graphs",
        "BFS",
        "DFS",
        "Greedy Algorithms",
        "Dynamic Programming",
        "Bit Manipulation",
        "Coding Interview Practice"
    ],

    "Machine Learning": [
        "Python for Machine Learning",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Statistics",
        "Probability",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Feature Engineering",
        "Linear Regression",
        "Logistic Regression",
        "KNN",
        "Decision Trees",
        "Random Forest",
        "SVM",
        "Naive Bayes",
        "K-Means",
        "PCA",
        "Model Evaluation",
        "Cross Validation",
        "Hyperparameter Tuning",
        "Machine Learning Projects",
        "Deployment"
    ],

    "Deep Learning": [
        "Python",
        "Mathematics",
        "Statistics",
        "Neural Networks",
        "Perceptron",
        "Activation Functions",
        "Forward Propagation",
        "Backpropagation",
        "Loss Functions",
        "Optimizers",
        "CNN",
        "RNN",
        "LSTM",
        "GRU",
        "Transfer Learning",
        "Computer Vision",
        "NLP",
        "TensorFlow",
        "PyTorch",
        "Model Training",
        "Model Evaluation",
        "Projects",
        "Deployment"
    ],

    "Git & GitHub": [
        "Git Basics",
        "git init",
        "git add",
        "git commit",
        "git status",
        "git log",
        "Branches",
        "Merge",
        "Merge Conflicts",
        "Remote Repository",
        "git push",
        "git pull",
        "git clone",
        "GitHub Repository",
        "README",
        "Issues",
        "Pull Requests",
        "Fork",
        "Open Source Contribution",
        "GitHub Projects"
    ]
};


function generateRoadmap() {

    const name = document.getElementById("name").value.trim();
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
            "Java",
            "Python",
            "C++",
            "DSA",
            "SQL",
            "Git & GitHub"
        ];

    } else if (career === "data") {

        careerName = "Data Scientist";

        roadmap = [
            "Python",
            "SQL",
            "Machine Learning"
        ];

    } else if (career === "ml") {

        careerName = "Machine Learning Engineer";

        roadmap = [
            "Python",
            "SQL",
            "Machine Learning",
            "Deep Learning"
        ];

    } else if (career === "web") {

        careerName = "Full Stack Developer";

        roadmap = [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Git & GitHub"
        ];
    }


    const result = document.getElementById("careerResult");

    result.innerHTML = `
        <div class="generated-roadmap">

            <h2>🚀 ${name}'s Roadmap</h2>

            <h3>${careerName}</h3>

            <p>Click a technology to view its complete syllabus.</p>

            <div class="roadmap-list">

                ${roadmap.map((topic, index) => `
                    
                    <div class="roadmap-item">

                        <span>
                            ${index + 1}. ${topic}
                        </span>

                        <button onclick="showSyllabus('${topic}')">
                            View Syllabus →
                        </button>

                    </div>

                `).join("")}

            </div>

            <div id="syllabusResult"></div>

        </div>
    `;

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}


function showSyllabus(topic) {

    const topics = syllabus[topic];

    const result = document.getElementById("syllabusResult");

    if (!topics) {

        result.innerHTML = `
            <div class="syllabus-card">
                <h2>${topic}</h2>
                <p>Syllabus will be added soon.</p>
            </div>
        `;

        return;
    }


    result.innerHTML = `

        <div class="syllabus-card">

            <h2>📚 ${topic} Complete Syllabus</h2>

            <p>Complete learning path for ${topic}</p>

            <div class="syllabus-list">

                ${topics.map((item, index) => `

                    <div class="syllabus-item">

                        <input
                            type="checkbox"
                            id="topic-${index}"
                        >

                        <label for="topic-${index}">
                            ${index + 1}. ${item}
                        </label>

                    </div>

                `).join("")}

            </div>

        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth"
    });
}