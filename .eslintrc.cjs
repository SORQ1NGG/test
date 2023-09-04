module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        "@nuxt/eslint-config",
        "plugin:nuxt/recommended",
    ],
    plugins: [
        "nuxt"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false
    },
    rules: {
        "vue/no-multiple-template-root": "off",
        indent: [
            "error",
            4
        ],
        quotes: [
            "error",
            "single"
        ],
        semi: ['error', 'never']
    }
}
