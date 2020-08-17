import React from 'react';
import { logoHead } from '../../pictures';
import profileStyles from './Profile.module.css';
import PostBar from './PostBar/PostBar';

const Profile = () => {
  return (
    <div className={profileStyles.content}>
      <img src={logoHead} />
      <div>ava + description</div>
      <PostBar></PostBar>
    </div>
  );
};

export default Profile;
