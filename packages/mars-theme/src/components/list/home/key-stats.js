import React from "react";
import { connect, styled } from "frontity";

const KeyStats = () => {
  return (
    <>
      <Container>
        <Group>
          <Number>1,000+ AC</Number>
          <Text>AG Lands</Text>
        </Group>

        <Group>
          <Number>200+ AC</Number>
          <Text>Development Ready Land</Text>
        </Group>

        <Group>
          <Number>50+</Number>
          <Text>Cash Flow Investment Properties</Text>
        </Group>

        <Group>
          <Number>150+ </Number>
          <Text>Residential Homes</Text>
        </Group>
        
      </Container>
    </>
  );
};

export default connect(KeyStats);

const Container = styled.div`
  display: grid;
  margin: 2rem 0;
  grid-gap: 1rem;
  width: 100%;
  max-width: 1350px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(466px, 1fr));
`;

const Group = styled.div`
  text-align: center;
  padding: 0.5em;
  width: 90%;
  background-color: #F79837;
  border-radius: 4px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
`;

const Number = styled.div`
  font-size: 2rem;
  line-height: normal;
  font-weight: 600;
  color: #2B4F77;
`;

const Text = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  width: 90%;
  margin: auto;
`;
