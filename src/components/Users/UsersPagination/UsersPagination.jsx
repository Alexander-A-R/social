import React from 'react';
import classes from './UsersPagination.module.css';


const UsersPagination = ({pagesCount, pageSize, currentPage, switchPage}) => {
    const createPageList = () => {
        const pages = [];

        if (pagesCount > pageSize) {

            if ((currentPage - (parseInt(pageSize / 2) + 1) < 1)) {
                for (let n = 0; n < pageSize; n++) {
                    pages[n] = n + 1;
                }
            }
            else if (currentPage + (parseInt(pageSize / 2) + 1) > pagesCount) {
                let startPage = pagesCount - pageSize;
                for (let n = 0; n < pageSize; n++) {
                    pages[n] = ++startPage;
                }
            }
            else {
                let startPage = currentPage - parseInt(pageSize / 2);
                for (let n = 0; n < pageSize; n++ ) {
                    pages[n] = startPage++;
                }
            }
        } else {
            for (let n = 0; n < pagesCount; n++) {
                pages[n] = n + 1;
            }
        }

        return pages;
    };

    return (
        <div className={classes.pagination}>
            {createPageList().map((page, index) => <span key={index}
                                                                   className={`${classes.link} ${page === currentPage && classes.active}`}
                                                                   onClick={() => switchPage(page)}
            >
                {page}
            </span>)}
        </div>
    );
};

export default UsersPagination;
