import React from 'react';
import { NavLink } from 'react-router-dom';

import { color } from "../data/color";
import { navbarCmp as dic } from "../data/language";

const NavBar = ({ ilang, setIlang, onSetIlang }) => {
    return (
        <div className='row' style={S.navbar}>
            <div className='col'>

            </div>
            <div className="col" style={{}}>
                <h2 style={S.name}>Esteban Parra</h2>
            </div>
            <div className='col'>

            </div>
            <div className="col" style={{ justifyContent: 'center', zIndex: 3 }}>
                <div className='row' style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <div className="col" style={{ alignContent: 'center', justifyContent: 'center' }}>
                        {/* <h5 style={S.link}>{dic.about[ilang]}</h5> */}
                        <NavLink
                            exact='true'
                            to='/'
                            style={{ color: 'orange' }}
                            activeStyle={S.linkActive}
                            style={S.link}
                        >{dic.about[ilang]}</NavLink>
                    </div>
                    <div className="col">
                        <NavLink
                            exact='true'
                            to='/projects'
                            activeStyle={S.linkActive}
                            style={S.link}
                        >{dic.projects[ilang]}</NavLink>
                    </div>
                    <div className="col-4">
                        <div className="dropdown" style={{ zIndex: 4 }}>
                            <button style={{ backgroundColor: color.grad[7], zIndex: 4 }}
                                className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>{dic.languague[ilang]}</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ zIndex: 4 }}>
                                <a className="dropdown-item" onClick={() => onSetIlang(0)}>{dic.spanish[ilang]}</a>
                                <a className="dropdown-item" onClick={() => onSetIlang(1)}>{dic.english[ilang]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const S = {
    navbar: {
        backgroundColor: color.grad[0],
        padding: '15px',
        // overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 2
    },
    name: {
        color: color.grad[6],
        fontSize: 30
    },
    link: {
        color: color.grad[4]
    },
    linkActive: {
        color: color.grad[3],
        fontWeight: 'bold'
    }
};

export default NavBar;