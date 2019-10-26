import React from 'react';
import Acceuil from './Accueil';
import {Switch, Route} from 'react-router-dom'; 
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
const Main = () =>  (
    <Switch>
        <Route exact path="/" component= {Acceuil}></Route>
        <Route path="/resume" component= {Resume}></Route>
        <Route path="/projects" component= {Projects}></Route>
        <Route path="/contact" component= {Contact}></Route>

    </Switch>
)

export default Main;