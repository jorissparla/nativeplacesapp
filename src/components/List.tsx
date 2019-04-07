import * as React from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";
interface Props {
  places: { key: string; name: string; image: { uri: string } }[];
  onItemSelect: (index: string) => void;
}

const List: React.FC<Props> = ({ places, onItemSelect }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item, index }) => {
        return <ListItem placeName={item.name} placeImage={item.image} onItemPressed={() => onItemSelect(item.key)} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default List;
