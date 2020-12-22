import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


export default function PaginationComponent(props){

    let isOnFirstPage = true;
    let isOnLastPage = false;
    if(props.pageNo != 1){
        isOnFirstPage = false;
    }

    if(props.pageNo == props.totalPages){
        isOnLastPage = true;
    }
    function handlePageChange(event, page){
        // console.log(event.target);
        console.log(page);
        props.updatePageNo(page);
    }

    return (
        props.totalPages? 
        <div style={{margin: "auto"}}>
         <Pagination 
            count={props.totalPages} 
            variant="outlined" 
            hidePrevButton={isOnFirstPage}
            hideNextButton={isOnLastPage}
            size="large" 
            shape="rounded" 
            onChange={handlePageChange}
        />
        </div>
        :
        <div></div>
    );
}