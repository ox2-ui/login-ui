import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'login-ui',
});


configure(loadStories, module);
