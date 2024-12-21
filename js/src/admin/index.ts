import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('justoverclock-welcomebox', () => {
  console.log('[justoverclock/flarum-ext-welcomebox] Hello, admin!');
});
