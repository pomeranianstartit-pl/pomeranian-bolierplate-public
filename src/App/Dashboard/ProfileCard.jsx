import React from 'react';

export const ProfileCard = ({
  name,
  surname,
  email,
  phoneNumber,
  city,
  imgSrc,
}) => {
  return (
    <div className="profile-card">
      <img width={90} height={90} src={imgSrc} alt="profile" />
      <div className="profile-name">
        {name} {surname}
      </div>
      <div className="profile-details">
        <div className="profile-city">{city}</div>
        <div className="profile-field">
          <div className="profile-label">e-mail:</div>
          <div className="profile-description">{email}</div>
        </div>
        <div className="profile-field">
          <div className="profile-label">telefon:</div>
          <div className="profile-description">{phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};
