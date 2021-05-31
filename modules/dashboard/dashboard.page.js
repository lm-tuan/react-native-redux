import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { firebase } from '../../firebase/config';

export default function Dashboard({navigation}) {
  const [uid, setUid] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');

  const signOut = () => {
    firebase.auth().signOut().then(() => {
     navigation.navigate('LoginPage')
    })
    .catch(error => console.log(error))
  };

  useEffect(() => {
    console.log('firebase.auth().currentUser', firebase.auth().currentUser)
    // console.log('firebase', firebase);
    setDisplayEmail(firebase.auth().currentUser.email);
    setUid(firebase.auth().currentUser.uid);
  }, []);
  // console.log('firebase', firebase);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Email:{displayEmail}</Text>
      <Text style={styles.textStyle}>Id, {uid}</Text>
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
