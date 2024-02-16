/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FoodList from './screen/Foodlist';
AppRegistry.registerComponent(appName, () => FoodList );
