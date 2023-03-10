module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   TODO Add Scope Enum Here
    'scope-enum': [2, 'always', ['nlc', 'npc', 'nst', 'reeva']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'BREAKING CHANGE',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'vercel',
        'static',
      ],
    ],
  },
};
