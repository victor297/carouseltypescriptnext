import Carousel from "./Carousel";
import img1 from "path-to-local-image.jpg";
import img2 from "path-to-local-image.jpg";
import img3 from "path-to-local-image.jpg";

export default function ImageCarousel() {
  const slides = [img1, img2, img3];

  return (
    <div className="relative">
      <div className="max-w-lg">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
