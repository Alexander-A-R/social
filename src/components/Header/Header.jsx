import React, {useState} from 'react';
import './style.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const [tooltip, setTooltip] = useState({progects: false, gallery: false, docs: false});

    const showMenu = (item, e) => {
            setTooltip({...tooltip, [item]: true});
    };

    const hideMenu = (item, e) => {
        setTooltip({...tooltip, [item]: false});
    };

    return (
        <header>
            <div className={'header'}>
                <div className={'logo'}>
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <div className={'navbar'}>
                        <a href="#">Home</a>
                        <div className={'menu-item'} onMouseEnter={(e) => showMenu('progects', e)} onMouseLeave={(e) => hideMenu('progects', e)}>
                            <a href="#">Progects</a>
                            {tooltip.progects && <div className={'tooltip'}>
                                <a href="#">1</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                            </div>}
                        </div>
                        <a href="#">Gallery</a>
                        <a href="#">Docs</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;