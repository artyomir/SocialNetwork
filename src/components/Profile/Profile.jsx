import React from 'react';
import { logoHead } from '../../pictures';
import profileStyles from './Profile.module.css';
import PostBar from './PostBar/PostBar';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={profileStyles.head}>
      <ProfileInfo />
      <div className={profileStyles.item}>
        <PostBar></PostBar>
      </div>
    </div>
  );
};

export default Profile;
