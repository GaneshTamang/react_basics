/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './screens/App';
import MyApp from './screens/main_app';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyApp);
