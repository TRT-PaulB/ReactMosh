import React from 'react';
import _ from 'lodash';  // lodash is optimized version of the underscore javascript library

const Pagination = (props) => {  
    // markup shorthand not working.....nav>ul.pagination>li.page-item>a.page-link; 
    const {numItemsPerPage, totalItems, onPageChange, currentPage} = props;
    const numPages = Math.ceil(totalItems / numItemsPerPage);
    if (numPages === 1) return null;
    const pages = _.range(1, numPages + 1);

    return <nav>
                <ul className="pagination">
                     {pages.map(page => 
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item" }>
                            <a onClick={() => onPageChange(page)} className="page-link" href="#">{page}</a>
                        </li>
                    )}
                    
                </ul>
            </nav>;
};
 
export default Pagination;


