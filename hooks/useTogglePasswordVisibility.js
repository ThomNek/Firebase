import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prev) => !prev);
  };

  const rightIcon = passwordVisibility ? 'eye-off' : 'eye';
  const confirmPasswordIcon = confirmPasswordVisibility ? 'eye-off' : 'eye';

  return {
    passwordVisibility,
    handlePasswordVisibility,
    rightIcon,
    handleConfirmPasswordVisibility,
    confirmPasswordIcon,
    confirmPasswordVisibility,
  };
};
