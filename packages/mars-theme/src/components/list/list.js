import React, { useState, useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Home from "./home/home";
import Locations from "../properties-page/locations";
import InfiniteScroll from "react-infinite-scroll-component";

const List = ({ state }) => {
  // Get the data of the current list.
  var data = state.source.get(state.router.link);
  const prop_coordinates = [];

  return (
    <>
      {/* {console.log(state.source)} */}
      {/* {console.log(state.router.link)} */}
      {/*If this is the homepage were gonna load something different*/}
      {data.isHome == true && <Home when={data.isHome == true} />}

      {/*If this is any list besides the homepage, load the blog posts*/}
      {data.isHome != true && (
        <>
          <PageContainer>
            <MapContainer>
              <Locations prop_coordinates={prop_coordinates}></Locations>
            </MapContainer>
            <PropertyContainer>
              <ScrollBox>
                {state.theme.selectedPropertyID !== 0 && (<>
                  <Item
                    selected={true}
                    prop_id={state.theme.selectedPropertyID}
                    item={state.source["post"][state.theme.selectedPropertyID]}
                  />
                 
                <hr></hr>
                </>
                )}
                {/* Iterate over the items of the list. */}
                {data.items.map(({ type, id }) => {
                  const item = state.source[type][id];
                  const lat = item.acf.address.lat;
                  const lng = item.acf.address.lng;
                  // Add each one to the coordinate list to pass to the Map component (Locations).
                  prop_coordinates.push({
                    id: id,
                    lat: lat,
                    lng: lng,
                  });

                  if (id !== state.theme.selectedPropertyID) {
                    // Render one Item component for each one.
                    return <Item prop_id={item.id} item={item} />;
                  }
                })}
                <Pagination />
              </ScrollBox>
            </PropertyContainer>
          </PageContainer>
        </>
      )}
    </>
  );
};

export default connect(List);
const PageContainer = styled.div`
  height: 80vh;
`;

const MapContainer = styled.div`
  width: 60%;
  position: absolute;
  left: 0;
  list-style: none;
`;

const PropertyContainer = styled.div`
  width: 40%;
  height: 80vh;
  position: absolute;
  right: 0;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Chrome Safari Opera */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ScrollBox = styled.div``;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
