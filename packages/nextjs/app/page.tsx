"use client";

import React from 'react';
import './Page.css';

const StakingPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Проект Staking</h1>
      <p className="description">
        В мире криптовалют существует множество возможностей для пользователей, одна из таких — стейкинг.
        Если говорить простыми словами, то это как депозит в банке: вы вносите свои денежные средства и через некоторое время получаете процент.
      </p>
      <p className="description">
        Стейкинг позволяет пользователям внести свои LP (liquidity pool) токены, через некоторое время пользователь получит reward токены (проценты от депозита) и сможет вывести свои LP токены. 
        Данная технология широко распространена в сфере Web3, поэтому мой проект реализует контракт, предоставляющий такую возможность для пользователей.
      </p>
      <p className="description">
        Если вы уже являетесь провайдером ликвидности и имеете LP токены, вы можете воспользоваться контрактом Staking.
      </p>

      <h2 className="subtitle">Узнать условия:</h2>
      <ul className="conditions">
        <li><strong>getRewardTime</strong> - узнать время, через которое вам будут начислены reward токены</li>
        <li><strong>getRewardPercent</strong> - узнать процент награды</li>
        <li><strong>getLockTime</strong> - узнать время, через которое вы сможете вывести свои LP токены</li>
      </ul>

      <h2 className="subtitle">Стейк токенов:</h2>
      <ol className="staking-steps">
        <li>Предоставьте контракту Staking разрешение на управление вашими LP токенами в том количестве, которое вы хотите использовать.</li>
        <li>Воспользуйтесь функцией <code>stake(amount)</code>, где <code>amount</code> - количество LP токенов, которые вы хотите застейкать.</li>
      </ol>

      <h2 className="subtitle">Получение награды:</h2>
      <ol className="reward-steps">
        <li>Убедитесь, что прошло достаточно времени для получения награды.</li>
        <li>Воспользуйтесь функцией <code>claim()</code>, на ваш аккаунт будет автоматически начислены reward токены.</li>
      </ol>

      <h2 className="subtitle">Вывод токенов:</h2>
      <ol className="unstake-steps">
        <li>Убедитесь, что прошло достаточно времени для вывода LP токенов.</li>
        <li>Воспользуйтесь функцией <code>unstake()</code>, на ваш аккаунт будет автоматически перечислены LP токены, которые вы стейкали.</li>
      </ol>

      <h2 className="subtitle">Функции для владельца контракта:</h2>
      <ul className="owner-functions">
        <li><code>setRewardTime(time)</code> - установить новое время награды</li>
        <li><code>setRewardPercent(percent)</code> - установить новый процент награды</li>
        <li><code>setUnstakeTime(time)</code> - установить новое время для вывода LP токенов</li>
      </ul>

      <p className="note">
        Вызов каждой функции требует оплаты газа, убедитесь, что на вашем кошельке достаточно средств.
      </p>
    </div>
  );
};

export default StakingPage;
