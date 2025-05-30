import React, { useState } from "react";
import { useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [data, setData] = useState([]);

    // Fetching data from server and storing in state function setData
    useEffect(() => {
        axios.get("http://localhost:5000/api/dealership/metrics")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Mapping Data */}
            {data?.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300 space-y-2 border border-gray-200"
                >
                    <h2 className="text-xl font-bold text-gray-800 text-center">{item?.Month}</h2>
                    <hr className="my-2 border-t border-gray-300" />


                    <div className="text-gray-700">
                        <span className="font-medium text-blue-500">New Sales:</span>{' '}
                        <span className="font-semibold">{item?.NewVehicleSales}</span>
                    </div>

                    <div className="text-gray-700">
                        <span className="font-medium text-yellow-500">Used Sales:</span>{' '}
                        <span className="font-semibold">{item?.UsedVehicleSales}</span>
                    </div>

                    <div className="text-gray-700">
                        <span className="font-medium text-green-500">Inventory:</span>{' '}
                        <span className="font-semibold">{item?.NewVehicleInventory}</span>
                    </div>

                    <div className="text-gray-700">
                        <span className="font-medium text-purple-500">Set Rate:</span>{' '}
                        <span className="font-semibold">{item?.AppointmentSetRate}%</span>
                    </div>

                    <div className="text-gray-700">
                        <span className="font-medium text-red-500">Close Rate:</span>{' '}
                        <span className="font-semibold">{item?.AppointmentCloseRate}%</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
