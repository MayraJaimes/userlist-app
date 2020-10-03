import React from "react";

const formatEmailLink = (email) => {
  return `emailto:${email}`;
};

const User = ({
  phone,
  website,
  email,
  address,
  name,
  company,
  catchPhrase,
  bs,
  username,
}) => {
  const formattedEmail = formatEmailLink(email);
  const companyInfo = company !== undefined ? company : "none";

  return (
    <details className="person">
      <summary>
        <a href={formattedEmail}>{name}</a>
      </summary>
      <div className="info">
        <div className="badge">
          <div>
            <strong>{companyInfo}</strong>
          </div>
          <div>{catchPhrase}</div>
          <div>{bs}</div>
        </div>
        <div className="username">
          <div>
            <strong>{username}</strong>
          </div>
          <address>
            <div>
              {address.street}, {address.suite}
            </div>
            <div>
              {address.city}, {address.zipcode}
            </div>
          </address>
          <div className="phone">{phone}</div>
          <div className="website">{website}</div>
        </div>
      </div>
    </details>
  );
};

export default User;
