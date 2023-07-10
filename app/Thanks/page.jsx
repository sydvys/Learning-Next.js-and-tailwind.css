import React from "react";

const Thanks = () => {
  return (
    <div>
      <h1 className="text-[#ff5f53] font-light text-2xl">Thanks</h1>

      <div className=" text-white text-sm ">
        <p className="py-5">
          First, we would like to express our special appreciation to all
          authors, editors and other compilers of the dictionaries, which were
          used in the application, for their immense and painstaking work.
        </p>

        <div>
          <p className="py-5">
            Furthermore, we heartily thank everyone who directly participated in
            the project:
          </p>
          <ul className="list-disc">
            <li>
              The vise-president of Azerbaijan National Academy of Sciences,
              doctor of philological sciences, professor Habibbayli Isa Akbar
              oglu for supporting the idea of the project;
            </li>
            <li>
              The Director of Institute of Linguistics named after Nasimi of
              Azerbaijan National Academy of Sciences, doctor of philological
              sciences, professor Naghisoylu Mohsun Zellabdin oglu for providing
              an opportunity to use the dictionaries compiled by Institute;
            </li>
            <li>
              The students of Azerbaijan University of Languages – Samira
              Aliyeva Rauf and Javidan Javanshirli Fakhri, for their voluntary
              and dedicated work on preparing e-versions of the dictionaries
              used in the application.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
