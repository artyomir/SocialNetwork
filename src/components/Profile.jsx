import React from 'react';
import { logoHead } from '../pictures';

const Profile = () => {
  return (
    <div className="content">
      <img src={logoHead} />
      <div>ava + description</div>
      <div>
        My posts
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
