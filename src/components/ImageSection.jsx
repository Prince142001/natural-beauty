import imagecol1 from "../assets/image-col-1.png";
import imagecol2 from "../assets/image-col-2.png";
import imagecol3 from "../assets/image-col-3.png";
import imagecol4 from "../assets/image-col-4.png";
function ImageSection() {
  return (
    <section>
      <div className="flex justify-between">
        <figure>
          <img src={imagecol4} alt="" />
        </figure>
        <figure>
          <img src={imagecol3} alt="" />
        </figure>
        <figure>
          <img src={imagecol2} alt="" />
        </figure>
        <figure>
          <img src={imagecol1} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default ImageSection;
