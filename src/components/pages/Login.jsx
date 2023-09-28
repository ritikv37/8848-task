import React, { useState } from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import loginimg from '../../assests/login/login.jpg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../store/user/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(data)
  const validationSchema = Yup.object({
    usr: Yup.string().required('Email is required'),
    pwd: Yup.string().required('Password is required'),
  });



  const formik = useFormik({
    initialValues: {
      usr: '',
      pwd: '',
    },
    validationSchema,
    onSubmit: (values) => {

      dispatch(LoginUser(values)).then((res) => {
        const response = res.payload.message.msg
        if (response === "success") {
          toast.success('Login Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setTimeout(() => {
            localStorage.setItem("token", res.payload.message.data.access_token)
            navigate("/dashboard/list")
          }, 1000);
        } else if (response === "error") {
          toast.error('Invalid Username And Password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      })

    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex h-[100vh] items-center ">
      <div className="w-[45%]">
        <img src={loginimg} className="w-full" alt="" />
      </div>
      <div className="m-auto p-2 login-div">
      <div className='flex justify-center'>
          <img src="https://careers.8848digital.com/image/l1/png/logo.png" alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold pb-5'>Login</h1>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <div className="w-full my-5">
              <TextField
                className="w-[20rem]"
                onChange={formik.handleChange}
                name="usr"
                value={formik.values.usr}
                id="outlined-basic"
                label="User Name"
                variant="standard"
              />
              {formik.touched.usr && formik.errors.usr ? (
                <div className="text-red-500">{formik.errors.usr}</div>
              ) : null}
            </div>
            <div className="w-full my-5">
              <TextField
                className="w-[20rem]"
                onChange={formik.handleChange}
                name="pwd"
                value={formik.values.pwd}
                id="outlined-basic"
                label="Password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.pwd && formik.errors.pwd ? (
                <div className="text-red-500">{formik.errors.pwd}</div>
              ) : null}
            </div>
            <div>
              <Button
                type="submit"
                className="py-2 px-5 bg-blue-500 text-white rounded"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
