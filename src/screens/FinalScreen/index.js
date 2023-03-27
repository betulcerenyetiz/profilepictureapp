import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const FinalPicture = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image.uri}} style={styles.image} />
      </View>
    </View>
  );
};

export default FinalPicture;
