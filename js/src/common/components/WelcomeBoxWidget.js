import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';
import SignUpModal from 'flarum/components/SignUpModal';
import Button from 'flarum/common/components/Button';

export default class WelcomeBoxWidget extends Widget {
    oninit(vnode) {
        super.oninit(vnode);
    }

    oncreate(vnode) {}

    className() {
        // css class for the container
        return 'welcomebox-widget';
    }

    icon() {
        // Widget icon.
        return 'fas fa-user-tie';
    }

    content() {
        const user = app.session.user;
        const SettingsLink = app.route('settings');
        const ImgAvatar =
            app.forum.attribute('imgUrl') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';
        if (app.forum.attribute('justoverclock-welcomebox.UseWidget') === true) {
            if (user) {
                const lastseenAt = user.data.attributes.lastSeenAt.slice(0, 10);

                return m('div',
                    { className: 'containerwb' },
                    m('div',
                        { className: 'backgrwb' },
                        Button.component({
                            icon: 'fas fa-sign-out-alt logoutt',
                            title: app.translator.trans('core.forum.header.log_out_button'),
                            className: 'Dropdown-toggle Button logwbox',
                            onclick: app.session.logout.bind(app.session),
                        }),
                        [
                            m('div', m('a', { href: app.route.user(user) }, m('div', { className: 'avatarwb' }, AvatarEditor.component({ user })))),
                            m(
                                'div',
                                { className: 'contentwb' },
                                m('div',
                                    { className: 'textinfo' },
                                    app.translator.trans('flarum-ext-welcomebox.forum.wback'),
                                    m('br'),
                                    m('strong', username(user))
                                ),
                                m('div',
                                    { className: 'cont' },
                                    m('div', { className: 'circletop' }, [
                                        m('a',
                                            { href: SettingsLink, title: app.translator.trans('core.forum.settings.title') },
                                            m('i', { className: 'menuicon fas fa-tasks' })
                                        ),
                                        m('a',
                                            {
                                                href: app.route.user(user),
                                                title: app.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile'),
                                            },
                                            m('i', { className: 'menuicon far fa-user' })
                                        ),
                                        m('a',
                                            {
                                                href: app.route.user(user) + '/mentions',
                                                title: app.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions'),
                                            },
                                            m('i', { className: 'menuicon fas fa-at' })
                                        ),
                                        m('a',
                                            {
                                                href: app.route.user(user) + '/discussions',
                                                title: app.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist'),
                                            },
                                            m('i', { className: 'menuicon far fa-list-alt' })
                                        ),
                                    ])
                                )
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
                        ]
                    )
                );
            } else if (!user && app.forum.attribute('HideGuestBox') === true) {
                return m(
                    'div',
                    { className: 'containerwb' },
                    m('div', { className: 'backgrwbguest' }, [
                        m('img', { className: 'guestavatarimg', src: ImgAvatar }),
                        m('div', { className: 'guesttext' }, app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')),
                        m('p', { className: 'guestdesc' }, app.translator.trans('flarum-ext-welcomebox.forum.notregistered')),
                        m('button',
                            {
                                className: '.SplitDropdown-button Button Button--primary hasIcon',
                                type: 'button',
                                onclick: (componentClass, attrs) => app.modal.show(SignUpModal, attrs),
                            },
                            app.translator.trans('core.forum.header.sign_up_link')
                        ),
                        m('div', { className: 'contentwb' }),
                    ])
                );
            }
        }
    }
}
