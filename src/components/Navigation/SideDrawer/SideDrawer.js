import React from 'react';
import NavItems from '../NavItems/NavItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer = (props) =>{
    let attachedClasses = ['SideDrawer', 'Closed'];
    if(props.open){
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className='SideDraw-Logo'>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;