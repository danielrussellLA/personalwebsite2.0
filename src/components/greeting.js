import React, {Component} from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello'}
    }

    componentWillMount(){
        this.getGreeting();
    }

    currentTime() {
        var currentDate = new Date();
        var hours = currentDate.getHours();
        return hours;
    }

    getGreeting() {
        var time = this.currentTime();
        var greeting = 'Hello';

        if(time < 12) {
            greeting = 'Good Morning';
        } else if (time > 12 && time < 17) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Good Evening';
        }
        
        this.setState({greeting: greeting});
    }

    // <img className="ui fluid rounded image" src="http://i.imgur.com/FH3Gu6q.jpg"/>

    render() {
        return (
            <div>
                <h2 className="">{this.state.greeting}</h2>
            </div>
        );
    }
}

export default Greeting;
