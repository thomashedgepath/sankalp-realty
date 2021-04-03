// import React, { useRef, useState } from "react";

// import PropertiesCard from "./properties-card";
// import styled from "styled-components";

// const PropertyScrollWrapper = styled.ul`
//    {
//     width: 100%;
//     overflow-y: scroll;
//     overflow-x: visible;
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//   }
// `;

// const PropertiesSidebar = (props) => {
//   const [cardCount, setCardCount] = useState();
//   const testRef = useRef(null);

//   // Use to evaluate property locations, returns true if inBounds
//   function inBounds(lat, lng, bounds) {
//     var lng = (lng - bounds._ne.lng) * (lng - bounds._sw.lng) < 0;
//     var lat = (lat - bounds._ne.lat) * (lat - bounds._sw.lat) < 0;
//     return lng && lat;
//   }

//   return (
//       <PropertyScrollWrapper
//         ref={(ref) => ref && setCardCount(ref.childElementCount - 1)}
//       >
//         {props.properties != null ? (
//           <>
//             <li key={"1111"} style={{height: "2em", lineHeight: '2em', backgroundColor: "red", color: 'white', textAlign: "center", verticalAlign: "middle"}}>
              
//                 Total properties:{props.properties.length} Properties Shown:
//                 {cardCount}
            
//             </li>
//             {props.properties.map((item) => (
//               <>
//                 {props.bounds != null ? (
//                   inBounds(item.lat, item.lng, props.bounds) === true ? (
//                     <PropertiesCard
//                       key={"1111"}
//                       property={item}
//                       selectedProperty={props.selectedProperty}
//                       setSelectedProperty={(e) => props.setSelectedProperty(e)}
//                     ></PropertiesCard>
//                   ) : (
//                     <></>
//                   )
//                 ) : (
//                   <PropertiesCard
//                     key={uniqid(item["id"])}
//                     property={item}
//                     selectedProperty={props.selectedProperty}
//                     setSelectedProperty={(e) => props.setSelectedProperty(e)}
//                   ></PropertiesCard>
//                 )}
//               </>
//             ))}
//           </>
//         ) : (
//           <></>
//         )}
//       </PropertyScrollWrapper>
//   );
// };

// export default PropertiesSidebar;