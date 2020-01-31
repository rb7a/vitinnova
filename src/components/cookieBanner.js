import React,{ useState }  from 'react';

import "./cookieBanner.css"

const CookieBanner = () => {
    
const handleAccept = () => {
    localStorage.setItem("setCookie","true")
}
const handleReject = () => {
    localStorage.setItem("setCookie","true")
}
    return (
        <div className='cookie-banner'>
            <span>
                Utilizziamo i cookie per fornire all'utente la migliore esperienza possibile nel nostro sito.
                <button id='cookie-action-accept' onClick={handleAccept}>Accetto</button>
                <button id='cookie-action-reject' onClick={handleReject}>Non accetto</button>
                <a id='policy'>Policy</a>
            </span>
        </div>
    )
}

export default CookieBanner