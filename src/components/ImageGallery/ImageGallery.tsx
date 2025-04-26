//src/components/ImageGallery.tsx
// import React from "react";
// import style from "./ImageGallery.module.css";

// const ImageGallery = ({ images, onImageClick }) => {
//   return (
//     <div className={style.imagegallery}>
//       <ul className={style.imagediv}>
//         {images.map((image) => (
//           <li
//             key={image.id}
//             onClick={() => onImageClick(image.urls.full, image.alt_description)}
//           >
//             <img src={image.urls.small} alt={image.alt_description} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ImageGallery;

//src/components/ImageGallery.tsx
import style from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (fullUrl: string, alt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className={style.imagegallery}>
      <ul className={style.imagediv}>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => onImageClick(image.urls.full, image.alt_description)}
          >
            <img src={image.urls.small} alt={image.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;


//Image
//ImageGalleryProps, пропсы (images и onImageClick)
//React.FC<ImageGalleryProps> тип. весь компонент