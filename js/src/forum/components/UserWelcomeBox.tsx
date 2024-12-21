import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from 'mithril'
import app from 'flarum/forum/app';
import {UserWelcomeBoxAttrs} from "./types";
import Button from 'flarum/common/components/Button';
import AvatarEditor from 'flarum/forum/components/AvatarEditor';
import listItems from 'flarum/common/helpers/listItems';
import username from 'flarum/common/helpers/username';
import {formatDistanceToNow} from "date-fns";
import {enUS, it, de, fr, tr } from "date-fns/locale";

export default class UserWelcomeBox extends Component<UserWelcomeBoxAttrs> {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    const user = app.session.user
    const userLang: string = app.translator.getLocale();
    console.log(userLang)
    const SettingsLink: string = app.route('settings');
    const lastSeenAt = user?.lastSeenAt();

    let locale;

    switch (userLang) {
      case 'it':
        locale = it
        break;
      case 'de':
        locale = de
        break;
      case 'fr':
        locale = fr
        break;
      default:
        locale = enUS;
        break;
    }

    const lastSeenRelative = lastSeenAt
      ? formatDistanceToNow(new Date(lastSeenAt), { addSuffix: true, locale })
      : 'Never seen';

    return (
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
              <a href={app.route.user(this.attrs.user)}>
                <div className="avatarwb">{AvatarEditor.component({ user: this.attrs.user })}</div>
              </a>
            </div>,
            <div className="contentwb">
              <div className="textinfo">
                {app.translator.trans('flarum-ext-welcomebox.forum.wback')}
                <br/>
                <strong>{username(this.attrs.user)}</strong>
              </div>
              <div className="cont">
                <div className="circletop">
                  <a href={SettingsLink} title={app.translator.trans('core.forum.settings.title')}>
                    <i className="menuicon fas fa-tasks"></i>
                  </a>
                  <a href={app.route.user(this.attrs.user)}
                     title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile')}>
                    <i className="menuicon far fa-user"></i>
                  </a>
                  <a
                    href={app.route.user(this.attrs.user) + '/mentions'}
                    title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions')}
                  >
                    <i className="menuicon fas fa-at"></i>
                  </a>
                  <a
                    href={app.route.user(this.attrs.user) + '/discussions'}
                    title={app.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist')}
                  >
                    <i className="menuicon far fa-list-alt"></i>
                  </a>
                </div>
              </div>
            </div>,
            <div className="iconbadge">{listItems(this.attrs.user.badges().toArray())}</div>,
            <div className="ulwb contentwb">
              <li>
                <label className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.npost')}</label>:{' '}
                <strong className="textinfo">{user?.commentCount()}</strong>
              </li>
              <li>
                <label
                  className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.discussion')}</label>:{' '}
                <strong className="textinfo">{user?.discussionCount()}</strong>
              </li>
              {lastSeenAt !== null && (
                <li>
                  <label
                    className="textinfo">{app.translator.trans('flarum-ext-welcomebox.forum.lastSeen')}</label>:{' '}
                  <strong className="textinfo">
                    {lastSeenRelative}
                  </strong>
                </li>
              )}
            </div>,
          ]}
        </div>
      </div>
    );
  }
}
