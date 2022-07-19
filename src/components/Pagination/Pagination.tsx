import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css';

type Props = { 
  page:number;
  setPage: (page:number) => void;
}


const Pagination : React.FC<Props> = ({page,setPage }) => {


  const handlePagination = (e:any ) => {
    setPage(e.nextSelectedPage + 1);
    window.location.reload();
  }
  return (
    <>
      <ReactPaginate
        className="h-[10vh] w-screen text-white flex justify-center items-center text-2xl "
        breakLabel="..."
        nextLabel={`${page < 42 ? ' next >' : ''}`}
        onClick={ (e) => handlePagination(e)}
        pageRangeDisplayed={5}
        pageCount={42}
        initialPage={page-1}
        previousLabel={`${page > 1 ? "< previous" : ''}`}
      />
    </>
  )
}

export default Pagination