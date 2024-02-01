import React from "react";
import CustomTextArea from "../CustomTextArea/CustomTextArea";

const CustomModal = ({
   title = "Reject Remarks",
   showModal,
   handleCloseModal,
   child,
   modalSize,
   onSubmit,
}) => {
   return (
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} id="modal-default">
         <div className={`modal-dialog ${modalSize}`}>
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title">{title}</h4>
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
               <div
                  className="modal-body"
                  style={{ maxHeight: "70vh", overflowY: "auto" }}
               >
                  {child}
               </div>
               <div className="modal-footer justify-content-center">
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => {
                        if (onSubmit) {
                           onSubmit();
                        } else {
                           handleCloseModal();
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
};

export default CustomModal;
