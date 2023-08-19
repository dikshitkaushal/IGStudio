import React, { useRef } from "react";
import { register } from "swiper/element/bundle";
import { ReactComponent as Slidenext } from "../../../assets/slidenext.svg";
import { ReactComponent as Slideprev } from "../../../assets/slideprev.svg";
import Clientcard from "./Clientcard/Clientcard";
import client1 from "../../../assets/Client1.png";
import client2 from "../../../assets/Client2.png";
import client3 from "../../../assets/Client3.png";
import styles from "./Clients.module.css";

register();

const Clients = () => {
  const swiperElRef = useRef(null);
  function handlenext() {
    const swiper = swiperElRef.current.swiper;
    swiper.slideNext();
  }
  function handleprev() {
    const swiper = swiperElRef.current.swiper;
    swiper.slidePrev();
  }
  return (
    <div className={styles.clientswrapper}>
      <div className={styles.slidewrapper}>
        <div className={styles.clienttext}>
          <p>What says our happy clients</p>
        </div>
        <div className={styles.buttonwrapper}>
          <Slideprev
            onClick={() => {
              handleprev();
            }}
          />
          <Slidenext
            onClick={() => {
              handlenext();
            }}
          />
        </div>
      </div>
      <swiper-container
        style={{ marginTop: "100px" }}
        ref={swiperElRef}
        slides-per-view="3"
        space-between="65"
      >
        <swiper-slide>
          <Clientcard name="Jane Cooper" image={client1} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Devon Lane" image={client2} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Robert Fox" image={client3} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Jane Cooper" image={client1} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Devon Lane" image={client2} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Robert Fox" image={client3} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Jane Cooper" image={client1} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Devon Lane" image={client2} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Robert Fox" image={client3} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Jane Cooper" image={client1} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Devon Lane" image={client2} />
        </swiper-slide>
        <swiper-slide>
          <Clientcard name="Robert Fox" image={client3} />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Clients;
