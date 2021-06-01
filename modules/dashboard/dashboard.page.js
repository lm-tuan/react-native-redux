import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { firebase } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../login/login.action';

export default function Dashboard({navigation}) {
  const [uid, setUid] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [displayName, setDisplayName] = useState('');

  const signOut = () => {
    firebase.auth().signOut().then(() => {
     dispatch(actions.loginOut());
     navigation.navigate('LoginPage')
    })
    .catch(error => console.log(error))
  };
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login);
  console.log('dasboard', loginState);
  useEffect(() => {
    setDisplayEmail(firebase.auth().currentUser.email);
    setUid(firebase.auth().currentUser.uid);
    setDisplayName(firebase.auth().currentUser.displayName);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Email:{displayEmail}</Text>
      <Text style={styles.textStyle}>Name:{displayName}</Text>
      <Text style={styles.textStyle}>Id: {uid}</Text>
      <Button color="#3740FE" title="Logout" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});
