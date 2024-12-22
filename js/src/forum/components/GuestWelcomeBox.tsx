import Component, {ComponentAttrs} from "flarum/common/Component";
import Mithril from "mithril";
import app from 'flarum/forum/app'

export default class GuestWelcomeBox extends Component {
  oninit(vnode: Mithril.Vnode<ComponentAttrs, this>) {
    super.oninit(vnode);
  }

  view(vnode: Mithril.Vnode<ComponentAttrs, this>): Mithril.Children {
    const isSignupEnabled = app.forum.attribute('allowSignUp');
    const emptyAvatarImg = app.forum.attribute('imgUrl') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';

    return (
      <div className="containerwb">
        <div className="backgrwbguest">
          <img className="guestavatarimg" src={emptyAvatarImg} alt=''/>
          <div className="guesttext">{app.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')}</div>
          <p className="guestdesc">{app.translator.trans('flarum-ext-welcomebox.forum.notregistered')}</p>
          <div className="contentwb">
            {isSignupEnabled && (
              <button
                className=".SplitDropdown-button Button Button--primary hasIcon"
                type="button"
                onclick={() => app.modal.show(() => import('flarum/forum/components/SignUpModal'))}
              >
                {app.translator.trans('core.forum.header.sign_up_link')}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
