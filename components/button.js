import React from 'react';
import { Button, View } from  'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/count/count.action';

export default function ButtonComponent(){


    const dispatch = useDispatch();
    const countState = useSelector(state => state);

    // increase
    const onIncrease= () => {
        dispatch(actions.inCrease(countState.count.number + 1));
    }
    // reduces
    const onReduce= () => {
        dispatch(actions.Reduction(countState.count.number - 1));
    }

    // restart
    const onRestart= () => {
        dispatch(actions.Rest());
    }

    return (
    <View style = {{ flexDirection:"row", justifyContent:"center"}}> 
        <Button
        onPress={onIncrease}
        title="Tăng"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
         <Button
        onPress={onReduce}
        title="Giảm"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Button
        onPress={onRestart}
        title="Rest"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    </View>)

}

