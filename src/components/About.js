import React, { useEffect } from 'react'
import './about.css'
import aboutImg from '../assets/aboutrecipe.jpeg'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import bg3 from '../assets/homeBG3.jpeg'


function About() {
    const { ref, inView } = useInView({
        threshold:0.2
    })
    const animate1 = useAnimation()
    const animate2=useAnimation()
    useEffect(() => {
        if (inView) {
            animate1.start({
                y: 0,
                transition:{duration:0.7}
            })
            animate2.start({
                y: 0,
                transition:{duration:0.7}
            })
        } else {
            animate1.start({
                y: '200%',
                transition:{duration:0.7}
            })
            animate2.start({
                y: '200%',
                transition:{duration:0.7}
            })
        }
    }, [inView, animate1, animate2])
return (
    <div className='container-fluid p-0 overflow-hidden'>
        <div className=' row p-5 aboutPage d-flex align-items-center '>
            <div style={{ fontFamily: 'Pirata One, cursive', color: 'white' }} className='col-md-3 col-5 p-0 aboutHead '>
        About
            </div>
        </div>
        <div style={{ backgroundColor: '#fff' }} ref={ref} className=' row p-5 d-flex flex-column flex-md-row justify-content-around' >
<motion.div  animate={animate1}  className='col-md-5 col-12 d-flex p-0 flex-column justify-content-center'>
                <span style={{fontFamily:'Mukta, sans-serif',textTransform:'uppercase',letterSpacing:'3px'}} className='col-12 receipeHouse mb-3'>Recipe House</span>
                <h1 className='col-12' style={{ fontFamily: 'Dosis, sans-serif',color:'#991b1f' }}>Welcome to <span style={{ fontFamily: 'Pirata One, cursive',color:'black' }}>Cooclicious</span></h1>
                <p style={{ fontFamily: 'Dosis, sans-serif' }} className='col-12 lh-lg m-0 '>Quality the nunc bibe endum in finibus elit eget they solli citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend tortor orci eu ornare tortor semta. Duis scelerisque the nise duru the look. Liwense eu nunc bibe endum in finibus elit eget the solli citudin elit. Drae tnea rutierum in lacus. <br></br> <br></br>
                Duis scelerisque the nibhse drana moss pulvinar laie. Quality the biberon endumn finbus elit egethe solli citudin elit. Phasellus rutrum inle lacusut euismod. Vestibue eleifend tortor eu misse endumin finbus elit eget the soli citudin elit. <br></br><br></br>
                Winta the nunc bibe endum in finibus elit eget they solli citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend tortor orci ornare torte sempeni. Luiste scelerisque the nise duru the look.</p>
            </motion.div>
            <motion.div animate={animate2} className='col-md-5 col-12 d-flex flex-column p-0 row-gap-3 '>
                <div className='col-12 rounded overflow-hidden'>
                    <img className='img-fluid' alt='img' src={ bg3} />
                </div>
                <div className='col-12 d-flex justify-content-between '>
                    <div className='col-6 rounded overflow-hidden'>
                        <img alt='img' className='img-fluid' src={ aboutImg} />
                    </div>
                    <div className='col-5 downRightBot'>
                        <span className='circle'></span>
                        <div className='Year d-flex flex-column  '>
                            <span style={{fontFamily:'Pirata One, cursive'}} className='col-12 d-flex  align-items-start number'>25</span>
                            <span style={{fontFamily:'Mukta, sans-serif',textTransform:'uppercase',fontSize:'14px',backgroundColor:'white'}} className='col-12'>Years of experience</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
)
}

export default About