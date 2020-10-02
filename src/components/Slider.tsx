import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/September/New/samsung_Tab_A7_1500x300_PreOrder.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/CEPC/storage/2020/May/Bundles/lapacc-combo_1500x300m.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/OPSaleisONJuly18/EMI_Samsung_SerifLaunch_Gateway_CLP_PC_1500x3002.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default Slider;