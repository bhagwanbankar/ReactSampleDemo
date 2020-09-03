import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
const toolbar = (props) => (
    <header className='Toolbar'>
        <div>Menu</div>
        <div className='Tool-Logo'>
            <Logo/>
        </div>
        <nav className='DesktopOnly'>
           <NavItems></NavItems>
        </nav>
    </header>
);

export default toolbar;