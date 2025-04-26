//src/components/ImageCard.tsx
// import style from "./ImageCard.module.css";

// const ImageCard = ({ src, alt }) => {
//   return (
//     <div className={style.gallery}>
//       <img src={src} alt={alt} className={style.image} />
//     </div>
//   );
// };

// export default ImageCard;


//src/components/ImageCard.tsx
import style from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className={style.gallery}>
      <img src={src} alt={alt} className={style.image} />
    </div>
  );
};

export default ImageCard;

//Создала interface ImageCardProps с типами для src и alt
//Указала, что ImageCard — это React.FC<ImageCardProps>