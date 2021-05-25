import React from 'react';
import { Text } from  'react-native';
import { useSelector } from 'react-redux'

export default function Title(props){
    const countState = useSelector(state => state);
    console.log("props-title", countState);
    return (<Text style = {{ textAlign:'center'}}> Count: { countState.count.number}</Text>)
}