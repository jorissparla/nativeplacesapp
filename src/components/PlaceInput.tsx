import * as React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface Props {
  handleAddPlace: (name: string) => void;
}

const PlaceInput: React.FC<Props> = ({ handleAddPlace }) => {
  const [name, setName] = React.useState("");

  function onAddPlace(name: string) {
    if (name.trim() === "") return;
    handleAddPlace(name);
    setName("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={name}
        placeholder="An awesome place"
        onChangeText={text => setName(text)}
        style={styles.placeInput}
      />
      <Button title="Add" onPress={() => onAddPlace(name)} style={styles.placeButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "20%"
  }
});

export default PlaceInput;
