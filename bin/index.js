#!/usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Template selection prompt
const templateChoices = [
  {
    type: "list",
    name: "template",
    message: "Choose a template for your README:",
    choices: ["Basic", "Advanced"],
  },
];

// Load template-specific prompts dynamically
async function loadPrompts(template) {
  switch (template) {
    case "Basic":
      return require("../lib/prompts/basicPrompts");
    case "Advanced":
      return require("../lib/prompts/advancedPrompts");
    default:
      throw new Error("Invalid template selected.");
  }
}

// Load template file dynamically
function loadTemplate(template) {
  switch (template) {
    case "Basic":
      return fs.readFileSync(
        path.join(__dirname, "../templates/basic.md"),
        "utf8"
      );
    case "Advanced":
      return fs.readFileSync(
        path.join(__dirname, "../templates/advanced.md"),
        "utf8"
      );
    default:
      throw new Error("Invalid template selected.");
  }
}

(async () => {
  console.log("Welcome to the README Generator!");

  // Ask user to choose a template
  const { template } = await inquirer.prompt(templateChoices);

  // Load the appropriate prompts and template
  const prompts = await loadPrompts(template);
  const answers = await inquirer.prompt(prompts);
  const templateContent = loadTemplate(template);

  // Generate README content
  const readmeContent = require("../lib/generateReadme")(
    templateContent,
    answers
  );

  // Output file path
  const outputPath = path.join(process.cwd(), "README.md");

  // Write the generated content to README.md
  fs.writeFileSync(outputPath, readmeContent, "utf8");

  console.log(`README.md has been successfully generated at ${outputPath}`);
})();
