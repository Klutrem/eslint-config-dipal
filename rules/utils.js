const { ESLintUtils } = require("@typescript-eslint/utils");

export const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`,
);
