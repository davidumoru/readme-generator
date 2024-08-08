module.exports = (templateContent, answers) => {
  return templateContent.replace(/{{(\w+)}}/g, (_, key) => answers[key] || "");
};
