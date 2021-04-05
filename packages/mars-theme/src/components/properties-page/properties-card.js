import React from "react";
import { connect, styled, Head } from "frontity";
import { useEffect } from "react";
import Link from "../link";

//const USER_TOKEN = "WgrBF3p7pdJqohqjxNyM"
//const EMAIL = "thomas@careycoxcompany.com"

const PropertiesCard = ({ id, data, link }) => {
  const ref = React.createRef();
  return (
    <>
      {console.log(link)}
      <li
        key={`property-${id}`}
        id={`property-${id}`}
        ref={ref}
        style={{ margin: "10px" }}
      >
        <PropertyPaper>
          <>
            <CardContainer>
              <CardImage src={data.images[1].url} />

              <CardContent>
                <div style={{ margin: "5px,0px,5px,0px" }}>
                  <TagLabel size={"small"} color={"green"}>
                    for sale
                  </TagLabel>

                  <TagLabel size={"small"}>test</TagLabel>
                </div>

                <CardHeader>{data.property_name}</CardHeader>
                <CardAddress>{`${data.address.street_address}`}</CardAddress>
                <CardSubAddress>{`${data.address.city}, ${data.address.state} ${data.address.zip_code}`}</CardSubAddress>

                <div style={{ marginTop: "10px" }}>
                  <p
                    style={{ margin: "0px" }}
                  >{`Total Available: ${data.availability.total_availability} ${data.availability.units}`}</p>
                  <p id={"rates"} style={{ margin: "0px" }}>
                    $12.00 psf
                  </p>

                  <ButtonDiv>
                    <Link link={link} passHref>
                      <LinkButton color="blue">View more {"test"}</LinkButton>
                    </Link>

                    <LinkButton color="orange">Contact Agent</LinkButton>
                  </ButtonDiv>
                </div>
                <br />
              </CardContent>
            </CardContainer>
          </>
        </PropertyPaper>
      </li>
    </>
  );
};

export default connect(PropertiesCard);

const PropertyPaper = styled.div`
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  list-style-type: none;
  box-sizing: inherit;
  overflow: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  max-width: 100%;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1);
    transform-origin: center center;
    transition: all 0.2s ease-in-out;

    box-shadow: -3px 0 1px 0 rgba(255, 0, 0, 0.25),
      0 -3px 1px 0 rgba(255, 0, 0, 0.25), 3px 0 1px 0 rgba(255, 0, 0, 0.25),
      0 3px 1px 0 rgba(255, 0, 0, 0.25);
  }
  &.selected {
    border: #d20000;
    border-style: outset;
  }
`;
const CardContainer = styled.div`
  height: 250px;
  width: 100%;
`;
const CardImage = styled.img`
  object-fit: cover;
  float: left;
  width: 50%;
  height: 110%;
  margin: -5px;
`;
const CardContent = styled.div`
  overflow: hidden;
  margin: 5px 5px 5px 52%;
  width: 48%;
  grid-column-start: 2;
`;
const CardHeader = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  color: #d20000;
  text-transform: uppercase;
  font-size: 10pt;
  line-height: 1em;
`;
const CardAddress = styled.h2`
  margin: 0px;
  margin-bottom: 5px;
  line-height: 0.8em;
`;
const CardSubAddress = styled.h3`
  margin-top: 0px;
  margin-bottom: 5px;
  color: #b5acac;
  text-transform: uppercase;
  font-size: 10pt;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const LinkButton = styled.button`
  -webkit-font-smoothing: antialiased;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  letter-spacing: 0.01071em;
  text-align: left;
  box-sizing: inherit;
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 5px 5px 0;
  background-image: none;
  padding: 0.5833em 0.833em;
  text-transform: none;
  font-weight: 700;
  border: 0 solid transparent;
  border-radius: 0.28571429rem;
  transition: background 0.1s ease;
  margin-left: 0;
  ${
    "" /* background-color: ${(props) =>
    props.color ? props.color : "red"} !important;
  border-color: ${(props) => (props.color ? props.color : "red")} !important;
  color: ${(props) =>
    props.textColor ? props.textColor : "white"} !important; */
  }
  font-size: 0.78571429rem;
  text-transform: uppercase;
`;

const TagLabel = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  letter-spacing: 0.01071em;
  text-align: left;
  box-sizing: inherit;
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 5px 5px 0;
  background-image: none;
  padding: 0.5833em 0.833em;
  text-transform: none;
  font-weight: 700;
  border: 0 solid transparent;
  border-radius: 0.28571429rem;
  transition: background 0.1s ease;
  margin-left: 0;
  ${
    "" /* background-color: ${(props) =>
      props.color ? props.color : "gray"} !important;
    border-color: ${(props) => (props.color ? props.color : "gray")} !important;
    color: ${(props) =>
      props.textColor ? props.textColor : "white"} !important;
    font-size: 0.78571429rem; */
  }
  text-transform: uppercase;
`;
