import React from 'react';
import logo from "../assets/logo.png";
import vin from "../assets/vin.png";
import lund from "../assets/lund.png";
import health from "../assets/health.png";
import three from "../assets/three.png";
import Katarina from "../assets/Katarina.png";

const Home = () => {
  return (
    <div className="relative min-h-screen">
     
      <div className="absolute inset-0 bg-bgColor z-0"></div>

      
      <div className="relative z-10 grid grid-cols-2 bg-transparent text-white items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center justify-center text-white">
         
          <h1 className="text-4xl font-semibold text-center mb-8">
            Clinical Intelligence for <br /> Precision Mental Healthcare
          </h1>

         
          <ul className="space-y-4 mb-10">
            <li className="flex items-center">
              <span className="text-green-400 bg-white rounded-full mr-4">✔️</span>
              <p className="text-lg">
                Developed from research at Lund University.
              </p>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 bg-white rounded-full mr-4">✔️</span>
              <p className="text-lg">
                Identifies the type and severity of depression, anxiety and
                stress and their symptoms.
              </p>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 bg-white rounded-full mr-4">✔️</span>
              <p className="text-lg">
                Shows the effect of medication and treatment for precision
                medicine and effective evaluation.
              </p>
            </li>
          </ul>

         
          <p className="text-center text-gray-300 mb-12 max-w-lg">
            Insight is a tool that facilitates and improves everyday life for
            healthcare providers and their patients.
          </p>

         
          <div className="space-y-4 w-full max-w-xs">
            <button className="w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              Insight for General Practitioners
            </button>
            <button className="w-full py-3 border-2 border-green-400 text-white rounded-full hover:bg-green-500 transition">
              Insight for Psychologists
            </button>
          </div>
        </div>

        <img
          src={logo}
          alt="Logo"
          className=" w-full object-cover rounded-t-md opacity-100 transition-all duration-1000"
        />
      </div>

     
      <div className="relative z-10 container mx-auto px-6 py-12">
       
       
          <img src={three} alt="three" className="w-full object-cover" />

        

     
        <div className="bg-white text-black p-8 ">
          <div className="text-gray-800">
            <h1 className="text-5xl font-semibold text-center leading-tight mb-8">
              A medical <br /> device for <br /> precision <br /> healthcare
            </h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-6">
              At the heart of Precision Mental Healthcare is the clinical assessment. Measurements before, during, and after the treatment make it possible to tailor the most suitable treatment for the right person, at the right time, in the long run.
            </p>
            <p className="text-base text-center text-gray-500 max-w-2xl mx-auto">
              At the heart of Precision Mental Healthcare is the clinical assessment. Measurements before, during and after the treatment make it possible to tailor the most suitable treatment for the right person, at the right time, in the long run.

              Minding Health's clinical method was developed at Lund University and is based on data from over 10,000 patients. The analysis gives you clear indications of the type and degree of depression, anxiety or stress with a precision that far surpasses clinical rating scales and interviews.

              In the service, the patient has to answer a number of questions. We analyze the responses using AI technology and deliver a clinical assessment for depression, anxiety and stress.

              We contribute to developing the care of mental illness by relieving the burden on doctors and psychologists with an effective assessment, based on information that the service collects from the patient. The results are delivered directly to you as a healthcare provider and provide deep insights into each individual patient as well as into your business.

              Get in touch and we can tell you more, answer your questions and demonstrate how the tool can contribute to your work!            </p>
          </div>
          <div className="flex items-center bg-gray-50 rounded-full p-4 shadow-md max-w-md mx-auto mt-12">
          <img
            src={Katarina}
            alt="Katarina Kjell"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Katarina Kjell</h2>
            <p className="text-sm text-gray-500">Clinical Psychologist</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
