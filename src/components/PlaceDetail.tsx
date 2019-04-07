import * as React from "react";
import { View, Modal, Image, Text, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Place } from "../types/Place";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  selectedPlace: Place;
  onDeleteItem: () => void;
  onModalClose: () => void;
}

const PlaceDetail: React.FC<Props> = ({ selectedPlace, onDeleteItem, onModalClose }) => {
  if (!selectedPlace) return <View />;
  const { name, image } = selectedPlace;
  return (
    <Modal visible={selectedPlace !== null} animationType="fade" onRequestClose={onModalClose}>
      <View style={styles.modalContainer}>
        <Image resizeMode="contain" source={image} style={styles.placeImage} />
        <Text style={styles.placeName}>{name}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onDeleteItem}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
          <Button color="black" title="Close" onPress={onModalClose} />
          {/* <Button color="#000" title="Delete" onPress={onDeleteItem} /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  button1: {
    backgroundColor: "#000",
    margin: 10
  },
  deleteButton: {
    alignItems: "center",
    margin: 10
  },
  placeImage: {
    margin: 5,
    height: 300,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default PlaceDetail;
