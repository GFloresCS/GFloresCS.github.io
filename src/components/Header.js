import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    

    return (
        <div className="header-wrapper">
            <div className="header-info">
                <h3>Hi, my name is</h3>
                <h1>Gustavo Flores</h1>
                <h3>I'm a software engineer who's loves learning as well as <Typed 
                        className="typed-text"
                        strings={["teaching others.","helping others.","playing competitive video games.","playing with my dog Milo."]}
                        typeSpeed={50}
                        backSpeed={20}
                        smartBackspace={true}
                        backDelay={1000}
                        showCursor={false}
                        loop={true}/> 
                </h3>    
                       
            </div>        
        </div>
    )
}

export default Header