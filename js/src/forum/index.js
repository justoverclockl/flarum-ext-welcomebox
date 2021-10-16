import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import icon from 'flarum/common/helpers/icon';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';
import SignUpModal from 'flarum/components/SignUpModal';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/flarum-ext-welcomebox', () => {
    registerWidget(app);
    extend(IndexPage.prototype, 'sidebarItems', (items) => {
        const user = app.session.user;
        const SettingsLink = app.route('settings');
        if (app.forum.attribute('justoverclock-welcomebox.UseWidget') === false) {
            if (user) {
                const lastseenAt = user.data.attributes.lastSeenAt.slice(0, 10);
                const badges = user.badges().toArray();
                items.add(
                    'welcomeBox',
                    <div className="containerwb">
                        <div className="backgrwb">
                            <Button icon="fas fa-sign-out-alt logoutt" className="Dropdown-toggle Button logwbox" onclick={app.session.logout.bind(app.session)} title={app.translator.trans('core.forum.header.log_out_button')}></Button>
                            <div>
                                <Link href={app.route.user(user)}>
                                    <div className="avatarwb">{AvatarEditor.component({ user })}</div>
                                </Link>
                            </div>
                            <div className="contentwb">
                                <div className="textinfo">
                                    {app.translator.trans('flarum-ext-welcomebox.forum.wback')}
                                    <br />
                                    <strong>{username(user)}</strong>
                                </div>
                                <div className="cont">
                                    <div className="circletop">
                                        <Link href={SettingsLink} title={app.translator.trans('core.forum.settings.title')}>
                                            {icon('fas fa-tasks menuicon')}
                                        </Link>
                                        <Link href={app.route.user(user)} title={app.translator.trans('core.forum.settings.tooltipProfile')}>
                                            {icon('fas fa-user menuicon')}
                                        </Link>
                                        <Link href={app.route('user.mentions', { username: user.slug() })} title={app.translator.trans('core.forum.settings.tooltipMentions')}>
                                            {icon('fas fa-at menuicon')}
                                        </Link>
                                        <Link href={app.route('user.discussions', { username: user.slug() })} title={app.translator.trans('core.forum.settings.tooltipDisclist')}>
                                            {icon('fas fa-list-alt menuicon')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="iconbadge">
                                {badges.length ? <ul className="UserCard-badges badges">{listItems(badges)}</ul> : ''}
                            </div>
                            <div className="ulwb contentwb">
                                <li>
                                    <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.npost')}</label>
                                    {': '}
                                    <strong className="textinfo">{formatNumber(user.commentCount())}</strong>
                                </li>
                                <li>
                                    <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.discussion')}</label>
                                    {': '}
                                    <strong className="textinfo">{formatNumber(user.discussionCount())}</strong>
                                </li>
                                <li>
                                    <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.lastSeen')}</label>
                                    {': '}
                                    <strong className="textinfo">{lastseenAt}</strong>
                                </li>
                            </div>
                        </div>
                    </div>,
                    20
                )
            }
        }
    });
});
extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const ImgAvatar = app.forum.attribute('imgUrl') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';
    if (app.forum.attribute('justoverclock-welcomebox.UseWidget') === false) {
        if (!app.session.user) {
            if (app.forum.attribute('HideGuestBox') === true) {
                items.add(
                    'welcomeBoxGuest',
                    <div className="containerwb">
                        <div className="backgrwbguest">
                            <img class="guestavatarimg" src={ImgAvatar} />
                            <div class="guesttext">{app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}</div>
                            <p className="guestdesc">{app.translator.trans('flarum-ext-welcomebox.forum.notregistered')}</p>
                            <Button className="Button Button--primary welcomeBox-LoginButton" onclick={() => app.modal.show(SignUpModal)}>{app.translator.trans('core.forum.header.sign_up_link')}</Button>
                        </div>
                    </div>,
                    20
                )
            }
        }
    }
});
