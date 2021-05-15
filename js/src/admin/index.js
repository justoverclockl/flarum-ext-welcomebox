import app from 'flarum/app';

app.initializers.add('justoverclock-welcomebox', () => {
  app.extensionData.for('justoverclock-welcomebox').registerSetting({
    setting: 'justoverclock-welcomebox.hide.guestbox',
    label: app.translator.trans('flarum-ext-welcomebox.admin.enablepostbox'),
    type: 'boolean',
  });
});
