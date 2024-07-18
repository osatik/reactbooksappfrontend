

import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart, fetchSuccessGetAll, fetchSuccessOneBook, fetchSuccessWithoutPayload } from '../app/features/bookSlice';
import axios from 'axios';
import { toastError, toastSuccess } from '../helpers/toastify';

const useBookApis = () => {
const url = process.env.REACT_APP_BASEURL;
const dispatch = useDispatch();

const getBooks = async () => {
dispatch(fetchStart());
    try {
        const response = await axios(url,{
            headers:{
                'Content-Type':"application/json"
            }
        });
        console.log('get all books response =', response)
        
        console.log(response?.data);

        dispatch(fetchSuccessGetAll(response?.data?.result))
        // toastSuccess(response?.data?.message)
    } catch (error) {
        toastError("Failed | get books - "+error.message)
        dispatch(fetchFail());
        
    }


}
const getOneBooks = async (id) => {
dispatch(fetchStart());
    try {
        const response = await axios(url+'/'+id,{
            headers:{
                'Content-Type':"application/json"
            }
        });
        console.log('get one book response =', response)
        
        console.log(response?.data);

        dispatch(fetchSuccessOneBook(response?.data?.result))
        toastSuccess(response?.data?.message)
    } catch (error) {
        toastError("Failed | get one book - "+error.message)
        dispatch(fetchFail());
        
    }


}

const deleteBook = async (id) => {
    dispatch(fetchStart());
        try {
            const response = await axios.delete(url+"/"+id,{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            console.log('delete a book response =', response)
            if(response?.status != 204){
                throw new Error("Delete is Failed!")
            }
    
            // dispatch(fetchSuccessWithoutPayload());
            toastSuccess('Delete is Successfull!')
            getBooks();
        } catch (error) {
            toastError("Failed | delete a book - "+error.message)
            dispatch(fetchFail());
            
        }
    
    
    }


const createBook = async (body) => {
    dispatch(fetchStart());
        try {
            const response = await axios.post(url,body,{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            console.log('create new book response =', response)
            
    
            // await dispatch(fetchSuccessWithoutPayload());
            toastSuccess(response?.data?.message)
            getBooks();
        } catch (error) {
            toastError("Failed | creating a new book - "+error.message)
            dispatch(fetchFail());
            
        }
    
    
    }
const updateBook = async (id,body) => {
    dispatch(fetchStart());
        try {
            const response = await axios.put(url+"/"+id,body,{
                headers:{
                    'Content-Type':"application/json"
                }
            });
            console.log('Update book response =', response)
            
    
            // await dispatch(fetchSuccessWithoutPayload());
            toastSuccess(response?.data?.message)
            getBooks();
        } catch (error) {
            toastError("Failed | updating book - "+error.message)
            dispatch(fetchFail());
            
        }
    
    
    }


  return {getBooks,deleteBook,createBook,updateBook, getOneBooks,}
}

export default useBookApis;