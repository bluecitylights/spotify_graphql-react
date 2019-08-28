import * as R from 'ramda'

const bla = (prop, component) => R.pipe(R.path(['data', prop]), component)

const Loading = R.always("Loading...");
const Error = R.always("Error.");
const QueryResponseInternal = (component, prop, queryResult) => R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', prop]), component)]
]);

const QueryResponse = R.curry(QueryResponseInternal)

export {Loading, Error}