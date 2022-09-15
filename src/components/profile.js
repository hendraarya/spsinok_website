import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [data, setdata] = useState("");
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pengurusspsi/")
      .then((response) => {
        setdata(response.data.data[0]);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        // console.log("error:", err);
      });
  }, [data]);
  return (
    <div className="bg-gradient-to-r from-[#182b38] via-[#05395e] to-[#172d3c] h-180">
      <div className="flex-col sm:p-16 p-9 text-white ">
        <div className="text-start font-bold text-2xl uppercase font-sans sm:text-4xl">
          Pimpinan unit kerja
        </div>
        <div className="">PUK SP KEP SPSI | PT. NOK Indonesia</div>
        <div>Periode {data.id_priode}</div>
      </div>

      <div className="flex flex-col text-white">
        <div className="bg-[#354b5b] h-40 mx-4 rounded-lg"></div>
        <div>{data.employee_name}</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Profile;
