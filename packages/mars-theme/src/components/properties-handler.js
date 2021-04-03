import { connect } from "frontity";
import json from '../components/property-data/master'

//https://docs.frontity.org/api-reference-1/wordpress-source#libraries-source-handlers

const propertiesHandler = {
  pattern: "/property/:slug",
  func: async ({ link, params, state, libraries, force }) => {
     // 1. get product
     const response = await libraries.source.api.get({
      endpoint: "property",
      params: { slug: params.slug },
    });

    // 2. add product to state
    const [product] = await libraries.source.populate({
      response,
      state,
      force,
    });

    // 3. add link to data
    Object.assign(state.source.data[link], {
      id: product.id,
      type: product.type,
      isPostType: true,
      isProduct: true,
    });
  }
}

export default connect(propertiesHandler);