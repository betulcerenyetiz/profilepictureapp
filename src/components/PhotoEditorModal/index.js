import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
} from 'react-native';
import styles from './style';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

const EditorModal = ({modalVisible, image, zoom, focusedRegion}) => {
  const [pressed, setPressed] = useState('filter');
  console.log('zoom', zoom);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTextArea}>
            <Text style={styles.headerText}>Profile Picture Editor</Text>
          </View>
          <View style={styles.headerButtonLine}>
            <TouchableOpacity style={styles.buttonArea}>
              <Text style={styles.headerButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonArea}>
              <Text style={styles.headerButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          {pressed === 'filter' ? (
            <View style={styles.filterArea} />
          ) : (
            <View style={styles.zoomableParent}>
              <ReactNativeZoomableView
                maxZoom={4}
                minZoom={0.5}
                zoomStep={0.5}
                initialZoom={zoom}
                initialOffsetX={focusedRegion.center.x}
                initialOffsetY={focusedRegion.center.y}
                bindToBorders={true}
                onShiftingEnd={(e, g, zoomableViewEventObject) => {
                  console.log('onShiftingEnd', zoomableViewEventObject);
                }}
                onZoomEnd={(e, g, zoomableViewEventObject) => {
                  console.log('onShiftingEnd', zoomableViewEventObject);
                }}>
                <Image source={{uri: image.uri}} style={styles.image} />
              </ReactNativeZoomableView>
              <View style={styles.holeView} pointerEvents="none" />
            </View>
          )}
        </View>
        <View style={styles.controllerArea}>
          <View style={styles.conterollerButtonArea}>
            <TouchableOpacity
              style={
                pressed === 'filter'
                  ? styles.controllerButtonPressed
                  : styles.controllerButton
              }
              onPress={() => setPressed('filter')}>
              <Text style={styles.controllerButtonText}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                pressed === 'crop'
                  ? styles.controllerButtonPressed
                  : styles.controllerButton
              }
              onPress={() => setPressed('crop')}>
              <Text style={styles.controllerButtonText}>Crop</Text>
            </TouchableOpacity>
          </View>
          {pressed === 'filter' ? (
            <View style={styles.filterControllerArea}>
              <FlatList
                horizontal
                data={FakeData}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.filterItemArea}>
                    <Text style={styles.filterItemText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const FakeData = [
  {
    id: 0,
    name: 'None',
  },
  {
    id: 1,
    name: 'Filter 1',
  },
  {
    id: 2,
    name: 'Filter 2',
  },
  {
    id: 3,
    name: 'Filter 3',
  },
  {
    id: 4,
    name: 'Filter 4',
  },
  {
    id: 5,
    name: 'Filter 5',
  },
  {
    id: 6,
    name: 'Filter 6',
  },
  {
    id: 7,
    name: 'Filter 7',
  },
  {
    id: 8,
    name: 'Filter 8',
  },
  {
    id: 9,
    name: 'Filter 9',
  },
];

export default EditorModal;
