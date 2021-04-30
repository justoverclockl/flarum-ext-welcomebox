import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';

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
            m('div', m('a', { href: app.route.user(user) }, m('div', { class: 'avatarwb' }, AvatarEditor.component({ user })))),
            m(
              'div',
              { class: 'contentwb' },
              m('div', { class: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.wback'), m('br'), m('strong', username(user)))
            ),
            m('div', { class: 'iconbadge' }, listItems(user.badges().toArray())),
            m('.ulwb', { class: 'contentwb' }, [
              m('li', [
                m('label', { class: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.npost')),
                ': ',
                m('strong', { class: 'textinfo' }, formatNumber(user.commentCount())),
              ]),
              m('li', [
                m('label', { class: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.discussion')),
                ': ',
                m('strong', { class: 'textinfo' }, formatNumber(user.discussionCount())),
              ]),
            ]),
          ])
        ),
        20
      );
  });
});
