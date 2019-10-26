import React from 'react';
import {Cell,Grid} from 'react-mdl';
class Accueil extends React.Component{
render(){
    return (
        <div>
            <Grid className="accueil-grid">
                <Cell col={12}>
                    <img
                    src="https://materiell.com/wp-content/uploads/2015/04/susan-full.png"
                    alt="avatar"
                    className="img-avatar"
                    />
                    <div className="banner-text">
                        <h1>Développeur Web Full Stack</h1>
                        <hr />
                        <div className="social-links">
                            <a href="google.com" target="_blank">
                                <i class="fab fa-youtube fa-7x" aria-hidden="true"></i>
                            </a>
                            <a href="google.com" target="_blank">
                                <i class="fab fa-gitlab fa-7x" aria-hidden="true"></i>
                            </a>
                            <a href="google.com" target="_blank">
                                <i class="fas fa-futbol fa-7x" aria-hidden="true">
                                </i>                           
                             </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
} 
export default Accueil;