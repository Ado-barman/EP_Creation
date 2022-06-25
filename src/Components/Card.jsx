import React from "react";
import CardUI from "./CardUI";
import Gangtok from "./CrdImg/Gangtok.jpg";
import Namsai from "./CrdImg/Golden_Pagoda.jpg";
import Nainitail from "./CrdImg/Nainitail.jpg";
import Rishikesh from "./CrdImg/Rishikesh.jpg";
import Roing from "./CrdImg/Roing.jpg";
import uttrakhand from "./CrdImg/uttrakhand.jpg";

function Card() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          I'm a Traveller from Arunachal Pradesh, who captures the beauty of
          these wonderful Mother Earth, with my Camera gears.{""}
        </h1>
        <div className="row g-3">
          <div className="col-md-4">
            <CardUI
              imgsrc={Gangtok}
              title="Sikkim Diaries"
              para="Sikkim is the least populous and second smallest among the Indian states. Situated in the Eastern Himalayaas well as being a host to Kangchenjunga"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgsrc={Namsai}
              title="Namsai, Arunachal Pradesh"
              para="The Golden Pagoda Monastery at Tengapani in Namsai district is a major tourist destination, Known as 'Kongmu Kham' in the local Tai-Khamti language"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgsrc={Nainitail}
              title="Nainital, Uttarakhand"
              para="Nainital is located in the Kumaon foothills of the outer Himalayas at a distance of 285 km from the state capital Dehradun and 345 km from New Delhi"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgsrc={Rishikesh}
              title="Rishikesh, Uttarakhand"
              para="Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. "
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgsrc={Roing}
              title="Roing, Arunachal Pradesh"
              para="The town is located at the foothill of the Mishmi Hills. it is connected to Tinsukia, a major town of Assam, and also my Home"
            />
          </div>
          <div className="col-md-4">
            <CardUI
              imgsrc={uttrakhand}
              title="Himalayas"
              para="Since i live in Himalaya. Here will be the photos that you will be of some random hills, Mountain, river that i personally Love"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
