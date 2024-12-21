import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Contact_List_example() {
    const contactList = [
        {
            id: 1,
            name: "Ganesh Tamang",
            email: "tamangganesh@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cFwsdZ9wbFCxQ4nIFXr1yrBnJ_DSZ8ZTUrFUwvzyJeHQDIwpycQiZ58&s",
            jobDescription: "Ganesh is a software engineer specializing in developing scalable web applications using modern frameworks and tools. He is skilled in backend integration, API development, and user experience optimization."
        },
        {
            id: 2,
            name: "Sanju Khadgi",
            email: "sanjukhadgi@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWuxAfFS5DRfv4KS2DNzFok4FMyYXXicw-jBzMpSXziQgucTJVcCbsu0&s",
            jobDescription: "Sanju is a digital marketing expert with a focus on content strategy, SEO, and social media management. She excels at driving traffic and engagement through creative campaigns."
        },
        {
            id: 3,
            name: "Durge Tamang",
            email: "tamangdurge@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiusuIDIG_RpHSrW02BnakzU3ht1vUcSb7LtIyYy9y3YVhArRhcUCIEyI&s",
            jobDescription: "Durge is a project manager with expertise in coordinating cross-functional teams, ensuring timely delivery of projects, and maintaining high-quality standards. He is proficient in Agile methodologies."
        }, {
            id: 4,
            name: "Ganesh Tamang",
            email: "tamangganesh@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cFwsdZ9wbFCxQ4nIFXr1yrBnJ_DSZ8ZTUrFUwvzyJeHQDIwpycQiZ58&s",
            jobDescription: "Ganesh is a software engineer specializing in developing scalable web applications using modern frameworks and tools. He is skilled in backend integration, API development, and user experience optimization."
        },
        {
            id: 5,
            name: "Sanju Khadgi",
            email: "sanjukhadgi@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWuxAfFS5DRfv4KS2DNzFok4FMyYXXicw-jBzMpSXziQgucTJVcCbsu0&s",
            jobDescription: "Sanju is a digital marketing expert with a focus on content strategy, SEO, and social media management. She excels at driving traffic and engagement through creative campaigns."
        },
        {
            id: 6,
            name: "Durge Tamang",
            email: "tamangdurge@hotmail.com",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiusuIDIG_RpHSrW02BnakzU3ht1vUcSb7LtIyYy9y3YVhArRhcUCIEyI&s",
            jobDescription: "Durge is a project manager with expertise in coordinating cross-functional teams, ensuring timely delivery of projects, and maintaining high-quality standards. He is proficient in Agile methodologies."
        },
    ];




    return (


        <View >
            {/* here every value recieves   in {value } so written like this  */}
            {/* method 1 alternative for --->   contactList.map((item)=>()) */}
            <ScrollView horizontal>
                {contactList.map(function ({ id, email, imageUrl, name, jobDescription }) {
                    return (

                        <View key={id} style={styles.singleCard}>

                            <  Image source={{ uri: imageUrl }} style={styles.headingImageContainer} />
                            {/* props always inside { } closures */}
                            <Text style={styles.nameTextStyle}>{name}</Text>
                            <Text style={styles.emailTextStyle}>{email}</Text>
                            <View style={styles.jobDesBox}>

                                <Text style={styles.emailTextStyle}>{jobDescription}</Text>
                            </View>


                        </View>



                    )
                })}
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({

    Content: { height: 450, width: 400, },

    singleCard: {
        margin: 20,
        backgroundColor: "#ada57b",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        width: 400,
        borderRadius: 30,

    },

    headingImageContainer: {
        height: 80,
        borderRadius: 40,
        width: 80,
    },
    nameTextStyle: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',

    },
    emailTextStyle: {
        textAlign: 'center',
        fontSize: 18,
    },


    jobDesBox: {
        padding: 10

    },
    jobDescriptionTextStyle: {

        textAlign: 'center',
        fontSize: 14,
    }

})