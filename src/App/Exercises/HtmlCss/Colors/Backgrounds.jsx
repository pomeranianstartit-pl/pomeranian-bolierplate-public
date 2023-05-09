import React from 'react';
import './styles.css';

const PaidImage = (isPaidUser) => {
  return (
    <div>
      <img
        className={isPaidUser ? '' : 'filter'}
        src="/Images/baby-groot.jpg"
      />
    </div>
  );
};

const MyImage = (props) => {
  console.log(props);
  return (
    <div>
      <img
        className={props.isPaidUser ? '' : 'filter'}
        src="/Images/baby-groot.jpg"
      />
    </div>
  );
};

const Backgrounds = () => {
  return (
    <div>
      <PaidImage isPaidUser={true} />
      <PaidImage isPaidUser={false} />
      <MyImage />
      <MyImage />
    </div>
  );
};

export default Backgrounds;
