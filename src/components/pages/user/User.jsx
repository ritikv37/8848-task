import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import userImg from "../../../assests/user/user.jpg"
import { DotPulse } from '@uiball/loaders';
import { useDispatch, useSelector } from 'react-redux';
import { specificUser, updateUser } from '../../store/user/action';
import { useLocation, useNavigate } from 'react-router-dom';


const User = () => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.user)
    const navigate = useNavigate()
    

    const userName = useLocation()
    const name = userName.state.userName

    const [user, setUser] = useState({})
    const onchangeEvent = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })

    }

    const updateEvent = () => {
        const updateData = {
            userName: name,
            userData: user
        }
        dispatch(updateUser(updateData))
        navigate("/dashboard/list")
    }

    useEffect(() => {

        dispatch(specificUser(name))
        setTimeout(() => {

            setLoading(false)
        }, 1000);

    }, [dispatch])

    useEffect(() => {
        setUser(data.user)
    }, [data])


    return (
        <div className='mt-20 flex w-full'>
            {
                loading ? <div className='h-[50vh] flex justify-center items-center m-auto'>
                    <DotPulse
                        size={40}
                        speed={1.3}
                        color="blue"
                    /></div> :
                    <>
                        {
                            user.length < 0 ? <></> :
                                <>
                                    <div className='w-[45%]'>
                                        <img src={userImg} className='w-full' alt="" />
                                    </div>
                                    <div className='m-auto'>
                                        <div className=''>
                                            <h1 className='text-4xl  pb-5'>User</h1>
                                        </div>
                                        <div className='w-full my-5'>
                                            <TextField className='w-[20rem]' onChange={onchangeEvent} name='name1' value={user.name1} id="outlined-basic" label="Name" variant="standard" />
                                        </div>
                                        <div className='w-full my-5'>
                                            <TextField className='w-[20rem]' onChange={onchangeEvent} name='age' value={user.age} id="outlined-basic" label="Age" variant="standard" />
                                        </div>
                                        <div className='w-full my-5'>
                                            <TextField className='w-[20rem]' onChange={onchangeEvent} name='designation' value={user.designation} id="outlined-basic" label="designation" variant="standard" />
                                        </div>
                                        <div className='w-full my-5'>
                                            <FormControl className='w-[20rem]' variant="standard" fullWidth >
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    name='gender'
                                                    id="demo-simple-select"
                                                    value={user.gender}
                                                    label="Age"
                                                    onChange={onchangeEvent}
                                                >
                                                    <MenuItem value={'Male'}>Male</MenuItem>
                                                    <MenuItem value={'Female'}>Female</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className='w-full my-5'>
                                            <TextField className='w-[20rem]' onChange={onchangeEvent} name='company_name' value={user.company_name} id="outlined-basic" label="Company Name" variant="standard" />
                                        </div>
                                        <div>
                                            <button className='py-2 px-5 bg-blue-500 text-white rounded' onClick={updateEvent}>Submit</button>
                                        </div>
                                    </div>
                                </>
                        }


                    </>

            }

        </div>
    )
}

export default User