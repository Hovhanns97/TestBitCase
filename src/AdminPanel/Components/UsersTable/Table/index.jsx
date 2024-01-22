import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './style.css';

import data from './data.json';

export const TableComponent = (props) => {
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);

  const handle_sort = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const handle_row_click = (item) => {
    props.openSide(true);
    props.setActiveRow(item);
  };

  const handlePaginationChange = (e, page) => {
    setCurrentPage(page);
    let newTableData = data.slice((page - 1) * 5, page * 5);
    setTableData(newTableData);
  };

  const totalPages = Math.ceil(data.length / 5);

  const sortData = (data) => {
    if (sortDirection === 'asc') {
      data.sort((a, b) => {
        return a.tokens > b.tokens ? 1 : -1;
      });
    } else {
      data.sort((a, b) => {
        return b.tokens > a.tokens ? 1 : -1;
      });
    }

    return data;
  };

  const onSearch = (word) => {
    let searchedData = data.filter(
      (item) =>
        item.email.toLowerCase().includes(word.toLowerCase()) ||
        item.name.toLowerCase().includes(word.toLowerCase()),
    );

    setTableData(
      word !== ''
        ? sortData(searchedData).slice((currentPage - 1) * 5, currentPage * 5)
        : sortData(data).slice((currentPage - 1) * 5, currentPage * 5),
    );
  };

  useEffect(() => {
    setTableData(sortData(data).slice((currentPage - 1) * 5, currentPage * 5));
  }, []);

  useEffect(() => {
    setTableData(sortData(data).slice((currentPage - 1) * 5, currentPage * 5));
  }, [sortDirection]);

  useEffect(() => {
    onSearch(props.searchWord);
  }, [props.searchWord]);

  return (
    <div className='table-wrapper-inner'>
      <table cellSpacing='0'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Имя</th>
            <th>Роль</th>
            <th>Подписка</th>
            <th
              onClick={() => handle_sort()}
              className={sortDirection === 'asc' ? 'sort_asc' : 'sort_desc'}
            >
              Токены
            </th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((item) => {
              return (
                <tr onClick={() => handle_row_click(item)} key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.subscription}</td>
                  <td>{item.tokens}</td>
                  <td>
                    <button className='btn edit-btn'></button>
                    <button className='btn delete-btn'></button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className='pagination'>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            onChange={handlePaginationChange}
            shape='rounded'
            color='primary'
          />
        </Stack>
      </div>
    </div>
  );
};
