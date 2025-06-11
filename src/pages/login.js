// pages/login.js

import React from 'react';

import styles from '../../css/login.css';
import styles from '../../css/neve.css';

export default function Login() {
  return (
    <div>
	
	<div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
    <div class="snowflake"></div>
	
	
	
      <h1>Página de Login</h1>
      <form>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" /><br /><br />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}