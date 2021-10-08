import axios from 'axios'
import { SHOWS_FAILED, SHOWS_LOADING, SHOWS_SUCCESS } from '_redux/types'

export const loadShows = () => async (dispatch, getState) => {
  dispatch({ type: SHOWS_LOADING })

  try{
    const result = await axios.get('api/shows/')
    console.log(`data from shows is ${result.data}`)
    dispatch({
      type: SHOWS_SUCCESS,
      payload: result.results
    })
  } catch (err) {
    console.log(err)
  }
}