import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from '../../common/apis/MovieAPI';
import {APIKEY} from '../../common/apis/movieAPIKey';

//using thunk to make requests to the API
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",async ()=>{
    const movieText = "Harry"
    
    const response = await  movieAPI.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
        ).catch(err=>{
        console.log(err);
    });
      return response.data;

})
export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows",async ()=>{
    const seriesText = "black"

    const response = await  movieAPI.get(
        `?apikey=${APIKEY}&s=${seriesText}&type=series`
        ).catch(err=>{
        console.log(err);
    });
    return response.data
})

export const fetchAsyncMovieOrShowDetails = createAsyncThunk("fetchAsyncMovieOrShowDetails",async (id)=>{
    const response = movieAPI.get(`?apikey=${APIKEY}$i=${id}$plot=full`).catch(err=>{
        console.log(err)
    })
    return response.data
})
const initialState ={
    movies:{},
    shows:{}
};

 const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies = payload;  
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,shows:payload}
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fetched successfully")
            return {...state,shows:payload}
        },
    }
})


export default movieSlice.reducer
export const {addMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
