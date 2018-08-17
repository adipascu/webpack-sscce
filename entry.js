export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const TEST_DATA = IS_PRODUCTION ? 'SOME_STRING' : 'SHOULD_NOT_BE_IN_BUNDLE';
console.log(TEST_DATA);