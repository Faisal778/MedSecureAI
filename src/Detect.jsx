import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Detect = () => {
  const handleSubmit = () => {
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>;
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePeJraaksiNPKG-HSblgT7-qTN_geN-RKJA&s"
            alt="train image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Upload images</h2>
          <p>Upload images that you want to check for disease</p>
          <div className="card-actions">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
              Uplaod Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Detect Disease</h3>
                <form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={(e) => {
                    e.preventDefault();
                    Swal.fire({
                      html: `
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr >
                                <th colspan="1">index<th>
                                <th colspan="2">Disease Name</th>
                                <th colspan="2">Possibility</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-base-200">
                            <th colspan="2">1</th>
                                <th colspan="2">AIG</td>
                                <th colspan="2">70%</td>
                               
                            </tr>
                            <tr>
                            <th colspan="2">2</th>
                                <th colspan="2">type B gastritis</td>
                                <th colspan="2">23%</td>
                               
                            </tr>
                            <tr>
                            <th colspan="2">3</th>
                                <th colspan="2">CNAG </td>
                                <th colspan="2">7%</td>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>`,
                    });
                  }}>
                  <input type="file" id="myFile" name="filename" className="file-input file-input-bordered w-full max-w-xs" />
                  <input onClick={() => document.getElementById("my_modal_1").close()} type="submit" className="btn mt-4" />
                </form>

                <div className="modal-action"></div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
