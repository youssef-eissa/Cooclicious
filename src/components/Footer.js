import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
return (
    <div className='container-fluid '>
        <div className='row footer'>
            <div className='col-12 d-flex flex-column flex-md-row up pb-3'>
                <div className='col-md-3 col-12 d-flex flex-column'>
                    <Link reloadDocument to='/' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className='col-12 link' style={{ fontFamily: 'Pirata One, cursive' }}>Cooclicious</Link>
                    <p className='col-9 my-4' style={{ fontFamily: 'Mukta, sans-serif', color: 'white' }}>Steakhouse the nunc bibe endum in finibus elit the solli citudin elit.</p>
                    <div className='col-md-9 col-12 d-flex justify-content-between'>
                        <Link className='col-2 d-flex justify-content-center align-items-center socialBox p-1'>
                            <FacebookOutlinedIcon className='social'/>
                        </Link>
                        <Link className='col-2 d-flex justify-content-center align-items-center socialBox p-1'>
                            <TwitterIcon className='social'/>
                        </Link>
                        <Link className='col-2 d-flex justify-content-center align-items-center socialBox p-1'>
                            <WhatsAppIcon className='social'/>
                        </Link>
                        <Link className='col-2 d-flex justify-content-center align-items-center socialBox p-1'>
                            <InstagramIcon className='social'/>
                        </Link>
                    </div>
                </div>
                <div className='col-md-3 col-12 d-flex phoneAndEmail flex-column align-items-center'>
                    <h4 className='col-7 mb-4 p-2 text-center' style={{ fontFamily: 'Pirata One, cursive' }}>Phone & Email</h4>
                    <span className='col-12 mb-2 text-center '>+1 203-123-0606</span>
                    <span className='col-12 text-center'>foodreceipe@cooclicious.com</span>
                </div>
                <div className='col-md-3 col-12 d-flex address flex-column align-items-center'>
                    <h4 className='col-7 mb-4 p-2 text-center' style={{ fontFamily: 'Pirata One, cursive' }}>Our Address</h4>
                    <span className='col-12 mb-2 text-center '>24 King St, Charleston, SC</span>
                    <span className='col-12 text-center'>29401 USA</span>
                </div>
                <div className='col-md-3 col-12 d-flex address flex-column align-items-center'>
                    <h4 className='col-7 mb-4 p-2 text-center' style={{ fontFamily: 'Pirata One, cursive' }}>Opening Hours</h4>
                    <span className='col-12 mb-2 text-center '>Mon-Thu: 10:00 PM - 22:00 PM</span>
                    <span className='col-12 mb-2 text-center '>Fri-Sat: 12:00 PM - 19:00 PM</span>
                    <span className='col-12 text-center'>Sunday: Closed</span>
                </div>
            </div>
            <div className='col-12 d-flex flex-column flex-md-row down py-5'>
        <span className='col-md-6 col-12'>© 2023 Cooclicious . All right reserved.</span>
        <span className='col-md-6 col-126 text-md-end text-start mt-3 mt-md-0'>Terms & Conditions</span>
            </div>
        </div>
    </div>
)
}

export default Footer