import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Text,
  Button,
  View,
  Toast
} from 'native-base';
import {firebase} from '../../firebase/config';
import { validateEmail } from '../../helper/regex';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../registration/register.action';

export default function Register({navigation}) {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    fullname: '',
    confimPassword:''
  });
  const dispatch = useDispatch();
  const registerState = useSelector(state => state);

  const onBackLogin = () => {
    navigation.navigate('LoginPage');
  };
  useEffect(() => {
    // console.log('registerState', registerState);
    const user = {
      username: 'tuanle050@gmail.com',
      password: '123456',
      fullname: 'abd',
      confimPassword:'123456'
    }
    dispatch(actions.registerRequest({
      user
    }));
  }, [])
  const onRegister = () => {
    if (account.username === '' || account.password === '') {
      Alert.alert('Enter details to signup!');
    } 
    if( validateEmail(account.username)){
      if(account.password !== account.confimPassword){
        Alert.alert('Comfirm password incorrect with password.Pls retry !');
      }else {
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(account.username, account.password)
        // .then((res) => {
        //   if(res.additionalUserInfo.isNewUser){
        //     res.user.updateProfile({
        //       displayName: account.fullname
        //     })
        //     navigation.navigate('LoginPage');
        //   }
        // })
        // .catch(error => {
        //   Alert.alert(error.toString());
        // });
        // dispatch(actions.registerRequest(account));
      }
    }else {
      //  not format email
      Alert.alert('Address email is incorrect.Pls retry !');
    }
      // setLoading(true);
  };

  return (
    <Content
      contentContainerStyle={{
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
            <Body>
              <Text>Register</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody></CardItem>
        <CardItem>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Full name</Label>
                <Input
                  onChangeText={fullname => setAccount({...account, fullname})}
                />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  onChangeText={username => setAccount({...account, username})}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  onChangeText={password => setAccount({...account, password})}
                  secureTextEntry = { true }
                />
              </Item>
              <Item floatingLabel last>
                <Label>Comfirm Password</Label>
                <Input
                  onChangeText={confimPassword => setAccount({...account, confimPassword})}
                  secureTextEntry = { true }
                />
              </Item>
            </Form>
            <Button block info style={{marginTop: 20}} onPress={onRegister}>
              <Text>Sign in</Text>
            </Button>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{marginTop: 3}}>already have account ? </Text>
              <Button
                transparent
                style={{height: 30, marginRight: 10}}
                onPress={onBackLogin}>
                <Text style={{fontSize: 12}}>Login </Text>
              </Button>
            </View>
          </Content>
        </CardItem>
      </Card>
    </Content>
  );
}
