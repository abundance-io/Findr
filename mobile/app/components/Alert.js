import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import UserIcon from './UserIcon'


export default function Alert() {
  return (
    <View style={styles.Alert} >
      <UserIcon />
      <View style={styles.Alert_content_container}>
        <View style={styles.Alert_brand_date_container}>
          <Text style={styles.Alert_brand} >lekan</Text>
          <Text style={styles.Alert_date} >1:15 AM</Text>
        </View>
        <Image 
          source={{
            width: "100%",
            height: 150,
            uri: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          }}
          resizeMode="cover"
          style={styles.Image_container}
        />
        <Text numberOfLines={6} style={styles.Alert_description}>
          Lorem ipsum dolor sit amet, adipiscing elit. 
          Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, 
          purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc 
          viverra imperdiet enim. Fusce est. Vivamus a tellus.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Alert: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  Alert_content_container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  Alert_brand_date_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  Alert_brand: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  Alert_date: {
    fontSize: 18,
    fontWeight: "normal"
  },
  Image_container: {
    marginVertical: 10,
    borderRadius: 5,
  },
  Alert_description: {
    fontSize: 16,
    lineHeight: 22,
  },
})