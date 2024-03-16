import { UsersApp } from './src/users/users-app';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="card">
    
  </div>
`;

const element = document.querySelector('.card');

UsersApp(element);

