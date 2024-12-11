import React from 'react';
import {View, StyleSheet} from 'react-native';

function Hexagon() {
  return (
    <View style={styles.hexagon}>
      <View style={styles.hexagonTop} />
      <View style={styles.hexagonMiddle} />
      <View style={styles.hexagonBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  hexagon: {
    position: 'relative',
    width: 100,
    height: 58, // Height adjusted to make the shape proportional
    backgroundColor: 'transparent',
  },
  hexagonTop: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderTopWidth: 29,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'purple',
    transform: [{rotate: '0deg'}],
  },
  hexagonMiddle: {
    width: 100,
    height: 58,
    backgroundColor: 'purple',
    transform: [{rotate: '0deg'}],
  },
  hexagonBottom: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 29,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'purple',
    transform: [{rotate: '180deg'}],
    bottom: -29,
  },
});

export default Hexagon;
