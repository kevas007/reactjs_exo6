import React, { Fragment } from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Search : 
                    <input type="text" />
                    </label>
                    <input type="submit" value="Go" />
                </form>
        </Fragment>
        )
    }
}

export default SearchBar