module.exports = { extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', "plugin:react/recommended", "plugin:react/jsx-runtime"],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
		tsconfigRootDir: './tsconfig.json',
	},
	rules: {
		"no-mixed-spaces-and-tabs": 0,
		"arrow-body-style": ["error", "as-needed"],
		}
};