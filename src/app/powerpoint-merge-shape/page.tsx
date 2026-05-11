import profilePic3 from "../../../public/01-merge-shapes-in-powerpoint-infographics.png";
import profilePic2 from "../../../public/02-how-two-shapes-merge-in-powerpoint.png";
import profilePic1 from "../../../public/combine-shapes-powerpoint.png";
import profilePic4 from "../../../public/maxresdefault.jpg";
import profilePic5 from "../../../public/shapeunion2013-04.jpg";
import profilePic6 from "../../../public/maxresdefault-fill-outline.jpg";

import Image from "next/image";

const images = [
  profilePic6,
  profilePic4,
  profilePic1,
  profilePic2,
  profilePic3,
  profilePic5,
];

export default function PowerpointMergeShape() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory p-10 space-y-10">
      {images.map((image, index) => (
        <section
          key={index}
          className="relative w-full h-full snap-start border "
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            priority
            className="object-contain"
          />
        </section>
      ))}
    </div>
  );
}
