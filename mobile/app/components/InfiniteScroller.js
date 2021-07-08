import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
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

  return (
    <View style={styles.ProductScroller_container}>
      {/* <Text style={styles.ProductScroller_header} >Back to School</Text> */}
      <View style={styles.ProductScroller_Product_container}>
        {data.map(item => (
          <Product key={item.id.toString()} url={"https://images.unsplash.com/photo-1554230505-919a13968970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"} product_name={item.title} style={{marginBottom: 10,}} />
        ))}
      </View>
    </View>
  );
}

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
  ProductScroller_container: {
    marginBottom: 20,
    paddingHorizontal: 10,
    width: width,
  },
  ProductScroller_header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ProductScroller_Product_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
  }
});

export default App;