import React, {Component} from 'react';
import Nodes from './Nodes';
import "../UserAgent";
import io from 'socket.io-client/socket.io';
//import './App.css';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


//const hostname = require('os').hostname().toLowerCase();

const hostname = '10.31.135.65'
const opcEndpoint = `http://${hostname}:3700`;

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {opcData: []};
        // this.state  ={ value: 11.019981839078369    };


    }

    componentDidMount() {
        io(opcEndpoint).on('data', data => this.setState({opcData: data}));
    }


    render() {
        //const {opcData} = this.state;

        var {opcData}  = this.state;

        if (this.state.opcData[0] !== undefined) {
            return (
                <Nodes nodes={opcData}/>
            )

        } else {

            return (
                <Text>Waiting for values...</Text>
            )

        }


        //console.log("L2: ", this.state.value);


    }

}


AppRegistry.registerComponent('Main', () => Main);
