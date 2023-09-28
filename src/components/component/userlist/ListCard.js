import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
export const ListCard = ({ data }) => {
    const navigate = useNavigate()
    const editEvent = (userName) => {
        navigate("/dashboard/user", { state: { userName } })
    }
    return (
        <div className='list-row'>
            <table className='w-full border-collapse border border-blue-300 '>
                <thead className='bg-blue-200'>
                    <tr>
                        <th className='px-4 py-3 border text-start'>No.</th>
                        <th className='px-4 py-3 border text-start'>Name</th>
                        <th className='px-4 py-3 border text-start'>Age</th>
                        <th className='px-4 py-3 border text-start'>Gender</th>
                        <th className='px-4 py-3 border text-start'>Designation</th>
                        <th className='px-4 py-3 border text-start'>Company Name</th>
                        <th className='px-4 py-3 border text-start pl-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elem, ind) => {
                            return (
                                <tr key={ind} className={ind % 2 === 1 ? "hover : bg-blue-100" : ""}>
                                    <td className='px-4 py-4 border'>{elem.id}</td>
                                    <td className='px-4 py-4 border'>{elem.name1}</td>
                                    <td className='px-4 py-4 border'>{elem.age}</td>
                                    <td className='px-4 py-4 border'>{elem.gender}</td>
                                    <td className='px-4 py-4 border'>{elem.designation}</td>
                                    <td className='px-4 py-4 border'>{elem.company_name}</td>
                                    <td className='px-4 py-4 border'>
                                        <button
                                            onClick={() => editEvent(elem.name1)}
                                            className='py-1 px-3 bg-gray-100 rounded hover:bg-gray-200'
                                        >
                                            <EditIcon sx={{fontSize:"15px",marginRight:"5px"}}/>
                                             Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }





                </tbody>
            </table>
        </div>
    );
};
