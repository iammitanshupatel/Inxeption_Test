import React from "react";

const CenteredDiv: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <div>Center This</div>
    </div>
  );
};

export default CenteredDiv;

// import React from "react";

// const CenteredDiv: React.FC = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         placeItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "lightgreen",
//       }}
//     >
//       <div>Center This</div>
//     </div>
//   );
// };

// export default CenteredDiv;

// import React from "react";

// const CenteredDiv: React.FC = () => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "pink",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         Center This
//       </div>
//     </div>
//   );
// };

// export default CenteredDiv;
