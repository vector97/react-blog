export default {
    "extends": [
        "stylelint-config-standard-scss",
        "stylelint-config-hudochenkov/full"
    ],
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        "selector-class-pattern": null
    },
    ignoreFiles: ["./src/app/styles/normalize.scss"],
}
