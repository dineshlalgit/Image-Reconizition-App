import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
    if(isSignedIn){
    return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signout')} className='f3 link underline dim black pointer pa3 '>Sign out</p>
        </nav>    
    )
  }
    else{    
     return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p onClick={()=>onRouteChange('signin')} className='f3 link underline dim black pointer pa3 '>Sign In</p>
        <p onClick={()=>onRouteChange('Register')} className='f3 link underline dim black pointer pa3 '>Register</p>
    </nav>
    )
  }
}
export default Navigation;