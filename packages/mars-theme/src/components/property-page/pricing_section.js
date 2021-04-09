import React, { useState } from "react";
import { styled } from "frontity";

function PricingSection({ data, status }) {
  // Create our number formatter.
  const formatMoney = (number) => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      // These options are needed to round to whole numbers if that's what you want.
      // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    return formatter.format(number);
  };

  return (
    <>
      {/* {console.log(data)} */}
      {/*  Move logic to display this section out of the render: hide price || all rates = 0  */}
      {status.hide_price ? (
        <>Call for Current Pricing</>
      ) : (
        <>
          {/* For Sale Pricing Section */}
          <h3>Sale</h3>
          {status.for_sale ? (
            <>
              {formatMoney(data.sale_price.min)}
              {data.sale_price.max
                ? ` - ${formatMoney(data.sale_price.max)} `
                : " "}
              {data.sale_price.label}
            </>
          ) : (
            <></>
          )}

          <br></br>
          
          {/* For Lease Pricing Section */}
          <h3>Lease</h3>
          {status.for_lease ? (
            <>
              {formatMoney(data.lease_rate.min)}
              {data.lease_rate.max
                ? ` - ${formatMoney(data.lease_rate.max)} `
                : " "}
              {data.lease_rate.label}
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default PricingSection;

const CardImage = styled.img`
  object-fit: cover;
  float: left;
  width: 250px;
  height: 250px;
  margin: -5px;
`;
