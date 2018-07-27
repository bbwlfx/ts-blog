import Demo from 'containers/demo';
import configureStore from 'models/configure';
import entry from 'decorators/entry';

entry(configureStore)(Demo);