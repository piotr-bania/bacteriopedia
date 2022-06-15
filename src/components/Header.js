import React from 'react'
import '../styles/Header.css'
import logo from '../assets/images/logoBacteria.svg'

const Header = () => {
    return (
        <div>
            <div>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='horizontalLine'>
                <p>Bacteria are microscopic, single-celled organisms that exist in their millions, in every environment, both inside and outside other organisms.
                </p>
            </div>
            <div>
                <h1 className='heading'>I'm a <br />
                    Microscopic <br />
                    Single-celled <br />
                    Organism. <br />
                </h1>
            </div>
            {/* <button>Click Here</button> */}
        </div>
    )
}

export default Header