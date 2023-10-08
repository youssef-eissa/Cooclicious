import React from 'react'
import './menu.css'
import { useGetAllMealsQuery } from '../redux/mealsAPI'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { singleMealObject, resetObj } from '../redux/singleMeal'

function Menu() {
    const { data, isSuccess } = useGetAllMealsQuery()
    const dispatch = useDispatch()
    function handleSingleMeal(Meal) {
        const filteredMeal = data.meals.filter(neededMeal => {
            return neededMeal.strMeal === Meal.strMeal
        })
        dispatch(resetObj())
        dispatch(singleMealObject(filteredMeal))
        window.scrollTo({top:0,behavior:'smooth'})
    }
return (
    <div  className='container-fluid p-0'>
        <div className='row menuPage d-flex align-items-center p-md-5 p-2'>
            <div style={{ fontFamily: 'Pirata One, cursive', color: 'white' }} className='col-md-6 col-12 d-flex flex-column menuHead'>
                <span className='col-12'>FLAVOR LIST</span>
                <span className='col-12'>OUR MENU AND TODAY'S MENU</span>
    </div>
        </div>
        <div style={{ backgroundColor: '#f8f4f3' }} className='row '>
            <div  className=' col-12 p-md-5 p-2 d-flex flex-column menu align-items-center overflow-hidden'>
                <h1 className='col-12 text-center'><span>Menu</span> list</h1>
                <div className='col-9 d-flex flex-column'>
                    <div className='col-12 d-flex categories mt-5'>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration:2}}
                            className='col-12 d-flex column-gap-3 row-gap-3 justify-content-center flex-wrap'>
                            {isSuccess&&data.meals.map(meal => {
                            return <Link to='/cooclicious/singlemeal' onClick={()=>handleSingleMeal(meal)} style={{textDecoration:'none'}} key={meal.idMeal} className='col-md-3 col-10 mealCon d-flex flex-column rounded overflow-hidden'>
                                <div className='mealImg overflow-hidden col-12'>
                                    <img alt='mealImg' src={`${meal.strMealThumb}`} className='img-fluid' />
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
    </div>
)
}

export default Menu