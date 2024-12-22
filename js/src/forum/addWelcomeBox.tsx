import { extend } from 'flarum/common/extend';
import IndexSidebar from 'flarum/forum/components/IndexSidebar';
import app from 'flarum/forum/app';
import User from "flarum/common/models/User";
import UserWelcomeBox from "./components/UserWelcomeBox";
import GuestWelcomeBox from "./components/GuestWelcomeBox";

export default function addWelcomeBox() {
  extend(IndexSidebar.prototype, 'items', function (items) {
    const user: User | null = app.session.user

    if (user) {
      items.add(
        'welcomeBox',
        <UserWelcomeBox
          user={user}
        />, 20
      )
    } else {
      items.add(
        'welcomeBoxGuest',
        <GuestWelcomeBox />, 20
      )
    }
  })
}
