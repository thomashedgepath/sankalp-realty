import React, { useState } from "react";
import { styled } from "frontity";
import { Button, Divider, Header, Table } from "semantic-ui-react";

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

  let showSale = false;
  let showLease = false;

  if (status.hide_price !== true) {
    if (data.sale_price.min !== undefined && data.sale_price.min > 0) {
      showSale = true;
    }
    if (data.lease_rate.min !== undefined && data.lease_rate.min > 0) {
      showLease = true;
    }
  }

  return (
    <>
      {console.log(showSale)}
      {console.log(showLease)}

      <>
        {/* For Sale Pricing Section */}
        {/* {showSale ? (<></>):(<>Call for Current Sale Price</>)} */}

        {status.for_sale && showSale ? (
          <>
            <Divider horizontal>
              <Header as="h4">Sale Price</Header>
            </Divider>
            {formatMoney(data.sale_price.min)}
            {data.sale_price.max
              ? ` - ${formatMoney(data.sale_price.max)} `
              : " "}
            {data.sale_price.label}
          </>
        ) : (
          <>
            {status.for_sale ? (
              <>
                <Divider horizontal>
                  <Header as="h4">Sale Price</Header>
                </Divider>
                Call for Current Sale Prices
              </>
            ) : (
              <></>
            )}
          </>
        )}

        <br></br>

        {/* For Lease Pricing Section */}

        {/* {showLease ? (<></>):(<>Call for Current Lease Rates</>)} */}

        {status.for_lease && showLease ? (
          <>
            <Divider horizontal>
              <Header as="h4">Lease Rates</Header>
            </Divider>
            {formatMoney(data.lease_rate.min)}
            {data.lease_rate.max
              ? ` - ${formatMoney(data.lease_rate.max)} `
              : " "}
            {data.lease_rate.label}
          </>
        ) : (
          <>
            {status.for_lease ? (
              <>
                <Divider horizontal>
                  <Header as="h4">Lease Rates</Header>
                </Divider>
                Call for Current Lease Rates
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </>
      <br></br>
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
