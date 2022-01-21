import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import WelcomeBoxWidget from './components/WelcomeBoxWidget';

export default function (app) {
    new Widgets()
        .add({
            key: 'WelcomeBoxWdg',
            component: WelcomeBoxWidget,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'justoverclock-welcomebox');
}
