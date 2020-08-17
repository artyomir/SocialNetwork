import React from 'react';
import { logoHead } from '../pictures';
import profileStyles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={profileStyles.content}>
      <img src={logoHead} />
      <div>ava + description</div>
      <div className={profileStyles.postbar}>
        My posts
        <div className={profileStyles.item}>post 1</div>
        <div className={profileStyles.item}>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
