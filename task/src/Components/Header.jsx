import Button from './Button'
import React from 'react';
const Header = ({onAdd, showAdd} ) => {
 
  return (
    <header className='header' >

      <h1>Task Tracker</h1>
      < Button color={showAdd ? 'red': 'green'} text={showAdd ? 'close': 'Add'} onClick={onAdd} />

    </header>
  )
}

export default Header;
