import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component{
    render(){
        var text = "something!";
        return (

            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name} and your age is {this.props.age}</p>
                <p>{text}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby , i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
};