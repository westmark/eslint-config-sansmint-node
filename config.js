const path = require( 'path' );

module.exports = function ( nodeModules ) {
  return {
    extends: 'airbnb-base',
    settings: {
      ecmascript: 5,
      'import/external-module-folders': nodeModules,
      'import/resolver': {
        node: {
          paths: nodeModules,
        },
      },
    },
    env: {
      browser: false,
      node: true,
    },
    rules: {
      'array-bracket-spacing': [
        2,
        'always',
      ],
      'arrow-body-style': [
        1,
      ],
      'arrow-parens': [
        2,
        'always',
      ],
      'comma-dangle': [
        2,
        'always-multiline',
        { functions: 'never' },
      ],
      'computed-property-spacing': [
        2,
        'always',
      ],
      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': 0,
      'max-len': 0,
      'no-debugger': 1,
      'no-unused-vars': 1,
      'prefer-const': [ 2, {
          'ignoreReadBeforeAssign': true,
	       },
      ],
      'space-before-blocks': [
        1,
        'always',
      ],
      'space-in-parens': [
        1,
        'always',
      ],
      'spaced-comment': [
        1,
      ],
      'template-curly-spacing': [
        1,
        'always',
      ],
    },
  };
};
