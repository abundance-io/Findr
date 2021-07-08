import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

// components
// import SignUp from "./app/screen/Signup"
import CarouselCard from "./CarouselCard"

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5sdf0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455sdfs9d72',
    title: 'Third Item',
  },
];

export default function App() {
  const Seperator = () => (
    <View style={{width: 10, height: "100%"}}></View>
  )
  return (
    <View style={styles.Carousel_container}>
      <FlatList 
        horizontal
        data={DATA}
        renderItem={() => <CarouselCard />}
        keyExtractor={item => item.id}
        style={{paddingLeft: 10,}}
        ItemSeparatorComponent={Seperator}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  Carousel_container: {
    // backgroundColor: "dodgerblue",
    alignItems: 'center',
  },
})