import React from 'react';
import { loginUrl } from '../../sportify';
import './Login.css';

function login() {
  return (
    <div className='login'>
        <img src='https://t4.ftcdn.net/jpg/03/57/09/27/240_F_357092776_RLUQxuHpbD8cfaajU4gBD1nGv7oyO5zf.jpg' alt='' />
        <a href={loginUrl}> Login with Sportify </a>
    </div>
  )
}

export default login;
