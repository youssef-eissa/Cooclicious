import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGetAllMealsQuery } from '../../redux/mealsAPI';

export default function WovenImageList() {
const { data,isSuccess } = useGetAllMealsQuery()

return (
    <ImageList className='col-10  ' sx={{  height: 1000 }} variant="woven" cols={3} gap={8}>
    {isSuccess&&data.meals.map((item) => (
        <ImageListItem key={item.strMealThumb}>
        <img
            srcSet={`${item.strMealThumb}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.strMealThumb}?w=161&fit=crop&auto=format`}
            alt={item.strMeal}
            loading="lazy"
        />
        </ImageListItem>
))}
    </ImageList>
);
}
