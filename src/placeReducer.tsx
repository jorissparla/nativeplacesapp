import * as React from "react";
import { Place } from "./types/Place";
import { useState } from "react";
const placeImage = { uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg" };
let initialValue: Place[] = [];
let initialSelected: Place = null;

export let initialState = {
  places: initialValue,
  selectedPlace: initialSelected
};

export const ADD_PLACE = "add_place";
export const DELETE_PLACE = "remove_place";
export const SELECT_PLACE = "select_place";
export const UNSELECT_PLACE = "unselect_place";

export const addPlace = (placeName: string) => {
  return {
    type: ADD_PLACE,
    placeName
  };
};
export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};
export const selectPlace = (key: string) => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};
export const unSelectPlace = () => {
  return {
    type: UNSELECT_PLACE
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({ key: Math.random().toString(), name: action.placeName, image: placeImage })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.placeKey)
      };
    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};
