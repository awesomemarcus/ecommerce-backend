import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import UploadsImage from '../components/uploads_image.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  uploadImage: actions.uploads.Upload,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UploadsImage);
