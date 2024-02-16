import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image, StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Alert,
    Button,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native'
const Login = () => {
    let isEmail = (email) => {
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
    }
    const notify = () => {
        Alert.alert('Thông báo tài khoản',`Email: ${email}\nPassword: ${password}`)
    }
    const [keyboardIsshown, setKeyboardIsshown] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () =>
            setKeyboardIsshown(true)
        )
        Keyboard.addListener('keyboardDidHide', () =>
            setKeyboardIsshown(false)
        )
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erroremail, setErrorEmail] = useState(false)
    const [errorpassword, setErrorPassword] = useState(false)
    const logindisable = isEmail(email) && password.length > 3  
    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        {/* headerlogin */}
        {/* <ImageBackground > */}
        <View style={{
            flex: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

            <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                width: '50%',
            }}>
                Already have an Account
            </Text>
            <Image
                source={require('../assets/computer.png')}
                style={{
                    height: 120,
                    width: 120,
                    tintColor: 'orange'
                }} />

        </View>
        <View style={{
            marginHorizontal: 15,
            flex: 15,
        }}>
            <Text style={{
                color: 'red',
                fontSize: 18,
            }}>Email:</Text>
            <TextInput
                style={{
                    color: 'black'
                }}
                placeholder={'Example@gmail.com'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                fontSize={18}
                onChangeText={(text) => 
                    {
                        setEmail(text)
                        setErrorEmail(isEmail(text) == true ? false : true)
                    }
                }
            />
            <View style={{
                marginTop: 5,
                height: 1,
                borderWidth: 1,
                width: '100%',
                borderColor: 'rgba(0,0,0,0.5)',
            }}></View>
            {erroremail == true && <View>
                <Text style={{
                    color: 'red',
                }}>Email format is wrong</Text>
            </View>}
        </View>
        <View style={{
            marginHorizontal: 15,
            flex: 15,
        }}>
            <Text style={{
                color: 'red',
                fontSize: 18,
            }}>Password:</Text>
            <TextInput
                style={{
                    color: 'black',
                }}
                secureTextEntry={true}
                placeholder={'Enter your password'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                fontSize={18}
                onChangeText={(text) => 
                    {
                        setPassword(text)
                        setErrorPassword(text.length > 3 ? false : true)    
                    }
                }
            />
            <View style={{
                borderColor: 'rgba(0,0,0,0.5)',
                marginTop: 5,
                height: 1,
                borderWidth: 1,
                width: '100%'
            }}></View>
           {errorpassword == true && <View>
                <Text style={{
                    color: 'red',
                }}>Password must have at least 4 characters</Text>
            </View>}
        </View>
        {!keyboardIsshown && <View style={{
            flex: 40,
        }}>
            <TouchableOpacity
                disabled={logindisable == false}
                style={{
                    flex: 6,
                    backgroundColor: logindisable == false ? 'rgba(0,0,0,0.2)' : 'aqua',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2,
                    width: '50%',
                    alignSelf: 'center'
                }}
                onPress={() => notify()}
            >
                <Text
                    style={{
                        fontSize: 20,
                        padding: 10,
                    }}
                >LOGIN</Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 8,
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 17,
                        padding: 10,
                        color: 'red'
                    }}
                >New user?  Register now!</Text>
            </TouchableOpacity>
            <View style={{
                flex: 25,
            }}>
                <View style={{
                    flex: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginHorizontal: 30,
                }}>
                    <View style={{
                        flex: 1,
                        height: 1,
                        borderWidth: 1,
                        width: '50%',
                    }}></View>
                    <View style={{
                        flex: 1,
                        fontSize: 15,
                    }}>
                        <Text style={{
                            alignSelf: 'center',
                            color: 'orange'
                        }}>Use other methos?</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        height: 1,
                        borderWidth: 1,
                        width: '50%'
                    }}></View>
                </View>
                <View style={{
                    flex: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: 120,
                }}>
                    <Image source={require('../assets/facebook.png')}
                        style={{
                            height: 50,
                            width: 50,
                        }}
                    />
                    <Image source={require('../assets/gg.png')}
                        style={{
                            height: 50,
                            width: 50,
                        }}
                    />
                </View>
            </View>
        </View>}
    </View>
}
export default Login
// huynh duy nguyen