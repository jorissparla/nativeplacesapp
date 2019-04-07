import * as React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";
// import img from '../assets/beach.jpg'

interface Props {
  placeName: string;
  placeImage: { uri: string };
  onItemPressed: (item: string) => void;
}

const ListItem: React.FC<Props> = ({ placeName, onItemPressed, placeImage }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemPressed(placeName)}>
      <View style={styles.listitem}>
        {placeImage && <Image resizeMode="contain" source={placeImage} style={styles.placeImage} />}
        <Text>{placeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listitem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 7,
    height: 30,
    width: 30
  }
});

export default ListItem;
