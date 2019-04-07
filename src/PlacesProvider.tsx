import * as React from "react";
import { Place } from "../src/types/Place";
import { useState } from "react";

let initialValue: Place[] = [];
let initialSelected: Place = null;

export const PlacesContext = React.createContext({ places: initialValue, selectedPlace: initialSelected });

interface Props {
  children: any;
}

export const PlacesProvider: React.FC<Props> = ({ children }) => {
  let initialValue: Place[] = [];
  let initialSelected: Place = null;
  const [places, setPlaces] = useState(initialValue);
  const [selectedPlace, setSelectedPlace] = useState(initialSelected);
  return (
    <PlacesContext.Provider value={{ places, setPlaces, selectedPlace, setSelectedPlace }}>
      {children}
    </PlacesContext.Provider>
  );
};
