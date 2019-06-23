import React from 'react';
import Box from './Box';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Container extends React.Component{
    render() {
        console.log(this.props)
        return (
            <Box handleClick={this.props.loadColor} color={this.props.color} />
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(Container);