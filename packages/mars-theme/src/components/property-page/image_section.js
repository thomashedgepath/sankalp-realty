import React, { useState } from "react";
import { styled } from "frontity";

function ImageSection({ data }) {
  let urls = [];
  const [selectedImage, setSelectedImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  for (const [key, value] of Object.entries(data)) {
    if (value.url !== undefined) {
      urls.push(value.url);
    }
  }

  const handleThumbClick = (index) => {
    setSelectedImage(index);
  };

  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  const nextImage = () => {
    if (selectedImage + 1 == urls.length) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <>
      {console.log(showImageModal)}
      {showImageModal ? (
        <>
          <ModalContainer>
            <ContentContainer>
              <CloseButton
                onClick={toggleImageModal}
                src="http://wp.sankalprealty.us/wp-content/uploads/2021/04/clear-white-18dp.svg"
              ></CloseButton>

              <ModalImage
                onClick={nextImage}
                key={`image-${urls[selectedImage]}`}
                src={urls[selectedImage]}
              ></ModalImage>
            </ContentContainer>
          </ModalContainer>
          <ModalDarken onClick={toggleImageModal} />
        </>
      ) : (
        <></>
      )}

      <SectionContainer>
        <CardImage
          onClick={toggleImageModal}
          key={`image-${urls[selectedImage]}`}
          src={urls[selectedImage]}
        ></CardImage>

        {urls.map((image, index) => {
          return (
            <ThumbImage
              onClick={() => handleThumbClick(index)}
              key={`image-${index}`}
              src={image}
              selected={index == selectedImage ? true : false}
            ></ThumbImage>
          );
        })}
      </SectionContainer>
    </>
  );
}

export default ImageSection;

const CardImage = styled.img`
  object-fit: cover;
  float: left;
  width: 100%;
  height: 60vh;
  margin: 5px;
`;

const ThumbImage = styled.img`
  object-fit: cover;
  float: left;
  width: 20%;
  height: 100px;
  filter: ${(props) =>
    props.selected ? "brightness(100%)" : "brightness(50%)"};
  margin: 0 0 0 5px;

  &:hover {
    filter: brightness(100%);
  }
`;

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100%;
  height: 100%;
`;

/// MODAL STYLES

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto;
  z-index: 1200;
  width: 80vw;
  height: 80vh;
  text-align: center;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: 80vw;
  max-height: 80vh;
`;

const ModalDarken = styled.div`
  position: absolute;
  top: -20vh;
  left: 0;
  width: 100vw;
  height: 120%;
  background-color: black;
  opacity: 0.75;
  z-index: 1101;
`;

const CloseButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
