import React from 'react'

const NavPage = (props) =>{
    return (
      <header className="flex justify-center m-10 items-center gap-10">
        <p>Page: {props.ActualPage} </p>
        <div className='flex gap-4'>
          { props.ActualPage > 1 ? (
            <div className='flex gap-4'>
              <button
                className="btn btn-primary btn-sm"
                onClick={() =>  props.setPage( props.ActualPage - 1 )}
                >
                Back
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() =>  props.setPage( props.ActualPage + 1 )}
                >
                Next
              </button>
            </div>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() =>  props.setPage( props.ActualPage + 1 )}
                >
                Next
              </button>
            )
          }
        </div>
      </header>
    );
  }

  export default NavPage


