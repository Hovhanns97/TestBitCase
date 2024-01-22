import React from 'react';
import { AdminPanelHeader } from './Components/Header/Index';
import { UserTableComponent } from './Components/UsersTable';

export const AdminPanelComponent = () => {
  return (
    <>
      <AdminPanelHeader />
      <UserTableComponent />
    </>
  );
};
