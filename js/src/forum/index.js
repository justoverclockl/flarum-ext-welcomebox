import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';
import SignUpModal from 'flarum/components/SignUpModal';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
  extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const user = app.session.user;
    if (app.session.user)
      items.add(
        'welcomeBox',
        m(
          'div',
          { className: 'containerwb' },
          m('div', { className: 'backgrwb' }, [
            m('div', m('a', { href: app.route.user(user) }, m('div', { className: 'avatarwb' }, AvatarEditor.component({ user })))),
            m(
              'div',
              { className: 'contentwb' },
              m('div', { className: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.wback'), m('br'), m('strong', username(user)))
            ),
            m('div', { className: 'iconbadge' }, listItems(user.badges().toArray())),
            m('.ulwb', { className: 'contentwb' }, [
              m('li', [
                m('label', { className: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.npost')),
                ': ',
                m('strong', { className: 'textinfo' }, formatNumber(user.commentCount())),
              ]),
              m('li', [
                m('label', { className: 'textinfo' }, app.translator.trans('flarum-ext-welcomebox.forum.discussion')),
                ': ',
                m('strong', { className: 'textinfo' }, formatNumber(user.discussionCount())),
              ]),
            ]),
          ])
        ),
        20
      );
  });
});
extend(IndexPage.prototype, 'sidebarItems', (items) => {

  const assetsFolder = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/reg-img.png';

  if (!app.session.user)
    if (app.forum.attribute('HideGuestBox') === true)
      items.add(
        'welcomeBoxGuest',
        m(
          'div',
          { className: 'containerwb' },
          m('div', { className: 'backgrwbguest' }, [
            m('div', { className: 'guesttext' }, app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')),
            m('p', { className: 'guestdesc' }, app.translator.trans('flarum-ext-welcomebox.forum.notregistered')),
            m(
              'button',
              { className: '.SplitDropdown-button Button Button--primary hasIcon', type: 'button', onclick: () => app.modal.show(SignUpModal) },
              app.translator.trans('core.forum.header.sign_up_link')
            ),
            m(
              'div',
              { className: 'contentwb' },
              m('div', m('img', { className: 'ingwbox', src: assetsFolder}))
            ),
          ])
        ),
        20
      );
});
