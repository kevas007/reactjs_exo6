import React from 'react';

import SearchBar from './SearchBar';
import './css/navigation.css';

class Navigation extends React.Component {
    render() {
    return (
        <nav>
        <div className="navLeft">
            <ul>
                <li>
                <a>
                    Link1
                </a>
                </li>
                <li>
                <a>
                    Link2
                </a>
                </li>
                <li>
                    <a>
                        Link2
                    </a>
                </li>
            </ul>
        </div>
        <div className="navRight">
        <SearchBar/>
        </div>
    </nav>
    )
    }
};


export default Navigation;