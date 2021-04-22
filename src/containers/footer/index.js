import React from 'react'
import "./style.css"
import FavoriteIcon from '@material-ui/icons/Favorite';  

export default function Footer() {
    return (
        <div className="footer">
            <p className="footer__text">Made with </p>
            <FavoriteIcon style={{ color: "red" }}/>
            <p className="footer__text"> by Suchita Ghadge </p>
        </div>
    )
}
 