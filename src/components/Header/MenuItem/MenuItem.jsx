import React, {useState} from 'react';
import classes from './MenuItem.module.css';

const MenuItem = ({name}) => {

    const [tooltip, setTooltip] = useState(false);

    return (
        <div className={classes.menuItem} onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>
            <a href="#">{name}</a>
            {tooltip && <div className={classes.tooltip}>
                <a href="#">1</a>
                <a href="#">3</a>
                <a href="#">4</a>
            </div>}
        </div>
    );
};

export default MenuItem;