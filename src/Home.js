import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />

      <div className="home__row">
        {/* Product 1 */}
        <Product
          id="1"
          title="Harddisk External WD 8 TB - MANTAP GAN - GRATIS ONGKIR"
          price={2000000.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg"
        />

        {/* Product 2 */}
        <Product
          id="2"
          title="Tablet Android RAM 3 / 64 GB - MANTAP - BISA NONTON FILM - GRATIS ONGKIR"
          price={1000000.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244373AC9B3C4612._V533746474_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product 3 */}
        <Product
          id="3"
          title="Mouse Logitec - Ini adalah mouse paling bagus sedunia begituloh"
          price={75000.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
        />

        {/* Product 4 */}
        <Product
          id="4"
          title="Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable"
          price={500000.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/8102ADu5CiL._AC_SL1500_.jpg"
        />

        {/* Product 5 */}
        <Product
          id="5"
          title="TP-Link AC1750 Smart WiFi Router (Archer A7) "
          price={350000.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        {/* Product 6 */}
        <Product
          id="6"
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
          price={4000000.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
