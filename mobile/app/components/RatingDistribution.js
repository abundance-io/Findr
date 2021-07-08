import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function RatingDistribution({ratingDistribution=[4, 6, 28, 36, 150], style }) {
  const [data, setData] = useState({
    total: 0,
    breakdown: [],
    noOfReviews: 0,
  });

  useEffect(() => {
    const info = {
      total: 0, 
      breakdown: [],
      noOfReviews: 0,
    };

    const sum = ratingDistribution.reduce(function(a, b){
      return a + b;
    }, 0);

    info.noOfReviews = sum

    let sumOfValues = 0;

    for (let i = 0; i < ratingDistribution.length; i++) {
      info.breakdown.push({value: i+1, width: ratingDistribution[i]/sum, metrix: ratingDistribution[i]})
      // calculate average value

      sumOfValues = sumOfValues + ratingDistribution[i]*(i+1)
    }
    info.total = Math.round((sumOfValues/sum)*10)/10  ;
    setData(info)
  },[])

  return (
    <View style={[styles.RatingDistribution_wrapper, style]} >
      <View style={styles.RatingDistribution_mainContent} >
        <Text style={styles.RatingDistribution_heading}>{data.total}</Text>
        <Text style={styles.RatingDistribution_noOfReview}>rating</Text>
        <Text style={styles.RatingDistribution_noOfReview}>10k reviews</Text>
      </View>
      <View style={styles.RatingDistribution_detailedRating}>
        {/* <Text style={{backgroundColor: "red"}} >lekan{data[1].value}</Text> */}
        {data.breakdown.map(item => (
          <View key={item.value} style={styles.RatingDistribution_detailedRating_container} >
            <Text style={styles.RatingDistribution_ratingValue} >{item.value}</Text>
            <View style={styles.RatingDistribution_ratingContainer}>
              <View style={[styles.RatingDistribution_ratingContainer_value, {flex: item.width}]} />
            </View>
            <Text style={styles.RatingDistribution_matrix} >{item.metrix}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  RatingDistribution_wrapper: {
    flexDirection: "row",
    padding: 10,
    // backgroundColor: "grey"
  },
  RatingDistribution_mainContent: {
    flex: .6,
    // backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  RatingDistribution_heading: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 0,
  },
  RatingDistribution_noOfReview: {
    fontSize: 18,
    
  },
  RatingDistribution_detailedRating: {
    flex: 1,
    // backgroundColor: "dodgerblue",
    flexDirection: "column-reverse"
  },
  RatingDistribution_detailedRating_container: {
    flexDirection: "row",
    alignItems: "center"

  },
  RatingDistribution_ratingValue: {
    fontSize: 16,
    marginRight: 5,
  },
  RatingDistribution_ratingContainer: {
    flex: 1,
    height: 5,
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 5,
  },
  RatingDistribution_ratingContainer_value: {
    backgroundColor: "#000",
    height: 5,
  },
  RatingDistribution_matrix: {
    width: 40,
    // backgroundColor: "pink"
  },
})