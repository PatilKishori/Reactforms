
import Cookies from "js-cookie";

function Setcookies(cookiename, userin){
  Cookies.set(cookiename,userin,{
    expires:1,
    secure:true,
    sameSite:'strict',
    path:"/"
  })

}

export default Setcookies;