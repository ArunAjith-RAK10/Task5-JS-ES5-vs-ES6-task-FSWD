let resume = {
  "name": "Arun Kumar R",
  "contact": {
    "email": "arun72453@gmail.com & arunajithrak007mech@gmail.com",
    "phone": "8668142957",
    "github": "https://github.com/ArunAjith-RAK10"
  },
  "summary": "Aspiring Full-Stack Developer with a passion for building scalable web applications.",
  "skills": [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "MongoDB",
    "Git & GitHub"
  ],
  "experience": [
    {
      "role": "Web Developer Intern",
      "status": "Currently FSWD learner",
      "responsibilities": [
        "Developed responsive web applications using React.js",
        "Implemented RESTful APIs with Node.js and Express",
        "Worked with Git for version control and collaborated on GitHub"
      ]
    }
    ],
    "education": [
    { "course": "Full Stack Web Development",
      "institution": "Guvi",
      "year": "2023 - 2024"    
  },
    {
      "degree": "Bachelor's in Mechanical Engineering",
      "institution": "Er.Perumal Manimekalai Engineering college",
      "year": "2014 - 2018"
    }
    ],
    "projects": [
        {
            "name": "Project Name",
            "description": "A brief description of the project.",
            "technologies": ["React.js", "Node.js", "MongoDB"],
            "link": "https://github.com/ArunAjith-RAK10"
        }
    ]
}

// 1. Using a "for" loop (Iterating over skills)
console.log("Using for loop:");
for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
}

// 2. Using "for...in" (Iterating over object properties)
console.log("\nUsing for...in loop:");
for (let key in resume) {
    console.log(`${key}:`, resume[key]);
}

// 3. Using "for...of" (Iterating over an array like skills)
console.log("\nUsing for...of loop:");
for (let skill of resume.skills) {
    console.log(skill);
}

// 4. Using "forEach" (Iterating over projects array)
console.log("\nUsing forEach loop:");
resume.projects.forEach(project => {
    console.log(`Project Name: ${project.name}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technologies: ${project.technologies.join(", ")}`);
    console.log(`GitHub Link: ${project.link}\n`);
});