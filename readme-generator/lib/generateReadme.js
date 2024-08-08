module.exports = (answers) => {
  return `
# ${answers.projectName}

## Description
${answers.description}

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
\`\`\`
${answers.usage}
\`\`\`

## License
This project is licensed under the ${answers.license} License.
    `;
};
