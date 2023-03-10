import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../Graphql/Mutation';

const UpdatePassword = () => {
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Current Password..."
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        onClick={() =>
          updatePassword({
            variables: {
              username: username,
              oldPassword: currentPassword,
              newPassword: newPassword,
            },
          })
        }
      >
        {' '}
        Update Password
      </button>
    </div>
  );
};

export default UpdatePassword;
