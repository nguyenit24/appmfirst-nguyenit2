import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Alert, Button } from 'react-native'
import UIButton from '../components/Buttonacc.js'
import { useState } from 'react'

export default function Welcome() {
    const [acctype, setAcctype] = useState([
        {
            name: 'Influencer',
            isSelected: false
        },
        {
            name: 'Business',
            isSelected: false
        },
        {
            name: 'Individual',
            isSelected: false
        }
    ]
    )
    return (
        <View style={styles.logohead}>
            <ImageBackground
                source={require('../assets/backg.jpg')}
                resizeMode='cover'
                style={{ flex: 100, }}
            >
                <View style={styles.hea}>
                    <Image source={require('../assets/campfire.png')}
                        style={styles.imgfire} />
                    <Text style={styles.text}>React Native App</Text>
                    <View style={{ flex: 1 }} />
                    <Image source={require('../assets/question-mark.png')}
                        style={styles.imgquestion} />
                </View>

                <View style={{
                    flex: 20,
                    // backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={styles.text2}>Welcome to</Text>
                    <Text style={
                        [styles.text2,
                        { fontWeight: 'bold', fontSize: 22 }]}>
                        Duy Nguyễn's App beginer!
                    </Text>
                    <Text style={styles.text2}>Please select your account type</Text>
                </View>

                <View style={{
                    flex: 38,
                }}>
                    {
                        acctype.map(acc =>
                            <UIButton
                                onPress={() => {
                                    let newAccount = acctype.map(newacc => {
                                        return {
                                            ...newacc,
                                            isSelected: newacc.name == acc.name
                                        }
                                    })
                                    setAcctype(newAccount)

                                }}
                                title={acc.name}
                                isSelected={acc.isSelected}
                            />
                        )
                    }
                </View>

                <View style={{
                    flex: 28,
                }}>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: 'aqua',
                            borderRadius: 10,
                            marginHorizontal: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                            // marginVertical: 15,
                        }}

                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginVertical: 10,
                            marginLeft: 100,
                        }}
                    >
                        Click here to log in
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'red',
                            marginVertical: 25,
                            marginLeft: 147,
                            textDecorationLine: 'underline',
                        }}
                    >
                        Register  
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export const styles = StyleSheet.create({
    logohead: {
        flex: 100,
    },
    hea: {
        flex: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20
    },
    text2: {
        fontSize: 17,
        color: 'white',
        padding: 5,
    },
    imgfire: {
        height: 40,
        width: 40,
        marginHorizontal: 10
    },
    imgquestion: {
        height: 40,
        width: 40,
        marginEnd: 20
    },
    buttonacc: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row'
    },
    viewbut: {
        width: '80%',
        justifyContent: 'center',
        paddingHorizontal: 60,
    },
    textbut: {
        fontSize: 18,
        color: 'black',
        paddingTop: 0,
    },
    viewicon: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconcheck: {
        height: 20,
        width: 20,
        tintColor: 'green',
    }
})