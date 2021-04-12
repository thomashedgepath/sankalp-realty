import React, { useState } from "react";
import { styled } from "frontity";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

function KeyFacts({ data }) {
  const key_facts = data;
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

  // For converting JSON Keys to Human Readable text
  function toCapitalizedWords(name) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(" ");
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  return (
    <>
      <Table celled>
        {table.map((item, index) => {
          var section_heading = item[0];
          var section_data = item[1];

          return (
            <>
              <Table.Header key={`section-${index}`}>
                <Table.Row>
                  <Table.HeaderCell colSpan="2">
                    {section_heading}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {section_data.map((item, index) => {
                  var attribute_name = item[0][0];
                  var attribute_value = item[0][1];
                  return (
                    <Table.Row key={`attribute-${index}`}>
                      <Table.Cell>{attribute_name}</Table.Cell>
                      <Table.Cell>{attribute_value}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </>
          );
        })}
      </Table>
    </>
  );
}

export default KeyFacts;
