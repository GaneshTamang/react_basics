import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Action_Card_Example = () => {
    // ! linking to open url on press method

    function openWebsite(websiteLink: string) { Linking.openURL(websiteLink); };
    return (
        <View style={actionCardStyles.Card}>
            {/* card header */}
            <View style={actionCardStyles.HeadingContainer}>
                <Text style={actionCardStyles.headingText}>Heading Here</Text>
            </View>


            {/* body */}

            <View style={actionCardStyles.BodyImageContainer}>
                <Image source={{
                    uri: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=2048x2048&w=is&k=20&c=oo7SGfjmPkybpqoNccDsYWG-4uxSmn8G79NiLA1mNvs="

                }} style={actionCardStyles.ImageStyle} />

                {/* body text */}

                <View style={{ flex: 1, margin: 10 }}>
                    <Text style={actionCardStyles.BodyTExt}>The golden sun dipped below the horizon, painting the sky in hues of orange and pink, as a gentle breeze carried the scent of blooming flowers; birds sang their evening lullabies, while shadows stretched long across the ground, and the world seemed to pause in perfect harmony, embracing the quiet serenity.</Text>
                </View>
            </View>


            {/* Footer view */}
            <View style={actionCardStyles.FooterContainer}>
                <TouchableOpacity onPress={() => openWebsite("https://github.com/GaneshTamang")}>
                    <View style={{ backgroundColor: "white", padding: 15, }}>
                        <Text>Show more  </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Action_Card_Example;

const actionCardStyles = StyleSheet.create({
    Card: {
        margin: 20,
        height: 500,
        // width: 300,
        backgroundColor: "orange",
        borderRadius: 50,
    },
    HeadingContainer: {
        flex: 2,
        // backgroundColor: "green",
        padding: 15,
        fontWeight: '900',
    },
    headingText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
    },
    BodyImageContainer: {
        flex: 8,
        // backgroundColor: "grey",
        padding: 15,
    },
    ImageStyle: {
        flex: 1,
        height: 250,
    },
    BodyTExt: {
        textAlign: 'center',
        fontSize: 14,

    },
    FooterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        // backgroundColor: "yellow",
        padding: 15,
    },




});