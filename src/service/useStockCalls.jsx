import { fetchStart,fetchFail, getFirmsSuccess } from "../features/stockSlice"
import useAxios from "./useAxios"
import { toastErrorNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
   const {axiosWithToken} =useAxios()
   const dispatch = useDispatch()
    const  getFirms = async () =>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken("/firms/")
            dispatch(getFirmsSuccess(data.data))
            
        } catch (error) {
         dispatch(fetchFail())
         toastErrorNotify("Firma Bilgileri Görüntülenmedi");
             }
   
        }
    

  return {getFirms}
    }

export default useStockCalls