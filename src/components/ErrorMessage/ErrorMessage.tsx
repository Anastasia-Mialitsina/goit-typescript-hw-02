//src/components/ErrorMessage.tsx

// const ErrorMessage = () => {
//   return (
//     <p style={{ color: "#6de0f5", textAlign: "center" }}>
//       "Интернет упал и не может встать! 🚨"
//     </p>
//   );
// };

// export default ErrorMessage;


//src/components/ErrorMessage.tsx
import React from "react";

const ErrorMessage: React.FC = () => {
  return (
    <p style={{ color: "#6de0f5", textAlign: "center" }}>
      "Интернет упал и не может встать! 🚨"
    </p>
  );
};

export default ErrorMessage;

//Для типизации указала React.FC (Functional Component)
//Так как компонент не принимает пропсы, типизировала без описания пропсов