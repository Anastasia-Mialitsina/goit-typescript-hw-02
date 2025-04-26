//src/components/LoadMoreBtn.tsx
// import style from "./LoadMoreBtn.module.css";

// const LoadMoreBtn = ({ onClick }) => {
//   return (
//     <button
//       className={style.LoadMoreBtn}
//       onClick={onClick}
//       style={{
//         display: "block",
//         margin: "20px auto",
//         padding: "10px 20px",
//         fontSize: "16px",
//         cursor: "pointer",
//       }}
//     >
//       Load more
//     </button>
//   );
// };

// export default LoadMoreBtn;


// src/components/LoadMoreBtn.tsx
import style from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button
      className={style.LoadMoreBtn}
      onClick={onClick}
      style={{
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;

//interface LoadMoreBtnProps
//onClick ф. без аргументов (() => void)
//React.FC<LoadMoreBtnProps> пров. пропсы