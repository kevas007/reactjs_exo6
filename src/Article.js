import React, { Fragment } from 'react';
import './css/article.css';
import toast from './img/toast.jpg'

class Article extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="article">
                    <div className="d-left">
                        <img src={toast} alt="" className="img-fluid" />
                    </div>
                    <div className="d-right">
                        <h1>Mon premier article</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio voluptates quidem, aspernatur tempora suscipit fugiat, laboriosam veritatis optio sapiente quam corrupti. Itaque amet atque aperiam veniam, fugiat doloribus adipisci soluta blanditiis magnam animi odio accusamus ipsa reiciendis accusantium eveniet cum consequatur quo modi. Deserunt, molestias? Quisquam sit sequi corrupti adipisci ipsa perspiciatis quae odio ullam nesciunt molestiae doloremque aperiam quas ipsam, eveniet autem. Eveniet incidunt quaerat sapiente quae officia. </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Article;