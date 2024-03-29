import React, { useEffect, useState } from "react";
import { connect, Head, styled } from "frontity";
import List from "../list";
import list from "../list/list";
import KeyFacts from "./key_facts";
import ImageSection from "./image_section";
import PricingSection from "./pricing_section";
import MapGL, { NavigationControl } from "react-map-gl";
import MapMarker from "../properties-page/map-marker";
import { Button, Divider, Header, Table, Label, Icon } from "semantic-ui-react";

const Property = ({ state, actions }) => {
  // Get information about the current URL.
  const url_data = state.source.get(state.router.link);
  // Get the full data of the post.
  const post = state.source[url_data.type][url_data.id];
  // Get the Property Attributes from the ACF fields
  const data = post.acf;
  // Create single string for property address
  const address_string = `${data.address.street_address} ${data.address.city}, ${data.address.state} ${data.address.zip_code}`;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  const accessToken =
    "pk.eyJ1IjoidGhvbWFzaGVkZ2VwYXRoIiwiYSI6ImNqNW83cXhsYjQyYnAyd25xbjdwbG1xbmoifQ.u8oSi903x7-iK9S0-lNuNg";
  const [viewport, setViewport] = useState({
    latitude: parseFloat(data.address.lat),
    longitude: parseFloat(data.address.lng),
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  // Load the post, but only if the data is ready.
  return (
    <>
      {}

      <ContentContainer>
        <MainColumn>
          <MainContent>
            <div style={{ margin: "15px 0" }}>
              <TagContainer>
                {/* Tags for property status (sale / lease) */}
                {data.status.for_sale ? (
                  <>
                    <Label size={"large"} color={"green"}>
                      For Sale
                    </Label>
                  </>
                ) : (
                  <></>
                )}

                {data.status.for_lease ? (
                  <>
                    <Label size={"large"} color={"blue"}>
                      For Lease
                    </Label>
                  </>
                ) : (
                  <></>
                )}
              </TagContainer>
              {data.property_name && <PageHeader>{data.property_name}</PageHeader>}
              <Address>{address_string}</Address>
            </div>

            <ImageSection data={data.images}></ImageSection>

            <SecondaryHeader>{data.headers.secondary}</SecondaryHeader>
            <PageHeader>{data.headers.primary}</PageHeader>
            <Divider horizontal>
              <Header as="h4">Property Description</Header>
            </Divider>
            <DescriptionText
              dangerouslySetInnerHTML={{ __html: data.property_description }}
            ></DescriptionText>
            <Divider horizontal>
              <Header as="h4">Key Facts</Header>
            </Divider>
            <KeyFacts data={data.key_facts}></KeyFacts>
            <Divider horizontal>
              <Header as="h4">Location</Header>
            </Divider>
            <MapContainer>
              <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapboxApiAccessToken={accessToken}
              >
                <NavControls />
                <MapMarker coordinates={[data.address.lat, data.address.lng]} />
              </MapGL>
            </MapContainer>
          </MainContent>
        </MainColumn>
        <SideColumn>
          <MainContent>
            <div style={{ margin: "27px 0", textAlign: "center" }}>
              <SidebarHeader>Listing Info</SidebarHeader>
            </div>

            <Divider horizontal>
              <Header as="h4">Availability</Header>
            </Divider>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Total Availability</Table.HeaderCell>
                  <Table.HeaderCell>
                    {data.availability.total_availability}{" "}
                    {data.availability.units}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {data.availability.min_divisible !== "" ? (
                <Table.Row>
                  <Table.Cell>Min Divisible</Table.Cell>
                  <Table.Cell>
                    {data.availability.min_divisible} {data.availability.units}
                  </Table.Cell>
                </Table.Row>
              ) : (
                <></>
              )}
              {data.availability.max_contig !== "" ? (
                <Table.Row>
                  <Table.Cell>Max Contig</Table.Cell>
                  <Table.Cell>
                    {data.availability.max_contig} {data.availability.units}
                  </Table.Cell>
                </Table.Row>
              ) : (
                <></>
              )}
            </Table>

            <CenterText>
              <PricingSection
                data={data.pricing}
                status={data.status}
              />
            </CenterText>

            <Divider horizontal>
              <Header as="h4">Listing Agent</Header>
            </Divider>

            <CenterText>
              <h2>Mukesh Parna</h2>
              <p>mp@sankalprealty.us</p>
              <p>(469) 712-6773</p>
            </CenterText>

            <ButtonContainer>
              <Button
                fluid
                color="orange"
                onClick={actions.theme.toggleContactModal}
              >
                Contact Us
              </Button>
            </ButtonContainer>

            {data.brochure.link !== "" && (
              <ButtonContainer>
                <Button fluid color="blue">
                  <a
                    href={data.brochure.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brochure
                  </a>
                </Button>
              </ButtonContainer>
            )}

            {data.video_link !== "" && (
              <ButtonContainer>
                <Button fluid color="red">
                  <a
                    href={data.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video Link
                  </a>
                </Button>
              </ButtonContainer>
            )}
          </MainContent>
        </SideColumn>
      </ContentContainer>
    </>
  );
};

export default connect(Property);

//Layout Styles
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 15vw 60vw 20vw 5vw;
  gap: 10px;
  justify-content: center;
  color: #007a0f;
  margin: 0;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
    margin: 2em 0 0 0;
  }
`;
const MainColumn = styled.div`
  grid-column-start: 2;
  display: flex;
  font-weight: 500;
  text-align: left;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: none;
  margin: 10px 0 10px 0;
`;
const SideColumn = styled(MainColumn)`
  grid-column-start: 3;
  align-content: left;
  align-items: start;
  display: flex;
  background-color: none;

  ${"" /* border-left: 4px solid #2b4f77; */}

  @media (max-width: 768px) {
  }
`;
const MainContent = styled.div`
  display: block !important;
  background-color: white;
  padding: 0 20px 0 20px;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  .ui.header {
    font-size: .5em;
    line-height: 1em;
  }
  .ui.table {
    font-size: 0.6em;
  }
  .ui.large.label, .ui.large.labels .label {
    font-size: 0.5rem;
    border-radius: 0.3em;
    line-height: 1em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0 10px 0;

  .ui.button, .ui.buttons .button, .ui.buttons .or {
    font-size: 0.5rem;
  }
`;

// Text Styles
const PageHeader = styled.h1`
  font-size: 1.25em;
  line-height: 1em;
  text-transform: uppercase;
  color: #991a1e;
`;
const Address = styled.h2`
  font-size: 0.75em;
  line-height: 1;
  text-transform: uppercase;
  color: #2e5077;
`;
const SecondaryHeader = styled.h3`
  font-size: 0.75em;
  line-height: 1;
  text-transform: uppercase;
  color: #666766;
`;
const SidebarHeader = styled.h3`
  font-size: 0.75em;
  line-height: 1;
  text-transform: uppercase;
  color: #991a1e;
`;
const DescriptionText = styled.p`
  font-size: 0.75em;
  color: black;
`;

// Map Styles
const MapContainer = styled.div`
  background-color: grey;
  flex-grow: 1;
  height: 60vh;
  margin: 10px;
`;
const NavControls = styled(NavigationControl)`
  position: relative;
  float: right;
  margin: 10px;
`;

const TagContainer = styled.div`
  margin: 0 0 10px 0;
`;

const CenterText = styled.div`
  text-align: center;
  margin-bottom: 2em;

  h2 {
    font-size: 1em;
    text-transform: uppercase;
    color: #2e5077;
    margin-bottom: .5em;
  }
  p {
    font-size: 0.75em;
    margin: 0;
  }
`;
