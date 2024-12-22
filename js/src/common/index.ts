import app from 'flarum/common/app';

app.initializers.add('justoverclock-welcomebox-common', () => {
  console.log('[justoverclock/flarum-ext-welcomebox] Hello, forum and admin!');
});
