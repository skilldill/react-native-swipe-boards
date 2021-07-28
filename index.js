/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ScrollBoards, Board} from "./core/ScrollBoards";

AppRegistry.registerComponent(appName, () => App);

export {ScrollBoards, Board};