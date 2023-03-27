import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FilterData} from '../../handlers/filterData';
import ThumbnailPhoto from '../../handlers/thumbnail';
import styles from './style';

const FilterEditor = ({route}) => {
  const navigation = useNavigation();
  const {image, croppedImage} = route.params;
  const imageRef = useRef(croppedImage);
  const [filter, setFilter] = useState(0);
  let thumbnailImage = useRef('');

  useEffect(() => {
    ThumbnailPhoto(image, 128).then(res => {
      thumbnailImage.current = res;
    });
  }, []);

  const onSelectedFilter = index => {
    setFilter(index);
  };

  //   const takeThumbnail = async () => {
  //     thumbnailImage = await ThumbnailPhoto(image, 128);
  //     console.log('thumbnailImage', thumbnailImage);
  //     return;
  //   };

  const renderFilterItem = ({item, index}) => {
    const FilterComponent = item.filter;
    // takeThumbnail();
    const thumbnail = (
      <Image
        source={{uri: thumbnailImage.current}}
        style={styles.filterImage}
        resizeMode="contain"
      />
    );
    return (
      <TouchableOpacity
        style={styles.filterItem}
        onPress={() => onSelectedFilter(index)}>
        <FilterComponent image={thumbnail} />
        <Text style={styles.filterName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const SelectedFilterComponent = FilterData[filter].filter;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextArea}>
          <Text style={styles.headerText}>Filter Editor</Text>
        </View>
        <View style={styles.headerButtonLine}>
          <TouchableOpacity style={styles.buttonArea}>
            <Text
              style={styles.headerButtonText}
              onPress={() => navigation.goBack()}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonArea}>
            <Text
              style={styles.headerButtonText}
              onPress={() => navigation.navigate('Final')}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <SelectedFilterComponent
          image={
            <Image
              style={styles.image}
              source={{uri: imageRef.current}}
              resizeMode="contain"
            />
          }
        />
      </View>
      <View style={styles.controllerArea}>
        <View style={styles.filterControllerArea}>
          <FlatList
            horizontal
            data={FilterData}
            renderItem={renderFilterItem}
            keyExtractor={item => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default FilterEditor;
