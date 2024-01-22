import React from 'react';
import organization from '../../../assets/organization.png';
import avatar from '../../../assets/default-avatar.png';

import './style.css';

export const AdminPanelHeader = () => {
  return (
    <div className='menu'>
      <div className='band'>
        <h1>BitTest</h1>
      </div>
      <div className='organization'>
        <img src={organization} alt='organization' />
        <span>Моя Организация</span>
      </div>
      <div className='user-actions'>
        <img src={avatar} alt='avatar' />
        <section>
          <p className='status'>Вы авторизованы</p>
          <p className='role'>Администратор</p>
        </section>
      </div>
    </div>
  );
};
