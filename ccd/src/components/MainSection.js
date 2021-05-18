import React from 'react';
import {Button} from './Button';
import './MainSection.css';
import '../App.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src ='/videos/ccd-5.mp4' autoPlay loop muted/>
            <h1>CAFE COFFEE DAY</h1>
            <p>A lot can happen over Coffee!!!</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ORDER ONLINE
                </Button> 
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                    WATCH MORE <i className='far fa-play-circle'/>
                </Button> 
            </div>
        </div>
        
    );
}
export default MainSection;
