require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

var ChildComponent = React.createClass({
    componentWillReceiveProps: function () {
        console.log("call componentWillReceiveProps");
    },
    shouldComponentUpdate: function () {
        console.log("call shouldComponentUpdate");
        return true;
    },
    componentWillUpdate: function () {
        console.log("call componentWillUpdate");
    },
    componentDidUpdate: function () {
        console.log("call componentDidUpdate");
    },
    componentWillUnmount: function () {
        console.log("call componentWillUnmount");
    },
    render: function () {
        console.log("call render");
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
    
});

var MyComponent = React.createClass( {
    getDefaultProps: function () {
        // console.log("call getDefaultProps");
        return {
            className: "test"
        };
    },
    getInitialState: function () {
        // console.log("call getInitialState");
        // console.log("log prop: ", this.props);
        return {
            text: "something",
             name: ''
        };
    },
    componentWillMount: function () {
        console.log("call componentWillMount");
    },
    componentDidMount: function () {
        console.log("call componentDidMount");
    },
    componentWillUnmount: function () {
        console.log("call componentWillUnmount");
    },
    responseHandler: function(err, data){
        this.setState({
            name: data.body.name
        })
    },
    render: function () {
        console.log("call render");
        var child;
        if (this.state.text === "after click") {
            child = null;
        } else {
            child = <ChildComponent data={this.state.text} />;
        }
        return (
            <div className={this.props.className} onClick={this.handleClick}>
                {child}
            </div>
        );
    },
    handleClick: function () {
        this.setState({
            text: "after click"
        });
    }
});

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

// AppComponent.defaultProps = {
// };

export default MyComponent;
