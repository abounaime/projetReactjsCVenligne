import React from 'react';
import './App.css';
import Main from './components/Main';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-style" title="Title" scroll>
            <Navigation>
                <Link to="cv">CV</Link>
                <Link to="projets">Projets</Link>
                <Link to="contact">Contact</Link>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="cv">CV</Link>
                <Link to="projets">Projets</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>  );
}

export default App;