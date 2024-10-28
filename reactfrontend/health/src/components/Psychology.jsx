import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://mindinghealthbackend5-63fccc1580dc.herokuapp.com";

const Psychology = () => {
    const [data, setData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/patients/mental-disorders/`);
            setData(response.data);
        };
        fetchData();
    }, []);

    const handleChange = (field, value) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const queryRecords = async () => {
        const filterString = Object.keys(selectedOptions)
            .map((key) => `${key}=${encodeURIComponent(selectedOptions[key])}`)
            .join('&');

        if (filterString.length === 0) {
            alert("Please select at least one option.");
            return;
        }

        try {
            const response = await axios.get(`${API_BASE_URL}/api/patients/mental-disorders/?${filterString}`);
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    };

    return (
        <div className="p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-center text-bgColor">Psychology Records</h1>

            <form className="mb-6">
                {["Sadness", "Euphoric", "Exhausted", "Sleep disorder"].map((field) => (
                    <div key={field} className="mb-4">
                        <label className="block text-lg font-semibold">{field}</label>
                        <div className="flex space-x-6 mt-2">
                            {["Most-Often", "Usually", "Sometimes", "Seldom"].map((option) => (
                                <label key={option} className="flex items-center">
                                    <input
                                        type="radio"
                                        name={field}
                                        value={option}
                                        checked={selectedOptions[field] === option}
                                        onChange={() => handleChange(field, option)}
                                        className="mr-2 h-4 w-4 text-bgColor focus:ring-bgColor border-gray-300"
                                    />
                                    <span className="text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </form>

            <button onClick={queryRecords} className="bg-bgColor text-white py-2 px-6 rounded-lg hover:bg-bgColor transition duration-300">
                Submit
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center text-bgColor">Related Records</h2>
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-bgColor text-white text-left">
                            <th className="py-3 px-4 border-b ">Patient Number</th>
                            <th className="py-3 px-4 border-b ">Sadness</th>
                            <th className="py-3 px-4 border-b ">Euphoric</th>
                            <th className="py-3 px-4 border-b ">Exhausted</th>
                            <th className="py-3 px-4 border-b ">Sleep Disorder</th>
                            <th className="py-3 px-4 border-b ">Anorexia</th>
                            <th className="py-3 px-4 border-b ">Nervous Breakdown</th>
                            <th className="py-3 px-4 border-b ">Admit Mistakes</th>
                            <th className="py-3 px-4 border-b ">Overthinking</th>
                            <th className="py-3 px-4 border-b ">Concentration</th>
                            <th className="py-3 px-4 border-b ">Optimism</th>
                            <th className="py-3 px-4 border-b ">Expert Diagnosis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.patient_number} className="hover:bg-gray-100 transition duration-300">
                                <td className="py-2 px-4 border-b">{record.patient_number}</td>
                                <td className="py-2 px-4 border-b">{record.sadness}</td>
                                <td className="py-2 px-4 border-b">{record.euphoric}</td>
                                <td className="py-2 px-4 border-b">{record.exhausted}</td>
                                <td className="py-2 px-4 border-b">{record.sleep_disorder}</td>
                                <td className="py-2 px-4 border-b">{record.anorexia}</td>
                                <td className="py-2 px-4 border-b">{record.nervous_breakdown}</td>
                                <td className="py-2 px-4 border-b">{record.admit_mistakes}</td>
                                <td className="py-2 px-4 border-b">{record.overthinking}</td>
                                <td className="py-2 px-4 border-b">{record.concentration}</td>
                                <td className="py-2 px-4 border-b">{record.optimism}</td>
                                <td className="py-2 px-4 border-b">{record.expert_diagnosis}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Psychology;
