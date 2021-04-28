import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
  extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const user = app.session.user;

    if (app.session.user)
      items.add(
        'welcomeBox',
        m(
          'div',
          { class: 'containerwb' },
          m('div', { class: 'backgrwb' }, [
            m('div',  m('a', { href: app.route.user(user) }, m('div', { class: 'avatarwb' }, avatar(user)))),
            m('div', { class: 'contentwb' }, m('div', { class: 'tagwb' }, 'Welcome Back, ', username(user))),
          ])
        ),
        20
      );
  });
});
