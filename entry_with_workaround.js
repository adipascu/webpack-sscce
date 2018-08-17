const isProd = process.env.NODE_ENV === 'production';
export const IS_PRODUCTION = isProd;
const TEST_DATA = isProd ? 'SOME_STRING' : 'SHOULD_NOT_BE_IN_BUNDLE';
console.log(TEST_DATA);
