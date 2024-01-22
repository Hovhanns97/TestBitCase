import React, { useState } from 'react';

import './style.css';
import { TableComponent } from './Table';
import { SidePanelComponent } from './SidePanel';

export const UserTableComponent = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [activeRow, setActiveRow] = useState(null);

  const onSearchChange = (word) => {
    setSearchWord(word);
  };
  return (
    <div className='table-wrapper'>
      <section className='table-band'>
        <h1>Моя Организация</h1>
      </section>
      <div className='search-block'>
        <h1>Пользователи</h1>
        <input
          className='search-input'
          placeholder='Поиск'
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <TableComponent
        searchWord={searchWord}
        openSide={setSideOpen}
        setActiveRow={setActiveRow}
      />
      {sideOpen && (
        <SidePanelComponent openSide={setSideOpen} activeRow={activeRow} />
      )}
    </div>
  );
};
