module.exports = {
  root: true,
  "env": {
    "browser": false,
    "es2021": true
  },
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "airbnb-base",
    "plugin:sonarjs/recommended",
    "plugin:jsdoc/recommended-typescript"
  ],
  "globals": {
    "vi": true,
    "jest": true
  },
  "overrides": [
    {
      "globals": {
        "vi": true,
        "jest": true
      },
      "files": [
        "**/*.spec.ts",
        "**/*.mock.ts"
      ],
      "env": {
        "jest": true
      },
      "rules": {
        "import/first": "off",
        "max-lines-per-function": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/dot-notation": "off",
        "sonarjs/no-duplicate-string": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "promise/catch-or-return": "warn",
        "@typescript-eslint/no-floating-promises": "warn"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": [
      "./tsconfig.json"
    ]
  },
  "plugins": [
    "@typescript-eslint",
    "sonarjs",
    "prettier",
    "jsdoc",
    "promise"
  ],
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "import/no-cycle": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "promise/catch-or-return": [
      "error",
      {
        "allowThen": false
      }
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "warn",
    "no-unreachable-loop": "warn",
    "no-unused-private-class-members": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "camelcase": "off",
    "dot-notation": "off",
    "func-style": [
      "error",
      "declaration"
    ],
    "max-depth": [
      "warn",
      4
    ],
    "max-lines": [
      "warn",
      {
        "max": 500,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      "warn",
      {
        "max": 40,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "no-confusing-arrow": "warn",
    "no-console": "off",
    "no-else-return": [
      "error",
      {
        "allowElseIf": true
      }
    ],
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-magic-numbers": [
      "warn",
      {
        "ignore": [
          0,
          1
        ]
      }
    ],
    "no-new": "warn",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-unused-expressions": "error",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-call": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-with": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "warn",
    "prefer-template": "error",
    "require-await": "error",
    "spaced-comment": "error",
    "yoda": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "no-extra-parens": "off",
    "no-whitespace-before-property": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": "off",
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": "off",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "parameter",
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": [
          "private"
        ],
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "format": [
          "camelCase",
          "snake_case"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "typeLike",
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "variable",
        "modifiers": [
          "destructured"
        ],
        "format": null
      },
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      },
      {
        "selector": [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember"
        ],
        "format": null,
        "modifiers": [
          "requiresQuotes"
        ]
      }
    ],
    "no-underscore-dangle": "off",
    "max-len": [
      "error",
      {
        "code": 120,
        "ignorePattern": "(^import .*$|^export .*$)",
        "ignoreStrings": true,
        "ignoreComments": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "operator-linebreak": "off",
    "indent": "off",
    "@typescript-eslint/indent": "off",
    "no-empty-function": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "import/no-unresolved": "off",
    "import/order": "off",
    "class-methods-use-this": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "off",
    "jsdoc/require-jsdoc": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/comma-dangle": "off",
    "comma-dangle": "off",
    "no-prototype-builtins": "off",
    "quotes": "off",
    "@typescript-eslint/quotes": "off",
    "import/extensions": "off",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/dot-notation": "off"
  }
}