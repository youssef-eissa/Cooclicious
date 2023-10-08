import React, { useEffect, useState } from 'react'
import bg1 from '../assets/homeBG.jpg'
import bg2 from '../assets/homeBG2.jpeg'
import bg3 from '../assets/homeBG3.jpeg'
import bg4 from '../assets/homeBG4.jpeg'
import aboutImg from '../assets/aboutrecipe.jpeg'
import { singleMealObject,resetObj } from '../redux/singleMeal'
import { useGetAllMealsQuery } from '../redux/mealsAPI'
import { useDispatch } from 'react-redux'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    const { data, isSuccess } = useGetAllMealsQuery()
    const dispatch = useDispatch()
    const bgArray = [bg1, bg2, bg3, bg4]
    const [currentBg,setCurrent]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNum = Math.floor(Math.random() * bgArray.length)
            setCurrent(randomNum)
        }, 5000)
        return ()=>clearInterval(interval)
    })
    function handleSingleMeal(Meal) {
        const filteredMeal = data.meals.filter(neededMeal => {
            return neededMeal.strMeal === Meal.strMeal
        })
        dispatch(resetObj())
        dispatch(singleMealObject(filteredMeal))
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const { ref,inView} = useInView({
    threshold:0.1
    })
    const animate1 = useAnimation()
    useEffect(() => {
        if (inView) {
            animate1.start({
                opacity: 1,
                y:0,
                transition:{duration:0.7}
            })
        }else {
            animate1.start({
                opacity: 0,
                y:'50%',
                transition:{duration:0.7}
            })
            }
    },[inView,animate1])
return (
    <div className='container-fluid p-0 '>
        <div className='row home position-relative min-vh-100 overflow-hidden'>
        <div className='col-12 position-absolute w-100 h-100 z-1 '>
            <img alt='bg' className='img-fluid w-100 h-100' src={bgArray[currentBg]} />
        </div>
            <div  style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }} className='col-12 position-absolute z-2 w-100 h-100 '></div>
            <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{duration:1}}
                style={{ color: 'white' }} className='col-12 position-absolute w-100 h-100 z-3 d-flex p-0 justify-content-center align-items-center flex-column'>
                <span style={{  fontFamily: 'Dosis, sans-serif'}} className='col-md-6 col-12 text-center text-md-start head'>Welcome to <span style={{ fontFamily: 'Pirata One, cursive' }}>Cooclicious</span></span>
                <span style={{ fontFamily: 'Dosis, sans-serif' }} className='col-md-6 col-12 text-center text-md-start explore'>Explore our menu</span>
                <Link reloadDocument to='/menu' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} style={{ fontFamily: 'Dosis, sans-serif', textDecoration: 'none' }} className='toMenu col-md-2 col-6 mt-3 mt-md-0 d-flex py-3 justify-content-center rounded position-relative '>

                    <span className='col-12 position-absolute z-1 rounded menuoverlay'></span>

                    <span className='col-12 position-relative z-2 text-center'>Check out our menu</span>
                </Link>
            </motion.div>
        </div>

        <div style={{backgroundColor:'white'}} className='about row p-5 d-flex flex-column flex-md-row justify-content-around'>
            <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                transition={{duration:1}}
                className='col-md-5 col-12 d-flex p-0 flex-column justify-content-center'>
                <span style={{fontFamily:'Mukta, sans-serif',textTransform:'uppercase',letterSpacing:'3px'}} className='col-12 receipeHouse mb-3'>Recipe House</span>
                <h1 className='col-12' style={{ fontFamily: 'Dosis, sans-serif',color:'#991b1f' }}>Welcome to <span style={{ fontFamily: 'Pirata One, cursive',color:'black' }}>Cooclicious</span></h1>
                <p style={{ fontFamily: 'Dosis, sans-serif' }} className='col-12 lh-lg m-0 '>Quality the nunc bibe endum in finibus elit eget they solli citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend tortor orci eu ornare tortor semta. Duis scelerisque the nise duru the look. Liwense eu nunc bibe endum in finibus elit eget the solli citudin elit. Drae tnea rutierum in lacus. <br></br> <br></br>
                Duis scelerisque the nibhse drana moss pulvinar laie. Quality the biberon endumn finbus elit egethe solli citudin elit. Phasellus rutrum inle lacusut euismod. Vestibue eleifend tortor eu misse endumin finbus elit eget the soli citudin elit. <br></br><br></br>
                Winta the nunc bibe endum in finibus elit eget they solli citudin elit. Phaselu the rutrum in lacusu euismod. Vestibulum eleifend tortor orci ornare torte sempeni. Luiste scelerisque the nise duru the look.</p>
            </motion.div>
            <motion.div
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                transition={{duration:1}}
                className='col-md-5 col-12 d-flex flex-column p-0 mt-3 mt-md-0 row-gap-3 '>
                <div className='col-12 rounded overflow-hidden'>
                    <img className='img-fluid' alt='img' src={ bg3} />
                </div>
                <div className='col-12 d-flex justify-content-between '>
                    <div className='col-6 rounded overflow-hidden'>
                        <img alt='img' className='img-fluid' src={ aboutImg} />
                    </div>
                    <div className='col-5 downRightBot'>
                        <span className='circle'></span>
                        <div className='Year d-flex flex-column '>
                            <span style={{fontFamily:'Pirata One, cursive'}} className='col-12 d-flex  align-items-start number'>25</span>
                            <span style={{fontFamily:'Mukta, sans-serif',textTransform:'uppercase',fontSize:'14px',backgroundColor:'white'}} className='col-12'>Years of experience</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        <div style={{backgroundColor:'#f8f4f3'}} className='row menu'>
            <div ref={ref} className=' p-0 col-12 p-5 d-flex flex-column menu align-items-center overflow-hidden'>
                <h1 className='col-12 text-center'><span>Menu</span> list</h1>
                <div className='col-8 d-flex flex-column'>
                    <div className='col-12 d-flex categories mt-5'>
                        <motion.div
                            animate={animate1}
                            className='col-12 d-flex column-gap-3 row-gap-3 justify-content-center flex-wrap'>
                            {isSuccess&&data.meals.slice(0,9).map(meal => {
                            return <Link reloadDocument to='/singlemeal' onClick={()=>handleSingleMeal(meal)} style={{textDecoration:'none'}} key={meal.idMeal} className='col-md-3 col-12 mealCon d-flex flex-column rounded overflow-hidden'>
                                <div className='mealImg overflow-hidden col-12'>
                                    <img alt='mealImg' src={ `${meal.strMealThumb}`} className='img-fluid' />
                                </div>
                                <div style={{backgroundColor:'white',color:'black',fontFamily: 'Dosis, sans-serif'}} className='p-3 col-12 d-flex flex-column'>
                                    <div className='col-12'>Name : <span style={{ color: '#991b1f', fontWeight: 'bold', }}> {meal.strMeal}</span> </div>
                                    <div className='col-12'>Category : <span style={{ color: '#991b1f', fontWeight: 'bold', }}> {meal.strCategory}</span> </div>
                                    <div className='col-12'>Area : <span style={{color:'#991b1f',fontWeight:'bold',}}> { meal.strArea}</span> </div>
                                </div>
                            </Link>
                        })}

                        </motion.div>
                </div>
                </div>

            </div>
        </div>
        <div className='row'>
            <div className='col-12 p-0 working-hours-Con'>
                <div style={{ backgroundColor: '#f8f4f3' }} className='col-md-3 col-10 rounded working-hours p-4 d-flex flex-column '>
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
                            <Link style={{ fontFamily: 'Pirata One, cursive' }} className='col-6 text-center p-2 tel' to='tel:1-2343-0808'>
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
)
}


export default Home