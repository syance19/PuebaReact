import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
export const NotesAppBar = () => {
    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }
    return (
        <div className="notes__appbar">
           

            <div>
            <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
