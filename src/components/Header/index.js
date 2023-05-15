import './index.css';
import NavigateGorizontalMenu from '../NavigateGorizontalMenu';

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>VineInVine</div>
      <div>+7 (925) 188-99-99</div>
      <NavigateGorizontalMenu/>
      <button className='button' type='button'>Винная карта</button>
      <button className='button' type='button'>Дегустация</button>
    </div>
  )
}

export default Header;