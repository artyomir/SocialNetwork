import React from 'react';
import { logoHead } from '../../pictures';
import profileStyles from './Profile.module.css';
import PostBar from './PostBar/PostBar';

const Profile = () => {
  return (
    <div className={profileStyles.head}>
      <img src={logoHead} />
      <div>ava + description</div>
      <div className={profileStyles.item}>
        <PostBar></PostBar>
      </div>
    </div>
  );
};

export default Profile;
