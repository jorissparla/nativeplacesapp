import * as React from "react";
import { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import List from "./src/components/List";
import PlaceDetail from "./src/components/PlaceDetail";
import PlaceInput from "./src/components/PlaceInput";
import {
  addPlace,
  deletePlace,
  initialState,
  reducer,
  selectPlace,
  unSelectPlace,
  UNSELECT_PLACE
} from "./src/placeReducer";

interface Props {}

export const Hello: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAddPlace(name: string) {
    dispatch(addPlace(name));
  }
  function placeSelectedHandler(key: string) {
    dispatch(selectPlace(key));
  }
  function handleDeleteItem() {
    dispatch(deletePlace());
  }
  console.log("render");
  return (
    <View style={styles.container}>
      <PlaceDetail
        selectedPlace={state.selectedPlace}
        onDeleteItem={handleDeleteItem}
        onModalClose={() => dispatch(unSelectPlace())}
      />
      <PlaceInput handleAddPlace={handleAddPlace} />
      <List places={state.places} onItemSelect={placeSelectedHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

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
  },
  listContainer: {
    width: "100%"
  }
});
