import app from 'flarum/app';

app.initializers.add('justoverclock-welcomebox', () => {
    app.extensionData
        .for('justoverclock-welcomebox')
        .registerSetting({
            setting: 'justoverclock-welcomebox.hide.guestbox',
            label: app.translator.trans('flarum-ext-welcomebox.admin.enablepostbox'),
            type: 'boolean',
        })
        .registerSetting({
            setting: 'justoverclock-welcomebox.imgUrl',
            name: 'imgUrl',
            type: 'URL',
            label: app.translator.trans('flarum-ext-welcomebox.admin.img'),
            help: app.translator.trans('flarum-ext-welcomebox.admin.img-help'),
        });
});
