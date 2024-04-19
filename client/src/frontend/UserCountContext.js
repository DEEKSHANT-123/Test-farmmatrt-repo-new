import React, { createContext, useContext, useState } from 'react';

const UserCountContext = createContext();

export const useUserCount = () => useContext(UserCountContext);

export const UserCountProvider = ({ children }) => {
  const [userCount, setUserCount] = useState(0);

  const updateUserCount = (count) => {
    setUserCount(count);
  };

  return (
    <UserCountContext.Provider value={{ userCount, updateUserCount }}>
      {children}
    </UserCountContext.Provider>
  );
};

export default UserCountContext;