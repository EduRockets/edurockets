module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": 
    [   "eslint:recommended",
        "prettier",
        "airbnb-base"
      ],
    "plugins": [
        "prettier"
      ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "prettier/prettier": "error"
    }
};
