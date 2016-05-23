import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('LOGIN_ERROR');

  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  loginAdmin: actions.admin.login,
  clearErrors: actions.admin.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
