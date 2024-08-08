#!/usr/bin/env node

const inquirer = require("inquirer");
const generateReadme = require("../lib/generateReadme");
const prompts = require("../lib/prompts");
const fs = require("fs");
const path = require("path");

(async () => {
  console.log("Welcome to the README Generator!");

  // Get user input
  const answers = await inquirer.prompt(prompts);

  // Generate README content
  const readmeContent = generateReadme(answers);

  // Output file path
  const outputPath = path.join(process.cwd(), "README.md");

  // Write generated content to README.md
  fs.writeFileSync(outputPath, readmeContent, "utf8");

  console.log(`README.md has been successfully generated at ${outputPath}`);
})();
