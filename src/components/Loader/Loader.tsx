//src/components/Loader.tsx
// import RingLoader from "react-spinners/RingLoader";
// import style from "./Loader.module.css"; 

// const Loader = ({ loading }) => {
//   return (
//     <div className={style.loader}>
//       {loading && <RingLoader size={80} color="#36d7b7" />}
//     </div>
//   );
// };

// export default Loader;

//src/components/Loader.tsx
import RingLoader from "react-spinners/RingLoader";
import style from "./Loader.module.css";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={style.loader}>
      {loading && <RingLoader size={80} color="#36d7b7" />}
    </div>
  );
};

export default Loader;

//interface LoaderProps, пропсы (loading: boolean)
//const Loader: React.FC<LoaderProps> = (...)