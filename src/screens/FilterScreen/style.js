import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#181818',
  },
  headerTextArea: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  headerButtonLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonArea: {
    width: 60,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterArea: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 300,
    height: 300,
    minHeight: 80,
    overflow: 'hidden',
    resizeMode: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  controllerArea: {
    width: '100%',
    backgroundColor: '#181818',
  },
  filterControllerArea: {
    width: '100%',
    height: 100,
    backgroundColor: '#181818',
    alignItems: 'center',
  },
  filterItem: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderColor: '#413F42',
    borderWidth: 1.5,
    margin: 7.5,
  },
  filterImage: {
    width: 50,
    height: 50,
  },
  filterName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});