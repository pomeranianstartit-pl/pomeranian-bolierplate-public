import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

const AvatarPlaceholder = styled.div`
  border-radius: 50%;
  background-color: #e5e5e5;
  width: 50px;
  height: 50px;
  &:hover {
    border: 1px solid black;
  }
`;

const AnotherAvatarPlaceholder = styled(AvatarPlaceholder)`
  border-radius: 5px;
  border: ${(props) =>
    props.hasBeenClicked ? '1px dashed red' : '1px solid transparent'};
`;

const Avatar = () => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleClick = () => {
    setHasBeenClicked((prev) => !prev);
  };

  return (
    <div>
      <AvatarPlaceholder />
      <AnotherAvatarPlaceholder
        onClick={handleClick}
        hasBeenClicked={hasBeenClicked}
      />
    </div>
  );
};

export default Avatar;
