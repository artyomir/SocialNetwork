import React from 'react';
import PostBarContainer from './PostBar/PostBarContainer';
import profileStyles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={profileStyles.head}>
      <ProfileInfo />
      <div className={profileStyles.item}>
        <PostBarContainer store={props.store} />
      </div>
    </div>
  );
};

export default Profile;
