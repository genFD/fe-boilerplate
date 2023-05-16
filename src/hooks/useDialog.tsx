/* State to manage opening and closing login form*/
import { useState } from 'react';

export const useDialog = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [isAddFeedbackDialogOpen, setIsAddFeedbackDialogOpen] = useState(false);
  const [isEditProfileDialogOpen, setIsEditProfileDialogOpen] = useState(false);

  const openLoginDialog = () => setIsLoginDialogOpen(true);
  const closeLoginDialog = () => setIsLoginDialogOpen(false);
  const openRegisterDialog = () => setIsRegisterDialogOpen(true);
  const closeRegisterDialog = () => setIsRegisterDialogOpen(false);
  const openAddFeedbackDialog = () => setIsAddFeedbackDialogOpen(true);
  const closeAddFeedbackDialog = () => setIsAddFeedbackDialogOpen(false);
  const openEditFeedbackDialog = () => setIsEditProfileDialogOpen(true);
  const closeEditFeedbackDialog = () => setIsEditProfileDialogOpen(false);

  return {
    isLoginDialogOpen,
    openLoginDialog,
    closeLoginDialog,
    openRegisterDialog,
    closeRegisterDialog,
    isRegisterDialogOpen,
    isAddFeedbackDialogOpen,
    openAddFeedbackDialog,
    closeAddFeedbackDialog,
    isEditProfileDialogOpen,
    openEditFeedbackDialog,
    closeEditFeedbackDialog,
  };
};
