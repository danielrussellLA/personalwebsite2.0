import React, { Component }from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'profile' };
    }

    changeCurrentPage(pageName) {
        this.setState({ selected: pageName });
    }

    isActive(pageName) {
        return 'item' + ((pageName===this.state.selected) ? ' active' : '');
    }

    render() {
        return (
            <div className="ui vertical fluid tabular menu">
                <Link to="/" className={this.isActive('profile')} onClick={this.changeCurrentPage.bind(this,'profile')}>Profile</Link>
                <Link to="/projects" className={this.isActive('projects')} onClick={this.changeCurrentPage.bind(this,'projects')}>Projects</Link>
                <Link to="/contact" className={this.isActive('contact')} onClick={this.changeCurrentPage.bind(this,'contact')}>Contact</Link>
                <Link to="/blog" className={this.isActive('blog')} onClick={this.changeCurrentPage.bind(this,'blog')}>Blog</Link>
            </div>
        )
    }
}

export default NavBar
