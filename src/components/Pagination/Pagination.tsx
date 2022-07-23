import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css';

interface PaginationProps {
  page: number;
  setPage: (page:number) => void;
}


const Pagination : React.FC<PaginationProps> = ({page,setPage }) => {

  const handlePagination = (e:any ) => {
    setPage(e.nextSelectedPage + 1);
    window.location.reload();
  }
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        className="flex justify-center h-[10vh] items-center text-white  text-2xl w-screen"
        initialPage={page-1}
        nextLabel={`${page < 42 ? ' next >' : ''}`}
        onClick={ (e) => handlePagination(e)}
        pageRangeDisplayed={5}
        pageCount={42}
        previousLabel={`${page > 1 ? "< previous" : ''}`}
      />
    </>
  )
}

export default Pagination