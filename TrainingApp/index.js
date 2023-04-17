/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {Welcome, Login, Register} from './screens';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);