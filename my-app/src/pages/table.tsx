import React, { useState } from "react";
import styles from "@/styles/table.module.scss";

const Tooltip = ({ children, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      {children}
      {isHovered && <div className={styles.tooltip}>{content}</div>}
    </div>
  );
};

const TableLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {Array.from({ length: 12 }, (_, i) => (
          <Tooltip key={i} content={`Tooltip ${i + 1}`}>
            <div className={styles.cell}>{i + 1}</div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TableLayout;
