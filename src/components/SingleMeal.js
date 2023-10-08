import React from 'react'
import './singleMeal.css'
import { useSelector } from 'react-redux'


function SingleMeal() {
    const theMeal = useSelector(state => state.singleMeal.value)
return (
    <div className='container-fluid'>
        <div className='row theMeal'>
            <div className='col-12 head p-5 d-flex align-items-center'>
                <div style={{ fontFamily: 'Pirata One, cursive', color: 'white' }} className='col-4 nameOfMeal'>{ theMeal[0].strMeal} Recipe</div>
            </div>
            <div className='col-12 d-flex flex-wrap  justify-content-center justify-content-md-between align-items-center p-md-5 p-2 mealInfoCon'>
                <div className='col-md-3 col-10 mealImgInfo rounded overflow-hidden'>
                    <img alt='mealImg' src={ theMeal[0].strMealThumb} className='img-fluid' />
                </div>
                <p style={{ fontFamily: 'Dosis, sans-serif' }} className='col-md-7 col-11 text-center text-md-start my-3'>{theMeal[0].strInstructions}</p>
                <div className='col-md-6 col-12 d-flex flex-column align-items-center mx-auto ingredients p-3 '>
                    <h1 style={{ fontFamily: 'Pirata One, cursive', color: '#991b1f' }} className='col-12 text-center'>Ingredients</h1>
                    <div className='col-md-8 col-12 p-2 ingredientsBox rounded '>

                        {theMeal[0].strMeasure1 && theMeal[0].strIngredient1 !== '' ? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient1} : {theMeal[0].strMeasure1}</span> : ''}

                        {theMeal[0].strMeasure2 &&theMeal[0].strIngredient2!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient2} : {theMeal[0].strMeasure2}</span>:''}


                        {theMeal[0].strMeasure3&&theMeal[0].strIngredient3!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient3} : {theMeal[0].strMeasure3}</span>:''}

                        {theMeal[0].strMeasure4&&theMeal[0].strIngredient4!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient4} : {theMeal[0].strMeasure4}</span>:''}

                        {theMeal[0].strMeasure5&&theMeal[0].strIngredient5!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient5} : {theMeal[0].strMeasure5}</span>:''}

                        {theMeal[0].strMeasure6&&theMeal[0].strIngredient6!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient6} : {theMeal[0].strMeasure6}</span>:''}

                        {theMeal[0].strMeasure7&&theMeal[0].strIngredient7!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient7} : {theMeal[0].strMeasure7}</span>:''}
                        

                        {theMeal[0].strMeasure8&&theMeal[0].strIngredient8!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient8} : {theMeal[0].strMeasure8}</span>:''}
                       
                        {theMeal[0].strMeasure9&&theMeal[0].strIngredient9!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient9} : {theMeal[0].strMeasure9}</span>:''}
                        
                        {theMeal[0].strMeasure10&&theMeal[0].strIngredient10!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient10} : {theMeal[0].strMeasure10}</span>:''}

                        {theMeal[0].strMeasure11 &&theMeal[0].strIngredient11!==''?<span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient11} : {theMeal[0].strMeasure11}</span>:''}

                        {theMeal[0].strMeasure12&&theMeal[0].strIngredient12!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient12} : {theMeal[0].strMeasure12}</span>:''}
                        
                        {theMeal[0].strMeasure13 &&theMeal[0].strIngredient13? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient13} : {theMeal[0].strMeasure13}</span>:'' }
                        
                        {theMeal[0].strMeasure14&&theMeal[0].strIngredient14!==''? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient14} : {theMeal[0].strMeasure14}</span>:''}

                        {theMeal[0].strMeasure15 && theMeal[0].strIngredient15 !== '' ? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient15} : {theMeal[0].strMeasure15}</span> : ''}

                        {theMeal[0].strMeasure16&&theMeal[0].strIngredient16!=='' ? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient16} : {theMeal[0].strMeasure16}</span>:''}

                        {theMeal[0].strIngredient17&& theMeal[0].strMeasure17!=='' ?   <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient17} : {theMeal[0].strMeasure17}</span>:''}

                        {theMeal[0].strMeasure18 &&theMeal[0].strIngredient18 !=='' ? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient18} : {theMeal[0].strMeasure18}</span> :'' }

                        {theMeal[0].strIngredient19 && theMeal[0].strMeasure19 !== '' ? <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient19} : {theMeal[0].strMeasure19}</span> : ''}
                    
                        {theMeal[0].strIngredient20 && theMeal[0].strMeasure20 !==''?   <span className='col-12 d-flex justify-content-center' style={{ fontFamily: 'Dosis, sans-serif', fontWeight: '900' }}>{theMeal[0].strIngredient20} : {theMeal[0].strMeasure20}</span>:'' }

                    </div>

                </div>
            </div>
           

        </div>

    </div>
)
}

export default SingleMeal