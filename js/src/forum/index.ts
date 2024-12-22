import app from 'flarum/forum/app';
import addWelcomeBox from "./addWelcomeBox";

export { default as extend } from './extend';

app.initializers.add('justoverclock-welcomebox', () => {
  addWelcomeBox();
});
