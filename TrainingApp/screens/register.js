import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {images, icons, fontSizes, colors} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UIButoon} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isValidEmail, isValidPassword, isValidRePassword} from '../utilies/validation';

function Register(props) {
  const [keyboardDidShown, setKeyboardDidShown] = useState(false);
  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  // state to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length >= 6 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    isValidRePassword(rePassword, password) == true;

  useEffect(() => {
    //componentDidMount
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardDidShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardDidShown(false);
    });
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 25,
          marginLeft: 15,
        }}>
          <Image
            tincolor={colors.primary}
            source={images.fiverr}
            style={{
              width: 60,
              height: 60,
              marginTop: 35,
              marginBottom: 10,
            }}
          />
          <Text style={{
            fontSize: fontSizes.h4,
            fontWeight: 'bold',
            color: 'black'
          }}>
            Welcome to Fiverr!
          </Text>
      </View>
      <View
        style={{
          flex: 45,
        }}>
        <TextInput
          // onChangeText={text => {
          //   setErroEmail(
          //     isValidEmail(text) == true ? '' : 'Email not in corect format',
          //   );
          //   setEmail(text);
          // }}
          style={{
            backgroundColor: colors.inactive,
            height: 40,
            borderRadius: 10,
            paddingStart: 10,
            color: colors.black,
            marginHorizontal: 15,
            marginTop: 5,
            marginBottom: 15,
          }}
          placeholder="Email or Username"
          placeholderTextColor={colors.placehoder}
        />
        <TextInput
          onChangeText={text => {
            setErrorPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setPassword(text);
          }}
          placeholder="Enter your password"
          placeholderTextColor={colors.placehoder}
          style={{
            color: colors.black,
            backgroundColor: colors.inactive,
            height: 40,
            borderRadius: 10,
            paddingStart: 10,
            marginHorizontal: 15,
            marginBottom: 15,
          }}
          secureTextEntry={true}
        />
        <TextInput
          onChangeText={text => {
            setErrorPassword(
              isValidPassword(text) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setPassword(text);
          }}
          placeholder="Enter your password"
          placeholderTextColor={colors.placehoder}
          style={{
            color: colors.black,
            backgroundColor: colors.inactive,
            height: 40,
            borderRadius: 10,
            paddingStart: 10,
            marginHorizontal: 15,
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity
          disabled={isValidationOK() == false}
          style={{
            backgroundColor: colors.continues,
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 5,
            marginTop: 25,
          }}>
          <Text
            style={{
              padding: 8,
              fontSize: fontSizes.h5,
              color: 'white',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
        
      </View>
      {keyboardDidShown == false && (
        <View
          style={{
            flex: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSizes.h6,
              color: colors.placehoder,
            }}>
            Or via social networks
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              disabled={isValidationOK() == false}
              style={{
                backgroundColor: colors.inactive,
                justifyContent: 'center',
                alignItems: 'center',
                width: '43%',
                alignSelf: 'center',
                borderRadius: 5,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Icon name="facebook" size={25} color={colors.facebook} />
              <Text
                style={{
                  padding: 8,
                  fontSize: fontSizes.h5,
                  color: 'black',
                }}>
                Facebook
              </Text>
            </TouchableOpacity>
            <View style={{width: 15}} />
            <TouchableOpacity
              disabled={isValidationOK() == false}
              style={{
                backgroundColor: colors.inactive,
                justifyContent: 'center',
                alignItems: 'center',
                width: '43%',
                alignSelf: 'center',
                borderRadius: 5,
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <Icon name="google" size={25} color={colors.google} />
              <Text
                style={{
                  padding: 8,
                  fontSize: fontSizes.h5,
                  color: 'black',
                }}>
                Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {keyboardDidShown == false && (
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
          }}>
          <View style ={{
          }}>
          <TouchableOpacity
              disabled={isValidationOK() == false}
              style={{
                borderRadius: 5,
                marginTop: 15,
              }}>
              <Text
                style={{
                  padding: 8,
                  fontSize: fontSizes.h5,
                  color: colors.continues,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{
          }}>
          <TouchableOpacity
              disabled={isValidationOK() == false}
              style={{
                borderRadius: 5,
                marginTop: 15,
              }}>
              <Text
                style={{
                  padding: 8,
                  fontSize: fontSizes.h5,
                  color: colors.continues,
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
            
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
export default Register;
