import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Product from './Product';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: "https://picsum.photos/200/300.jpg",
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: "https://picsum.photos/200/300.jpg",
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    image: "https://picsum.photos/200/300.jpg",
    title: 'Third Item',
  },
];


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1";
    fetch(apiURL)
    .then(res => res.json())
    .then(resJson => {
      setData(resJson)
    }).catch(error => console.log("error: ", error))
  }

  const renderItem = ({ item }) => (
    <Product url={"https://picsum.photos/200/300.jpg"} product_name={item.title} style={{marginHorizontal: 5,}} />
    // <Item title={item.title} />
  );

  return (
    <View style={styles.ProductScroller_container}>
      <Text style={styles.ProductScroller_header} >Back to School</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ProductScroller_container: {
    marginBottom: 20,
  },
  ProductScroller_header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  }
});

export default App;