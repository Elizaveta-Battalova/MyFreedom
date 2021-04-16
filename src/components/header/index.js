import React from "react";

import { render } from "react-dom";

const runAnalitic = () => {
    console.log("ANALITIC");
};

const url = "https://cat-fact.herokuapp.com/facts"

class Header extends React.Component {
    constructor(props) {
        super(props);

        console.log("CONSTRUCTOR");

        this.state = {
            categoies: null,
        };
    }

    // componentDidMount() {
    //     console.log("MOUNT")};
    // };

    // fetch(url)
    // .then((data) => data.json())
    // .then((categoies) => {
    //     this.setState({
    //         categoies,
    //     });
    // });
    
    // componentWillUnount() {
    //     console.log("UNMOUNT");   
    // }

    render() {
        const {categoies} = this.state;

        console.log("RENDER: (clicks)");

        return (
            <header>
               {categoies && (
                   <ul>
                       {categoies.map((cat) => (<li key={cat.id}>{cat.name}</li>)}
                   </ul>
               )}
            </header>
        );
    }
};