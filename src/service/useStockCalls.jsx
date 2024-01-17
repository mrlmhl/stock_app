import { fetchStart,fetchFail, getStockSuccess } from "../features/stockSlice"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
   const {axiosWithToken} =useAxios()
   const dispatch = useDispatch()

    // const  getFirms = async () =>{
    //     dispatch(fetchStart())
    //     try {
    //         const {data} = await axiosWithToken("/firms/")
    //         dispatch(getFirmsSuccess(data.data))
            
    //     } catch (error) {
    //      dispatch(fetchFail())
    //      toastErrorNotify("Firma Bilgileri Görüntülenmedi");
    //          }
   
    //     }
    
        // const  getSales = async () =>{
        //     dispatch(fetchStart())
        //     try {
        //         const {data} = await axiosWithToken("/Sales/")
        //         dispatch(getSalesSuccess(data.data))
                
        //     } catch (error) {
        //      dispatch(fetchFail())
        //      toastErrorNotify("Sales Bilgileri Görüntülenmedi");
        //          }
       
        //     }

            const  getStocks = async (url="firms") =>{
                dispatch(fetchStart())
                try {
                    const {data} = await axiosWithToken(`/${url}`)
                    const apiData = data.data
                    dispatch(getStockSuccess({apiData, url}))
                    
                } catch (error) {
                 dispatch(fetchFail())
                 toastErrorNotify(`${url} bilgileri görüntülenmedi.`);
                     }
           
                }


                const  deleteStock = async (url="firms", id) =>{
                    dispatch(fetchStart())
                    try {
                         await axiosWithToken.delete(`/${url}/${id}`)
                         toastSuccessNotify(`${url} bilgileri silinmiştir`);
                         getStocks(url)
                        
                    } catch (error) {
                     dispatch(fetchFail())
                     toastErrorNotify(`${url} silinemedi.`);
                         }
               
                    }
          


        
  return {getStocks, deleteStock}
    }

export default useStockCalls