import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import DynamicThemeLoader from '@ox2/theming/DynamicThemeLoader';
import { default as theme } from '@tapfuse/theme-spark';
import '@ox2/css-font-roboto-condensed';
import '@ox2/css-font-roboto';
import '@ox2/button-css';
import '@ox2/ycss';
import '@ox2/storybook-css-layout';
import injectTapEventPlugin from 'react-tap-event-plugin';

const req = require.context('../src/', true, /.story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// Custom storybook options
setOptions({
  name: 'login-ui',
});

// Material UI
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

DynamicThemeLoader({ theme });

configure(loadStories, module);
