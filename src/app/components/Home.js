import React from "react";

export class Home extends React.Component{
    render(){
        console.log(this.props);

        return (
            <div>
                <p>In a new component!</p>

            </div>
        )
    }
}