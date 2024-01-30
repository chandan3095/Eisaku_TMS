import React from "react";

const CustomModal = ({ showModal, handleCloseModal, child, modalSize, modalTitle, onSubmit }) => {

   return (
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="modal-default">
         <div className={`modal-dialog ${modalSize}`}>
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title">{modalTitle}</h4>
                  <button
                     type="button"
                     className="close"
                     data-dismiss="modal"
                     aria-label="Close"
                     onClick={handleCloseModal}
                  >
                     <span aria-hidden="true">×</span>
                  </button>
               </div>
               <div className="modal-body">
                  {child}
               </div>
               <div className="modal-footer justify-content-center">
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => {
                        if (onSubmit) {
                           onSubmit()
                        } else {
                           handleCloseModal()
                        }
                     }}

                  >
                     Submit
                  </button>
               </div>
            </div>
            {/* /.modal-content */}
         </div>
         {/* /.modal-dialog */}
      </div>
   );
}

export default CustomModal;
