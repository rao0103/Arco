module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignoredNames: [
          "index", // 在这里添加需要忽略的单词命名
        ],
      },
    ],
  },
  globals: {
    defineOptions: true,
    defineProps: true,
    defineEmits: true,
    withDefaults: true,
  },
};
