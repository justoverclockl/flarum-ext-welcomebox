import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';
import SignUpModal from 'flarum/components/SignUpModal';
import Button from 'flarum/common/components/Button';
import registerWidget from '../common/registerWidget';
import moment from 'moment';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
    registerWidget(app);
    extend(IndexPage.prototype, 'sidebarItems', (items) => {
        const user = app.session.user;
        const lastSeenAt = user?.lastSeenAt() !== null ? user?.lastSeenAt() : false;
        const userLang = app.translator.getLocale();
        const SettingsLink = app.route('settings');
        const useWidget = app.forum.attribute('justoverclock-welcomebox.UseWidget');

        if (!useWidget && user) {
            items.add(
                'welcomeBox',
                <div className="containerwb">
                    <div className="backgrwb">
                        {Button.component({
                            icon: 'fas fa-sign-out-alt logoutt',
                            title: app.translator.trans('core.forum.header.log_out_button'),
                            className: 'Dropdown-toggle Button logwbox',
                            onclick: app.session.logout.bind(app.session),
                        })}
                        {[
                            <div>
                                <a href={app.route.user(user)}>
                                    <div className="avatarwb">{AvatarEditor.component({ user })}</div>
                                </a>
                            </div>,
                            <div className="contentwb">
                                <div className="textinfo">
                                    {app.translator.trans('flarum-ext-welcomebox.forum.wback')}
                                    <br />
                                    <strong>{username(user)}</strong>
                                </div>
                                <div className="cont">
                                    <div className="circletop">
                                        <a href={SettingsLink} title={app.translator.trans('core.forum.settings.title')}>
                                            <i className="menuicon fas fa-tasks"></i>
                                        </a>
                                        <a href={app.route.user(user)} title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile')}>
                                            <i className="menuicon far fa-user"></i>
                                        </a>
                                        <a
                                            href={app.route.user(user) + '/mentions'}
                                            title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions')}
                                        >
                                            <i className="menuicon fas fa-at"></i>
                                        </a>
                                        <a
                                            href={app.route.user(user) + '/discussions'}
                                            title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist')}
                                        >
                                            <i className="menuicon far fa-list-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>,
                            <div className="iconbadge">{listItems(user.badges().toArray())}</div>,
                            <div className="ulwb contentwb">
                                <li>
                                    <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.npost')}</label>:{' '}
                                    <strong className="textinfo">{formatNumber(user.commentCount())}</strong>
                                </li>
                                <li>
                                    <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.discussion')}</label>:{' '}
                                    <strong className="textinfo">{formatNumber(user.discussionCount())}</strong>
                                </li>
                                {lastSeenAt !== null && (
                                    <li>
                                        <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.lastSeen')}</label>:{' '}
                                        <strong className="textinfo">
                                            {moment(lastSeenAt)
                                                .locale(userLang || 'en')
                                                .fromNow()}
                                        </strong>
                                    </li>
                                )}
                            </div>,
                        ]}
                    </div>
                </div>,
                20
            );
        }
    });
});
extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const isLoginAvailable = app.forum.attribute('allowSignUp');
    const useWidget = app.forum.attribute('justoverclock-welcomebox.UseWidget');
    const ImgAvatar = app.forum.attribute('imgUrl') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';

    const SignupComponent = {
        view: function () {
            if (isLoginAvailable) {
                return (
                    <button
                        className=".SplitDropdown-button Button Button--primary hasIcon"
                        type="button"
                        onclick={(componentClass, attrs) => app.modal.show(SignUpModal, attrs)}
                    >
                        {app.translator.trans('core.forum.header.sign_up_link')}
                    </button>
                );
            }
            return null;
        },
    };

    if (!useWidget) {
        if (!app.session.user) {
            if (app.forum.attribute('HideGuestBox') === true) {
                items.add(
                    'welcomeBoxGuest',
                    <div className="containerwb">
                        <div className="backgrwbguest">
                            <img className="guestavatarimg" src={ImgAvatar} />
                            <div className="guesttext">{app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}</div>
                            <p className="guestdesc">{app.translator.trans('flarum-ext-welcomebox.forum.notregistered')}</p>
                            {m(SignupComponent)}
                            <div className="contentwb"></div>
                        </div>
                    </div>,
                    20
                );
            }
        }
    }
});
