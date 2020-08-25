import React from 'react';
import BestFriendItem from './BestFriendItem/BestFriendItem';
import bfStyles from './BestFriends.module.css';

const BestFriends = (props) => {
  return (
    <div className={bfStyles.bfRow}>
      <span>
        <BestFriendItem />
      </span>
      <span>
        <BestFriendItem />
      </span>
      <span>
        <BestFriendItem />
      </span>
    </div>
  );
};

export default BestFriends;
