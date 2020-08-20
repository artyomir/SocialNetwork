import React from 'react';
import { logoHead } from '../../../pictures';
import profileStyles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={profileStyles.profileInfo}>
      <div className={profileStyles.head}>
        <img src={logoHead} />
      </div>
      <div className={profileStyles.member}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
