import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import starSvg from "../../../assets/star";
import openSign from "../../../assets/openSign";

import styled from "styled-components";

const CardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};

  padding: 0;
  margin: 0;
`;
const CardParagraph = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  overflow: hidden;
  height: 20px;
  padding: 0;
  margin: 0;
`;

const CardContainer = styled(Card)`
  border-radius: ${(props) => props.theme.sizes[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 5;
  overflow: hidden;
`;

const Content = styled(Card.Content)`
  padding: ${(props) => props.theme.sizes[1]};
  margin-bottom: ${(props) => props.theme.sizes[0]};
`;

const RatingRow = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.sizes[0]};
  justify-content: space-between;
`;
const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 0;
`;
const LeftRow = styled.View`
  flex-direction: row;
`;
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "No data shown",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardContainer>
      <Card.Cover source={{ uri: photos[0] }} />
      <Content>
        <TitleRow>
          <CardTitle>{name}</CardTitle>

          {isOpenNow && (
            <SvgXml xml={openSign} width={30} height={30} bottom={200} />
          )}
        </TitleRow>

        <RatingRow>
          <LeftRow>
            {ratingArray.map(() => (
              <SvgXml xml={starSvg} width={20} height={20} />
            ))}
          </LeftRow>

          {isClosedTemporarily && (
            <Text variant='label' style={{ color: "red" }}>
              [ Closed Temporarily ]
            </Text>
          )}
        </RatingRow>
        <CardParagraph>{address}</CardParagraph>
      </Content>
    </CardContainer>
  );
};
