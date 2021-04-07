import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "../list";
import list from "../list/list";

const Property = ({ state, actions }) => {
  // Get information about the current URL.
  const url_data = state.source.get(state.router.link);
  // Get the full data of the post.
  const post = state.source[url_data.type][url_data.id];
  // Get the Property Attributes from the ACF fields
  const data = post.acf;
  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // For converting JSON Keys to Human Readable text
  function toCapitalizedWords(name) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  // Sorting and Organizing Key Facts Section for Display
  const key_facts = data.key_facts;
  let table = [];

  for (const [key, value] of Object.entries(key_facts)) {
    // console.log(key);
    let section = [];
    const section_title = toCapitalizedWords(key);

    const subsection = value;
    let items = [];

    for (const [sub_key, sub_value] of Object.entries(subsection)) {
      if (sub_value !== "" && sub_value !== false) {
        const item_name = toCapitalizedWords(sub_key);
        items.push([[item_name, sub_value]]);
        //console.log(section);
      }
    }
    if (items.length > 0) {
      section = [section_title, items];
      table.push(section);
    }
  }

  // Load the post, but only if the data is ready.
  return (
    <>
      {console.log(post)}
      {console.log(data)}
      <ContentContainer>
        <h1>Headers</h1>
        <p>{data.headers.primary}</p>
        <p>{data.headers.secondary}</p>

        <h1>Address</h1>
        <p>
          {`${data.address.street_address} ${data.address.city}, ${data.address.state} ${data.address.zip_code}`}
        </p>

        <h1>Availability</h1>
        <p>Max Contig: {data.availability.max_contig}</p>
        <p>Min Divisible: {data.availability.min_divisible}</p>
        <p>
          Total Availability: {data.availability.total_availability}{" "}
          {data.availability.units}
        </p>

        <h1>Key Facts</h1>

        {table.map((item) => {
          var section_heading = item[0];
          var section_data = item[1];

          return (
            <>
              <h3>{section_heading}</h3>

              {section_data.map((item) => {
                var attribute_name = item[0][0];
                var attribute_value = item[0][1];
                return (
                  <p>
                    {attribute_name}: {attribute_value}
                  </p>
                );
              })}
            </>
          );
        })}
      </ContentContainer>
    </>
  );
};

export default connect(Property);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100vw;
  height: 100%;

  background-color: #f1f5f2;
`;

const ContentContainer = styled.div`
  ${
    "" /* display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: center;

  color: #007a0f;

  margin: 0;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
  } */
  }
`;

const LContent = styled.div`
  grid-column-start: 1;

  display: flex;

  font-weight: 500;
  text-align: left;
  font-size: 4vw;

  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: none;

  @media (max-width: 768px) {
  }
`;

const RContent = styled(LContent)`
  grid-column-start: 2;
  display: flex;
  background-color: none;
  border-left: 4px solid #2b4f77;

  @media (max-width: 768px) {
  }
`;

const ProductImage = styled.img`
  width: 20vw;
  height: auto;
  object-fit: cover;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));
  margin: 2vh 0;

  margin-left: ${(props) => (props.right ? "0" : "auto")};

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const PrimaryText = styled.div`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 6vh;
  font-weight: 300;
  color: black;
  letter-spacing: -3pt;
  margin: 10px;
  line-height: 0.85;

  @media (max-width: 768px) {
    font-size: 5vh;
    margin: 20px;
  }
`;

const SecondaryText = styled(PrimaryText)`
  font-size: 3vh;
  color: #858585;
  font-weight: 200;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #2b4f77;
  border-radius: 50%;
  margin-left: auto;
  margin-right: -12px;
  right: 0;
`;

const TextCard = styled.div`
  text-align: center;
  font-size: 1.8vh;
  width: 80%;
  ${"" /* background-color: white; */}
  margin: 20px;
  border-radius: 20px;
  padding: 1vw;
  ${"" /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5)); */}

  @media (max-width: 768px) {
    margin: -10vh 0 10px 0;
    width: 90%;
  }
`;
