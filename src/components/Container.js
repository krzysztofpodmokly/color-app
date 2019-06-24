import React from 'react';
import Box from './Box';
import { connect } from 'react-redux';
import { loadColor } from '../actions';

const Container = (props) => {
    return (
        <Box handleClick={props.loadColor} color={props.color} />
    );
};

const mapStateToProps = ({ color }) => {
    // state destructuring
    return { color } 
};

export default connect(mapStateToProps, { loadColor })(Container);