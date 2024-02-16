import React, { useState, useEffect, cloneElement } from 'react'
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
    ScrollView,
    FlatList,
} from 'react-native'
import FoodItem from './FoodItem'
const Foodlist = () => {
    const [food, setfood] = useState([
        {
            name: 'Paella Valenciana',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
            status: 'Opening soon',
            price: 5223.56,
            website: 'https://edition.cnn.com',
            socialNetworks: {
                facebook: 'https://www.facebook.com/duyvu91',
                twitter: 'https://twitter.com/LostInBrittany',

            }
        },
        {
            name: 'Gazpacho',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU',
            status: 'Opening Now',
            price: 1124.56,
            website: 'https://huands.abc.com',
            socialNetworks: {
                twitter: 'https://twitter.com/LostInBrittany',
                instagram: 'https://www.instagram.com/nghiatran__/',
                facebook: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Gazpacho abcsd',
            url: 'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
            status: 'Opening Now',
            price: 1124.56,
            website: 'https://huands.abc.com',
            socialNetworks: {
                twitter: 'https://twitter.com/LostInBrittany',
                instagram: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Pimientos de Padron',
            url: 'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
            status: 'Closing soon',
            price: 2342.56,
            website: 'https://www.uiuds.com',
            socialNetworks: {
                facebook: 'https://www.facebook.com/duyvu91',
            }
        },
        {
            name: 'Albondigas',
            url: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
            status: 'Comming soon',
            price: 2354.56,
            website: 'https://edition.sabc.com',
            socialNetworks: {
                instagram: 'https://www.instagram.com/nghiatran__/'
            }
        },
        {
            name: 'Abc xyz',
            url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
            status: 'Closing soon',
            price: 5568.11,
            website: 'https://www.food.com/',
            socialNetworks: {
                instagram: 'https://www.instagram.com/aeisinger/',
                facebook: 'https://www.instagram.com/aeisinger/'
            }
        }
    ])
    const [foodt, setfoodt] = useState([
        {
            name: 'Abc xyz',
            url: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
        },
        {
            name: 'Albondigas',
            url: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
        },
        {
            name: 'Paella Valenciana',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
        },
        {
            name: 'Gazpacho',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4gjyk-VN438EkSnwwAcCRVgzW6F_MmeH-A&usqp=CAU',
        },
        {
            name: 'Gazpacho abcsd',
            url: 'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
        },
        {
            name: 'Pimientos de Padron',
            url: 'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
        },
    ])
    const [searchfilter, setsearchfiter] = useState('')
    return <View style={{
        flex: 1,
    }}>
        <View style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
        }}>
            <Image 
                source={require('../assets/search.png')}
                style={{
                    height: 30,
                    width: 30,
                    position: 'absolute',
                    left: 10,
                    top: 5,
                }}
            />
            <TextInput 
                onChangeText={(text)=>{
                    setsearchfiter(text)
                }}
                style={{
                    backgroundColor: 'black',
                    height: 40,
                    opacity: 0.4,
                    flex: 1,
                    borderRadius: 10,
                    paddingStart: 43,
                    color: 'white'
                }}
            />
            <Image 
                source={require('../assets/menu.png')}
                style={{
                    height: 40,
                    width: 40,
                }}
            />
        </View>
        <View style={{
            height: 120,
            borderTopWidth: 1,
            borderBottomWidth: 1,
        }}>
            <FlatList
                horizontal={true}
                data={foodt}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={()=>{
                            Alert.alert('Bạn có muốn chọn',`Món ăn: ${item.name}`)
                        }}
                        style={{
                            width: 100,
                            // justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 10,
                        }}
                    >
                        <Image
                            source={{
                                uri: item.url
                            }}
                            style={{
                                height: 70,
                                width: 70,
                                borderRadius: 35,
                                resizeMode: 'cover'
                            }}
                        />
                        <Text style={{
                            fontSize: 13,
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'center'
                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                }
                }
                keyExtractor={(item) => item.name}
            />
        </View>

        <ScrollView>
            {food.map((item) => {
                return <FoodItem food={item} key={item.name} />
            })}
        </ScrollView>
    </View>
}
export default Foodlist