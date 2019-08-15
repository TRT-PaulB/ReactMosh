import React from 'react';
import _ from 'lodash';  // lodash is optimized version of the underscore javascript library

const Pagination = (props) => {  
    // nav>ul.pagination>li.page-item>a.page-link; 

    const {numItemsPerPage, totalItems} = props;
    const numPages = Math.ceil(totalItems / numItemsPerPage);
    if (numPages === 1) return null;
    const pages = _.range(1, numPages + 1);

    return <nav>
                <ul className="pagination">

                     {pages.map(page => 
                        <li key={page} className="page-item">
                            <a  className="page-link" href="#">{page}</a>
                        </li>
                    )}
                    
                </ul>
            </nav>;
};
 
export default Pagination;


