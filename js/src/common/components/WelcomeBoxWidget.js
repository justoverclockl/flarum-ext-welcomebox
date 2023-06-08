import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';
import SignUpModal from 'flarum/components/SignUpModal';
import Button from 'flarum/common/components/Button';
import moment from 'moment/moment';

export default class WelcomeBoxWidget extends Widget {
    oninit(vnode) {
        super.oninit(vnode);
    }

    className() {
        return 'welcomebox-widget';
    }

    icon() {
        return 'fas fa-user-tie';
    }

    content() {
        const user = app.session.user;
        const lastSeenAt = user?.lastSeenAt() !== null ? user?.lastSeenAt() : false;
        const userLang = app.translator.getLocale();
        const useWidget = app.forum.attribute('justoverclock-welcomebox.UseWidget');
        const isGuestBoxHidden = app.forum.attribute('HideGuestBox');
        const SettingsLink = app.route('settings');
        const ImgAvatar =
            app.forum.attribute('imgUrl') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';

        if (useWidget && user) {
            return (
                <div className="containerwb">
                    <div className="backgrwb">
                        {Button.component({
                            icon: 'fas fa-sign-out-alt logoutt',
                            title: app.translator.trans('core.forum.header.log_out_button'),
                            className: 'Dropdown-toggle Button logwbox',
                            onclick: app.session.logout.bind(app.session),
                        })}
                        <div>
                            <a href={app.route.user(user)}>
                                <div className="avatarwb">{AvatarEditor.component({ user })}</div>
                            </a>
                            <div className="contentwb">
                                <div className="textinfo">
                                    {app.translator.trans('flarum-ext-welcomebox.forum.wback')}
                                    <br />
                                    <strong>{username(user)}</strong>
                                </div>
                                <div className="cont">
                                    <div className="circletop">
                                        <a href={SettingsLink} title={app.translator.trans('core.forum.settings.title')}>
                                            <i className="menuicon fas fa-tasks" />
                                        </a>
                                        <a href={app.route.user(user)} title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile')}>
                                            <i className="menuicon far fa-user" />
                                        </a>
                                        <a
                                            href={app.route.user(user) + '/mentions'}
                                            title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions')}
                                        >
                                            <i className="menuicon fas fa-at" />
                                        </a>
                                        <a
                                            href={app.route.user(user) + '/discussions'}
                                            title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist')}
                                        >
                                            <i className="menuicon far fa-list-alt" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="iconbadge">{listItems(user.badges().toArray())}</div>
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
                                        <strong className="textinfo">{`${moment(lastSeenAt)
                                            .locale(userLang || 'en')
                                            .fromNow()}`}</strong>
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (!user && isGuestBoxHidden && useWidget) {
            return (
                <div className="containerwb">
                    <div className="backgrwbguest">
                        <img className="guestavatarimg" src={ImgAvatar} />
                        <div className="guesttext">{app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}</div>
                        <p className="guestdesc">{app.translator.trans('flarum-ext-welcomebox.forum.notregistered')}</p>
                        <button
                            className=".SplitDropdown-button Button Button--primary hasIcon"
                            type="button"
                            onclick={(componentClass, attrs) => app.modal.show(SignUpModal, attrs)}
                        >
                            {app.translator.trans('core.forum.header.sign_up_link')}
                        </button>
                        <div className="contentwb" />
                    </div>
                </div>
            );
        }
    }
}
