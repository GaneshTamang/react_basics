import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { contactList, profileData } from './constprops'

export default function Contact_List_example() {

    let myContactList: profileData[] = contactList;



    return (


        <View >
            {/* here every value recieves   in {value } so written like this  */}
            {/* method 1 alternative for --->   contactList.map((item)=>()) */}
            <ScrollView >
                {myContactList.map(({ id, email, imageUrl, name, jobDescription }) => {
                    return (

                        <View key={id} style={styles.singleCard}>
                            {/* image coulumn*/}
                            <View style={{ flexDirection: "column", marginTop: 8, }}>
                                <  Image source={{ uri: imageUrl }} style={styles.imageSytle} />
                                {/* props always inside { } closures */}

                            </View>
                            <View style={styles.desHeadingViewBox} >
                                <Text style={styles.nameTextStyle}>{name}</Text>
                                <Text style={styles.emailTextStyle}>{email}</Text>
                                <Text style={styles.jobDescriptionTextStyle}>{jobDescription}</Text>

                            </View>
                        </View>



                    )
                })}
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    singleCard: {
        margin: 3,
        marginHorizontal: 10,
        backgroundColor: "#ada57b",
        padding: 8,
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: "row",
        borderRadius: 20,

    },
    imageSytle: {
        height: 60,
        borderRadius: 30,
        width: 60,
    },
    desHeadingViewBox: {
        // putting flex here so that the  text's of child stay inside the box
        flex: 1,
        flexDirection: "column",
        alignContent: 'flex-start',
        marginLeft: 20,
    },
    nameTextStyle: {
        // textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',

    },
    emailTextStyle: {
        // textAlign: 'center',
        fontSize: 14,
        textDecorationLine: 'underline',
    },

    jobDescriptionTextStyle: {

        // textAlign: 'center',
        fontSize: 12,
    }

})