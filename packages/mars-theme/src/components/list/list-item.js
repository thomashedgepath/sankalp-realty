import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import PropertiesCard from "../properties-page/properties-card";

/**
 * Item Component
 *
 * It renders the preview of a blog post (property).
 **/

const Item = ({ prop_id, item, selected }) => {
  const data = item.acf;

  const onClickHandler = ({actions}) => {
    actions.theme.setSelectedPropertyID(prop_id)
    actions.theme.setSelectedPropertyCoordinates(coordinates)
  }

  return (
    <div>
      {/* {console.log(item)} */}
      <PropertiesCard
        selected={selected}
        prop_id={prop_id}
        data={data}
        link={item.link}
        onclick={onClickHandler}
      ></PropertiesCard>
    </div>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Card = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
