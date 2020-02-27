import React, { Component } from 'react';

class welcome extends Component {

    render() {
        const date = new Date()
        const hour = date.getHours()
        let greeting
        if (hour < 12 ){
            greeting = "Good Morning";
        }
        else if (hour >= 12 && hour <= 18){
            greeting = "Good Afternoon";
            console.log(greeting);
        }
        else {
            greeting = "Good Evening";
        }

    return (  

            <div>
                <h2>{greeting}</h2>
            </div>
        )
    }
    
}

export default welcome
