import React,{ useState, useEffect }  from 'react';
import LocalizedLink from "./LocalizedLink"

import "./cookieBanner.css"

const CookieBanner = () => {
    const [showCookie, toggleCookie] = useState(true);

    useEffect(() => {
        const showBanner =  localStorage.getItem("setCookie");
        if(showBanner) {
            toggleCookie(false)
        }
    },[]);
const handleAccept = () => {
    localStorage.setItem("setCookie","true");
    toggleCookie(false)
}
const handleReject = () => {
    localStorage.setItem("setCookie","true");
    toggleCookie(false)
}
    if(showCookie) {
        return (
            <div className='cookie-banner'>
                <span>
                    Utilizziamo i cookie per fornire all'utente la migliore esperienza possibile nel nostro sito.
                    <button id='cookie-action-accept' onClick={handleAccept}>Accetto</button>
                    <button id='cookie-action-reject' onClick={handleReject}>Non accetto</button>
                    <LocalizedLink to="/policy">policy</LocalizedLink>
                   
                </span>
            </div>
        )
    } else {
        return ''
    }
   
}

export default CookieBanner