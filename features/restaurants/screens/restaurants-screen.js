import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurants-info.components";

import styled from "styled-components";

const ListViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;
const RestaurantListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[2]};
`;
export const RestaurantsScreen = () => {
  // const restaurantss = {
  //   name: "AYam bakar kang benz",
  //   icon: "",
  //   photos: "",
  //   address: "Monroe Towe Jababeka, Mekarmukti, Cikarang Utara, 17350 ",
  //   isOpenNow: true,
  //   rating: 4,
  //   isClosedTemporarily: ""
  // };
  return (
    <ListViewContainer>
      <SearchBarContainer>
        <SearchBar placeholder='Search' />
      </SearchBarContainer>
      <RestaurantListView>
        <RestaurantInfo />
      </RestaurantListView>
    </ListViewContainer>
  );
};
