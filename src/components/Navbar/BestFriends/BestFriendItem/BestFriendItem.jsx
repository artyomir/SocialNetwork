import React from 'react';
import { postAvatar } from '../../../../pictures';
import friendStyle from './BestFriendItem.module.css';

const BestFriendItem = (props) => {
  return (
    <div>
      <img src={postAvatar} className={friendStyle.avatar} />
      friendname
    </div>
  );
};

export default BestFriendItem;
