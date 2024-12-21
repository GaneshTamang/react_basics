

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ElevatedScroll from './basic_components/elevated_scroll_view';
import FlatListExample from './basic_components/flatlist_example';
import Image_Example from './basic_components/image_example';
import Action_Card_Example from './basic_components/action_card';
import Contact_List_example from './basic_components/Contact_List_example';

function Main_app() {
  return (
    <ScrollView >
      <View style={mainPageStyles.mainContainer} >
        <Text>WElcome</Text>
        <ElevatedScroll />
        <FlatListExample />
        <Image_Example />
        <Action_Card_Example />
        <Contact_List_example />
      </View>

    </ScrollView>
  )
}

const mainPageStyles = StyleSheet.create({

  mainContainer: { flex: 1, backgroundColor: "pink", }
})



export default Main_app;