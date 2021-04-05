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

const Item = ({ state, item }) => {
  const data = item.acf;

  return (
    <div>
      {/* {console.log(item)} */}
      <PropertiesCard
        id={data.id}
        data={data}
        link={item.link}
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
