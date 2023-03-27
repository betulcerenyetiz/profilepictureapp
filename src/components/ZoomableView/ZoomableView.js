import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function ZoomableView({
  initialOffsetX,
  initialOffsetY,
  initialZoom,
  imageData,
  onManipulationEnd,
  ...props
}) {
  const onManipulationEndCallback = zoomableViewEventObject => {
    if (!onManipulationEnd) {
      return;
    }
    console.log(
      'zoomableViewEventObject',
      zoomableViewEventObject.offsetX - 150 / zoomableViewEventObject.zoomLevel,
    );

    let aspect = 1;
    if (imageData.width > imageData.height) {
      aspect = imageData.height / zoomableViewEventObject.zoomLevel;
    } else {
      aspect = imageData.width / zoomableViewEventObject.zoomLevel;
    }

    const eventObject = {
      width: aspect,
      height: aspect,
      x:
        zoomableViewEventObject.offsetX -
        150 / zoomableViewEventObject.zoomLevel,
      y:
        zoomableViewEventObject.offsetY -
        150 / zoomableViewEventObject.zoomLevel,
      // center: {
      //   x: zoomableViewEventObject.offsetX,
      //   y: zoomableViewEventObject.offsetY,
      // },
    };

    onManipulationEnd(eventObject);
  };

  const getInitialZoom = () => {
    if (initialZoom) {
      return initialZoom;
    } else {
      if (imageData.width > imageData.height) {
        return imageData.width / imageData.height;
      } else {
        return imageData.height / imageData.width;
      }
    }
  };

  return (
    <View style={styles.zoomableParent}>
      <ReactNativeZoomableView
        maxZoom={props.maxZoom ? props.maxZoom : 4}
        minZoom={props.minZoom ? props.minZoom : 0.5}
        zoomStep={props.zoomStep ? props.zoomStep : 0.5}
        initialZoom={getInitialZoom()}
        initialOffsetX={initialOffsetX}
        initialOffsetY={initialOffsetY}
        contentHeight={imageData.height / 2}
        contentWidth={imageData.width / 2}
        {...props}
        onShiftingEnd={(event, gestureState, zoomableViewEventObject) => {
          // console.log(zoomableViewEventObject);
          onManipulationEndCallback(zoomableViewEventObject);
        }}
        onZoomEnd={(event, gestureState, zoomableViewEventObject) => {
          // onImgTransform()
          // console.log(zoomableViewEventObject);
          onManipulationEndCallback(zoomableViewEventObject);
        }}>
        <Image style={styles.image} source={{uri: imageData.uri}} />
      </ReactNativeZoomableView>
      <View style={styles.holeView} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // margin: 8,
    width: '100%',
    height: '100%',
    minHeight: 80,
    overflow: 'hidden',
    resizeMode: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  holeView: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    // right: -width / 2 + 50,
    // bottom: -width / 2 + 310,
    backgroundColor: 'transparent',
    width: '200%',
    height: '200%',

    borderWidth: 150,
    borderRadius: 300,
    borderColor: 'black',
    opacity: 0.3,
  },
  zoomableParent: {
    overflow: 'hidden',
    width: 300,
    height: 300,
  },
});
