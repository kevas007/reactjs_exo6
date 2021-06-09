import React from 'react';
import './css/body.css';
import Article from './Article'
class Body extends React.Component {
    nombreArticle = "2";
    render() {
        return(
            <section id="body">
                <div className="container">
                {
                    this.nombreArticle >=2 && 
                    <div>
                    <Article/>
                    <Article/>
                    </div>
                }
                {
                    this.nombreArticle <2 && 
                    <div>
                        <h1>Il n 'y a plus d'article en stock</h1>
                    </div>
                }
                </div>
            </section>
        )
    }
}

export default Body;