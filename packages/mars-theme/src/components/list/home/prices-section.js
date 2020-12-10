import React from "react";
import { connect, styled } from "frontity";
import PriceTable from "./price-table";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "../../link";

function createData(title, price) {
  return { title, price };
}

const prerollRows = [
  createData("1g", "$3.00 OTD"),
  createData("7g", "$19.00 OTD"),
  createData("14g", "$35.00 OTD"),
  createData("28g", "$49.00 OTD"),
];

const flowerRows = [
  createData("Ground Flower", "$39.00 OTD"),
  createData("Mid Shelf", "$70.00 OTD"),
  createData("Top Shelf", "$110.00 OTD"),
  createData("Premium Shelf", "$150.00 OTD"),
];

const concentrateRows = [
  createData("1856 Carts (500mg)", "4 for $79.00 OTD"),
  createData("Select Concentrates", "$20.00 /g OTD"),
];

const PricesSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <SectionContainer key={"prices-section"}>
        <CurrentPrices src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/prices-header_tzbpqt.svg" />
        <ContentContainer>

          <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={1}>
            <Column1
              url={
                "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/flower-img-low_xvcd3y-scaled.jpg"
              }
            >
              <ColumnInnerContainer>
                <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2?filter%5BanyCategories%5D%5B%5D=flower">
                  <TableContainer>
                    <PriceTable
                      tableHeader={"Flower"}
                      headerColor={"#1E5436"}
                      headerRow={["Quality", "Price"]}
                      rows={flowerRows}
                    />
                  </TableContainer>
                  <DarkenOverlay />
                </Link>
              </ColumnInnerContainer>
            </Column1>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="fadeInUp" duration={1}>
            <Column2
              url={
                "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/concentrates-img_plzqhd.png"
              }
            >
              <ColumnInnerContainer>
                <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2?filter%5BanyCategories%5D%5B%5D=concentrates">
                  <TableContainer>
                    <PriceTable
                      tableHeader={"Concentrates"}
                      headerColor={"#E39100"}
                      headerRow={["Quantity", "Price"]}
                      rows={concentrateRows}
                    />
                  </TableContainer>
                  <DarkenOverlay />
                </Link>
              </ColumnInnerContainer>
            </Column2>
          </ScrollAnimation>

          <ScrollAnimation animateOnce animateIn="fadeInRight" duration={1}>
            <Column3
              url={
                "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/joint-img-low_ybjben-scaled.jpg"
              }
            >
              <ColumnInnerContainer>
                <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2?filter%5Bmatch%5D=Pre%20Roll">
                  <TableContainer>
                    <PriceTable
                      tableHeader={"Pre-Rolls"}
                      headerColor={"#007A0F"}
                      headerRow={["Quantity", "Price"]}
                      rows={prerollRows}
                    />
                  </TableContainer>
                </Link>
                <DarkenOverlay />
              </ColumnInnerContainer>
            </Column3>
          </ScrollAnimation>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default connect(PricesSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  background-color: #f1f5f2;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

const CurrentPrices = styled.img`
  z-index: 100;
  position: relative;
  height: 8vw;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-template-rows: 100%;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  gap: 0;
  grid-gap: 0;
  overflow: hidden;

  color: #fff;

  margin: -3vw 0 0 0;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1.98px;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
  }
`;

const Column1 = styled.div`
  background-image: url(${(props) => (props.url ? props.url : "")});
  background-size: cover;
  overflow: hidden;

  border-radius: 20px;
  background-color: #000;

  grid-column-start: 1;
  width: 33vw;
  height: 30vw;
  min-height: 360px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 0px;
    width: 100vw;
    height: 75vw;
    border-radius: 0px;
  }
`;

const Column2 = styled.div`
  background-image: url(${(props) => (props.url ? props.url : "")});
  background-size: cover;
  overflow: hidden;
  border-radius: 20px;
  background-color: #000;

  grid-column-start: 2;
  width: 33vw;
  height: 30vw;
  min-height: 360px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 0px;
    width: 100vw;
    height: 75vw;
    border-radius: 0px;
  }
`;

const Column3 = styled.div`
  background-image: url(${(props) => (props.url ? props.url : "")});
  background-size: cover;
  overflow: hidden;
  border-radius: 20px;

  background-color: #000;
  grid-column-start: 3;
  width: 33vw;
  height: 30vw;
  min-height: 360px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 0px;
    width: 100vw;
    height: 75vw;
    border-radius: 0px;
  }
`;

const ColumnInnerContainer = styled.div`
  position: relative;
  object-fit: cover;
  overflow: hidden;
  background-clip: content-box;
  width: 100%;
  height: 100%;

  :hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 3px 3px rgba(255, 255, 255, 1));
  }
`;

const TableContainer = styled.div`
  position: absolute;
  overflow: hidden !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 1));
  width: 80%;
  z-index: 2;
`;

const DarkenOverlay = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;

  width: 100%;
  height: 100%;

  z-index: 1;
  opacity: 0.3;

  /* Add the blur effect */
  filter: blur(2px) brightness(70%);
`;
