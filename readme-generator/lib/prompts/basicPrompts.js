module.exports = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
    default: "My Project",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
    default: "A brief description of my project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install the project?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use the project?",
    default: "npm start",
  },
  {
    type: "input",
    name: "license",
    message: "Which license do you want to use?",
    default: "MIT",
  },
];
