import React from 'react';

import './style.css';
import '../Table/style.css';
import { TokenUsageChart } from './token_usage_chart';

export const SidePanelComponent = (props) => {
  const handle_close = () => {
    props.openSide(false);
  };

  return (
    <>
      <div className='blured' onClick={() => handle_close()}></div>
      <div className='sidePanel'>
        <div className='info_section'>
          <h1>{props.activeRow.email}</h1>
          <button className='close_btn' onClick={handle_close}></button>
        </div>
        <div className='token_usage'>
          <h1>Использование токенов</h1>
          <TokenUsageChart />
          <div className='table-wrapper-inner'>
            <h2>История операций</h2>
            <table cellSpacing='0'>
              <thead>
                <tr>
                  <th>Тип</th>
                  <th>Сумма</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {props.activeRow &&
                  props.activeRow.transaction_history.map((item) => {
                    return (
                      <tr>
                        <td>
                          {item.type === 'in' ? 'Пополнение' : 'Списание'}
                        </td>
                        <td
                          className={
                            item.type === 'in' ? 'action_in' : 'action_out'
                          }
                        >{`${item.type === 'in' ? '+' : '-'} ${
                          item.amount
                        } BTKN`}</td>
                        <td>{item.date}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
