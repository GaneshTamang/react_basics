
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ElevatedScroll() {
  return (
    <View style={[elevatedContainerScrollPageStyles.container, { padding: 15, }]}>
      <Text style={elevatedContainerScrollPageStyles.textHEading}>Elevated Box with shadow in Scroll</Text>
      <ScrollView horizontal >

        <View style={[elevatedContainerScrollPageStyles.cardElevated, elevatedContainerScrollPageStyles.cardOne]}>
          <Text>
            Box1
          </Text>
        </View><View style={[elevatedContainerScrollPageStyles.cardElevated, elevatedContainerScrollPageStyles.cardTwo]}>
          <Text>
            Box2
          </Text>
        </View>
        <View style={[elevatedContainerScrollPageStyles.cardElevated, elevatedContainerScrollPageStyles.cardthree]}>
          <Text>
            Box3
          </Text>
        </View>
        <View style={[elevatedContainerScrollPageStyles.cardElevated, elevatedContainerScrollPageStyles.cardfour]}>
          <Text>
            Box4
          </Text>
        </View>


      </ScrollView>
    </View>
  )
}

const elevatedContainerScrollPageStyles = StyleSheet.create({

  textHEading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "purple"

  },
  container: {
    flex: 1,
    // flexDirection:'row',

  },

  cardElevated: {
    flex: 1,
    // here justify content is from top bottom for main axis alignment
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 15,
    borderRadius: 50,
    elevation: 30,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: { height: 50, width: 50 },
    shadowRadius: 50,

  },


  cardOne: {


    backgroundColor: "red"


  },
  cardTwo: {

    backgroundColor: "blue"
  },
  cardthree: {
    backgroundColor: "green"
  },

  cardfour: { backgroundColor: "yellow" }

})



export default ElevatedScroll;