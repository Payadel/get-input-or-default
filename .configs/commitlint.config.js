// https://commitlint.js.org/#/
// https://commitlint.js.org/#/reference-rules
// https://blog.logrocket.com/commitlint-write-more-organized-code/

export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'test',
                'ci',
                'build',
                'chore',
                'deprecate',
                'security'
            ],
        ]
    },
};
