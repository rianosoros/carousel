import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import renderer from 'react-test-renderer';
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

    // Check that left arrow is missing when on the first image
    const leftArrow = screen.queryByTestId('left-arrow');
    expect(leftArrow).not.toBeInTheDocument();
  
    // Click right arrow to go to the last image
    const rightArrow = screen.getByTestId('right-arrow');
    rightArrow.click();
    rightArrow.click(); // Go to the last image
  
    // Check that right arrow is missing when on the last image
    expect(rightArrow).not.toBeInTheDocument();
});

test('Carousel component renders without crashing', () => {
  render(
    <Carousel
      photos={[
        { src: 'image1.jpg', caption: 'Caption 1' },
        { src: 'image2.jpg', caption: 'Caption 2' },
        { src: 'image3.jpg', caption: 'Caption 3' }
      ]}
      title="Test Carousel"
    />
  );
});
