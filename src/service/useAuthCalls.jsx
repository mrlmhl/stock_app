import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess,} from "../features/authSlice";
import {useDispatch} from "react-redux"
import useAxios from "./useAxios";




const useAuthCalls = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const {token} = useSelector((state) => state.auth)
  const {axiosWithToken, axiosPublic} =  useAxios()


   const login = async (userInfo) => {
    dispatch (fetchStart())
   
    try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login/`,
      userInfo
    )
    // const {data} = await axiosPublic("/auth/login", userInfo)
    dispatch(loginSuccess(data))
    toastSuccessNotify("Login Başarılı")
    navigate("/stock")
    
  } catch (error) {
    dispatch(fetchFail())
    toastErrorNotify("Login işlemi başarısız.");
    console.log(error);
  }
};
const register = async(userInfo) => {
  dispatch(fetchStart())
  try {
    const{data} = await axiosPublic.post(
      `${process.env.REACT_APP_BASE_URL}/users/`, userInfo
    )
    dispatch(registerSuccess(data))
    navigate("/stock")
  } catch (error) {
    dispatch(fetchFail())
    
  }
}
const logout = async () => {
  dispatch(fetchStart())
  try {
  //  await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
  //       headers: {Authorization: `Token ${token}`}
  //     })
  await axiosWithToken("/auth/logout/")
    toastSuccessNotify("Çıkış İşlemi Başarılı") 
    dispatch(logoutSuccess())
    navigate("/")
  } catch (error) {
    dispatch(fetchFail())
    toastErrorNotify("Çıkış İşlemi Başarısız.");
    
  }

}
  return {login, register, logout}
}

export default useAuthCalls;

