

import {  ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ElevatedScroll from './components/elevated_scroll_view';
import FlatListExample from './components/flatlist_example';
import Image_Example from './components/image_example';

 function Main_app() {
  return (
    <ScrollView>
    <View style={mainPageStyles.mainContainer} >
      <Text>WElcome</Text>
<ElevatedScroll/>
<FlatListExample/>
<Image_Example/><Image_Example/><Image_Example/><Image_Example/>
    </View></ScrollView>
  )
}

const mainPageStyles = StyleSheet.create({

  mainContainer:{flex:1,backgroundColor:"pink"}
})



export default Main_app;