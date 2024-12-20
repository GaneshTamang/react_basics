import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

const Image_Example = () => {
  return (
    
      <View style={styles.container}>
        <Image style={styles.imageContainer} source={{uri:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"}} />
<Text>
Lord Krishna, a central figure in Hindu mythology, is revered as the eighth incarnation of Lord Vishnu. Born over 5,000 years ago in Mathura, he is celebrated as a divine hero, philosopher, and the embodiment of love and compassion. His life, chronicled in ancient scriptures like the Mahabharata and Srimad Bhagavatam, is filled with extraordinary tales of bravery, wisdom, and divine play (leelas).

Krishna’s childhood is marked by playful mischief and miraculous feats, such as lifting the Govardhan Hill to protect his devotees. His enchanting flute melodies and playful interactions with the Gopis of Vrindavan symbolize divine love and devotion.


</Text>
      </View>
  )
}

export default Image_Example

const styles = StyleSheet.create({
    container:{
        flex:3, borderTopLeftRadius:50,borderBottomRightRadius:50,
        backgroundColor:"yellow",
        margin:15,
        padding:10,
    },

    imageContainer:{
    flex:1,
        height:300,
        // borderRadius:30,
        borderTopLeftRadius:50
    }
})
