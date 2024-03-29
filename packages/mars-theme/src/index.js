import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import propertiesHandler from "./components/properties-handler";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      isContactModalOpen: false,
      selectedPropertyID: 0,
      selectedPropertyCoordinates: [33.16620971214782, -96.79046653119435],
      selectedPropertyAddress: "",
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        // Add the handler to wp-source.
        libraries.source.handlers.push(propertiesHandler);
      },
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/contact");
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      toggleContactModal: ({ state }) => {
        state.theme.isContactModalOpen = !state.theme.isContactModalOpen;
      },
      setSelectedPropertyID: ({ state }) => (prop_id) => {
        state.theme.selectedPropertyID = prop_id;
    
      },
      setSelectedPropertyCoordinates: ({ state }) => (coordinates) => {
        state.theme.selectedPropertyCoordinates = coordinates;
        
      },
      setSelectedPropertyAddress: ({ state }) => (address) => {
        state.theme.selectedPropertyAddress = address;
        
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default marsTheme;
