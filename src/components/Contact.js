import React from 'react'
import './contact.css'
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Contact() {
    const schema = yup.object().shape({
        fullname: yup.string().required('Please enter your name'),
        email: yup.string().email().required('Please enter your email'),
        message: yup.string().required('Please enter your message'),
    })
    const {values,handleSubmit,handleReset,touched,errors,handleChange,handleBlur} =useFormik({
        initialValues: {
            fullname:'',
            email:'',
            message:''
        },
        validationSchema:schema
    })
    function handleForm(e){
        e.preventDefault()
        handleSubmit()
        if (values.fullname.length>0 && values.email.length>0 && values.message.length>0){
            handleReset()
        }
    }
return (
    <div className='container-fluid'>
        <div className='row'>
            <div style={{ fontFamily: 'Pirata One, cursive', color: 'white' }} className='contactHead col-12 d-flex flex-column justify-content-center p-5 '>
                <h1 className='col-md-3 col-12'>Contact Us</h1>
                <span className='col-md-3 col-12'>HOW TO FIND OUR Cooclicious</span>
        </div>
        </div>
        <div style={{backgroundColor:'white'}} className='row  contactContainer'>
            <div className='col-12 d-flex flex-column-reverse flex-md-row p-md-5 p-2'>
                <div style={{ fontFamily: 'Pirata One, cursive' }} className=' col-md-6 col-12 d-flex flex-column mt-2 mt-md-0 '>
                    <div className='col-12 d-flex flex-wrap contactInfo'>
                        <h1 className='col-12'>Contact <span>Info</span></h1>
                        <div className='col-12 mt-3 d-flex flex-wrap infoCon'>
                            <div className='col-12 d-flex'>
                                <div className='col-2 col-md-1 p-1 d-flex justify-content-center align-items-center'><PhonelinkRingOutlinedIcon sx={{color: '#991b1f'}} fontSize='large' /></div>
                                <div className='col-10 phoneNum d-flex flex-column'>
                                    <h3 className='col-12'>Phone Text</h3>
                                    <span style={{ fontFamily: 'Mukta, sans-serif' }} className='col-12'>+1 203-123-0606</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-4 d-flex flex-wrap infoCon'>
                            <div className='col-12 d-flex'>
                                <div className='col-2 col-md-1 p-1 d-flex justify-content-center align-items-center'><LocationOnOutlinedIcon sx={{color: '#991b1f'}} fontSize='large' /></div>
                                <div className='col-10 phoneNum d-flex flex-column'>
                                    <h3 className='col-12'>Address</h3>
                                    <span style={{ fontFamily: 'Mukta, sans-serif' }} className='col-4'>24 King St, Charleston, SC 29401 USA</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-4 d-flex flex-wrap infoCon'>
                            <div className='col-12 d-flex'>
                                <div className='col-2 col-md-1 p-1 d-flex justify-content-center align-items-center'><AlternateEmailOutlinedIcon fontSize='large' sx={{color: '#991b1f'}} /></div>
                                <div className='col-10 phoneNum d-flex flex-column'>
                                    <h3 className='col-12'>Email</h3>
                                    <span style={{ fontFamily: 'Mukta, sans-serif' }} className='col-5'>foodreceipe@cooclicious.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleForm} className='col-12 mt-5 d-flex justify-content-around flex-wrap'>
                        <div className='col-5 d-flex flex-column'>
                            <input
                            className='col-12 p-2'
                            name='fullname'
                            value={values.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Full Name'
                        />
                        {touched.fullname && errors.fullname &&<span style={{color:'red'}} className='col-12'>{errors.fullname}</span>}
                        </div>
                        <div className='col-5 d-flex flex-column'>
                            <input
                            className='col-12 p-2'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Email'
                        />
                        {touched.email && errors.email &&<span style={{color:'red'}} className='col-12'>{errors.email}</span>}
                        </div>
                        <textarea className='col-11 mt-4 p-2'
                        placeholder='message'
                        value={values.message}
                        name='message'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        ></textarea>
                        {touched.message && errors.message &&<span style={{color:'red'}} className='col-11'>{errors.message}</span>}

                        <button className='col-3 rounded justify-content-center d-flex mt-4 p-2' type='submit'>Submit</button>
                    </form>
                </div>
                <div className='col-md-6 col-12 d-flex justify-content-center p-md-5 p-2'>
                    <div className='col-12 d-flex justify-content-center align-self-start wh'>
                        <div style={{ backgroundColor: '#f8f4f3' }} className='col-md-10 col-12 rounded working-hours p-md-4 p-2 d-flex flex-column '>
                    <h6 style={{ fontFamily: 'Mukta, sans-serif' }} className='col-12 text-center mb-4'>CALL FOR RESERVATIONS</h6>
                    <h1 className='col-12 text-center pb-4 ' style={{ fontFamily: 'Pirata One, cursive', color: '#991b1f' }}>Opening Hours</h1>
                    <div className='times d-flex flex-wrap col-12 my-5'>
                    <div className='left col-6 d-flex flex-column'>
                        <span className='col-12 text-center'>Sunday to Tuesday</span>
                        <span style={{fontFamily: 'Pirata One, cursive',color:'#991b1f',fontSize:'30px'}} className='col-12 text-center'>10:00</span>
                        <span style={{fontFamily: 'Pirata One, cursive',color:'#991b1f',fontSize:'30px'}} className='col-12 text-center'>22:00</span>
                        </div>
                        <div className='right col-6 d-flex flex-column'>

                        <span className='col-12 text-center'>Friday to Saturday</span>
                            <span style={{ fontFamily: 'Pirata One, cursive', color: '#991b1f', fontSize: '30px' }} className='col-12 text-center'>12:00</span>
                            <span style={{ fontFamily: 'Pirata One, cursive', color: '#991b1f', fontSize: '30px' }} className='col-12 text-center'>19:00</span>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <Link style={{ fontFamily: 'Pirata One, cursive' }} className='col-6 text-center mt-5 p-2 tel' to='tel:1-2343-0808'>
                                <span className='col-12 position-relative z-3'>1-2343-0808</span>
                                <span className='overLay z-2'></span>
                                <span className='overLay2 z-1'></span>
                                </Link>
                            </div>
                </div>
                </div>

                    </div>
                </div>
        </div>
        </div>
        <div style={{backgroundColor:'white'}} className='row googleMap'>
            <div className='col-12 p-md-5 p-2 d-flex justify-content-center '>
                <iframe className='col-md-10 col-11' title='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.757863578585!2d-79.93459192399605!3d32.77215888423376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a1ae84ff639%3A0xe5c782f71924a526!2s24%20King%20St%2C%20Charleston%2C%20SC%2029401%2C%20USA!5e0!3m2!1sen!2seg!4v1696679649549!5m2!1sen!2seg" width="800" height="600"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    </div>
)
}

export default Contact