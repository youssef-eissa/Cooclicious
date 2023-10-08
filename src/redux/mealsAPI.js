import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/search.php?s=' }),
    endpoints: builder => ({
        getAllMeals: builder.query({
            query:()=>''
        })
    })
})
export const {useGetAllMealsQuery} =apiSlice