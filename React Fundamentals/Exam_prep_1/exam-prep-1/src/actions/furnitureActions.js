import {AJAX_BEGIN, AJAX_ERROR, FETCH_PAGE_SUCCESS, FETCH_DETAILS_SUCCESS, FETCH_SEARCH_SUCCESS} from './actionTypes'
import {fetchPage, fetchDetails, fetchSurchPage} from '../api/remote'

function fetchPageSuccess(data){
    
}

export function fetchPageAction(page){
    return async (dispatch) => {
        dispatch({type:AJAX_BEGIN})
        try{
            const data = await fetchPage(page)
            dispatch()
        }catch (error){
            dispatch({
                type:AJAX_ERROR,
                error
            })
        }
    }
}