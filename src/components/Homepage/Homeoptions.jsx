import React from 'react'
import "../Homepage/Homeoptions.css";
export const Homeoptions = () => {
    function handleClik(e) {
        window.location.href = "/user"
    }
    return (
        <div className='Homeoptions'>
            <div className='option'>
                <div className='items'>
                    Resourses
                </div>
                <div className='items'>
                    Request
                </div>
                <div className='items' onClick={handleClik}>
                    Users
                </div>
            </div>
        </div>
    )
}
