/**
 * @format
 */
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../utilies/validation';
function Login(props) {
  const [keyboardDidShown, setKeyboardDidShown] = useState(false);
  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // state to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length > 6 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
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
          flex: 30,
        }}>
        <View
          style={{
            marginTop: 40,
            marginStart: 15,
          }}>
          <Image
            tincolor={colors.primary}
            source={images.fiverr}
            style={{
              width: 60,
              height: 60,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h2,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Welcome to Fiverr
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h4,
              marginTop: 10,
            }}>
            Please enter your registration email and password.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 30,
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
            flex: 30,
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
                Join
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
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
            
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

export default Login;
