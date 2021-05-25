
import React from 'react';
import {
  View,
} from 'react-native';
import ButtonComponent from '../../components/button';
import Title from '../../components/title';

const CountPage = (props) => {
  return (
      <View style={{ flex: 1, flexDirection: "column" , justifyContent:"center" }}>
          <Title/>
          <ButtonComponent />
      </View>
  );
}


export default CountPage;
