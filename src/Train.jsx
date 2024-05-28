import React from "react";
import Swal from "sweetalert2";

const Train = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://assets-global.website-files.com/5fbe376a36d4106214faaf3c/6205a3a7c8390c791df4025d_20220210-Training%20Data%20vs%20Prediction%20Data_Blog%20Thumbnail%20Image.png"
            alt="train image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Upload your dataset</h2>
          <p>Training will start once you upload your dataset</p>
          <div className="card-actions">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
              Train Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Upload Dataset</h3>
                <form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    Swal.fire("Dataset uploaded for model execution.");
                  }}>
                  <input type="file" id="myFile" name="filename" className="file-input file-input-bordered w-full max-w-xs" />
                  <input onClick={() => document.getElementById("my_modal_1").close()} type="submit" className="btn mt-4" />
                </form>
                <div className="modal-action">
                  
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Train;
