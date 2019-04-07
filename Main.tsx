import * as React from "react";
import { useState, useReducer } from "react";
import { StyleSheet, View } from "react-native";
import List from "./src/components/List";
import PlaceDetail from "./src/components/PlaceDetail";
import PlaceInput from "./src/components/PlaceInput";
import { Place } from "./src/types/Place";
import { reducer, initialState, ADD_PLACE, SELECT_PLACE, DELETE_PLACE, UNSELECT_PLACE } from "./src/Reducer";
const placeImage = { uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg" };

interface Props {}

export const Hello: React.FC<Props> = () => {
  let initialValue: Place[] = [];
  let initialSelected: Place = null;

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [places, setPlaces] = useState(initialValue);
  // const [selectedPlace, setSelectedPlace] = useState(initialSelected);

  // function handleAddPlace(name: string) {
  //   setPlaces(places.concat({ key: Math.random().toString(), name: name, image: placeImage }));
  // }
  // function placeSelectedHandler(key: string) {
  //   setSelectedPlace(places.find(place => place.key === key));
  // }
  // function handleDeleteItem() {
  //   setPlaces(places.filter((place, i) => place.key !== selectedPlace.key));
  //   setSelectedPlace(null);
  // }
  function handleAddPlace(name: string) {
    dispatch({ type: ADD_PLACE, placeName: name });
  }
  function placeSelectedHandler(key: string) {
    dispatch({ type: SELECT_PLACE, placeKey: key });
  }
  function handleDeleteItem() {
    dispatch({ type: DELETE_PLACE });
  }
  return (
    <View style={styles.container}>
      <PlaceDetail
        selectedPlace={state.selectedPlace}
        onDeleteItem={handleDeleteItem}
        onModalClose={() => dispatch({ type: UNSELECT_PLACE })}
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
