import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Home from "./home/home";
import Locations from "../properties-page/locations";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      {console.log(state.source)}
      {/* {console.log(state.router.link)} */}
      {/*If this is the homepage were gonna load something different*/}
      {data.isHome == true && <Home when={data.isHome == true} />}

      {/*If this is any list besides the homepage, load the blog posts*/}
      {data.isHome != true && (
        <>
          <PageContainer>
            <MapContainer>
              <Locations></Locations>
            </MapContainer>
            <PropertyContainer>
              <ScrollBox>
                {/* Iterate over the items of the list. */}
                {data.items.map(({ type, id }) => {
                  const item = state.source[type][id];
                  // Render one Item component for each one.
                  {
                    /* console.log(state.source.post[id].acf) */
                  }
                  return <Item key={item.id} item={item} />;
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

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
