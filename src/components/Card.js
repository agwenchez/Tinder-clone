import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import axios from 'axios';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')


const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';


const Card = ({name,image,bio}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <ImageBackground
                    source={{ uri: image }}
                    style={styles.image}
                >
                    <View style={styles.cardInner}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.bio}>{bio}</Text>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    card: {
        width: width * 0.95,
        height: height * 0.7,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    cardInner:{
        padding:10,
        // backgroundColor:'red'
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 25,
 
    }
})
