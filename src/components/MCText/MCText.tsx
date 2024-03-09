import React from "react";

interface HeadingProps {
  /**
   * Button contents
   */
  Text: React.ReactNode;
  /**
   * How large should the button be?
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph";

  /**
   * What background colors to use
   */
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;

  /**
   * What degre to use
   */
  degre?: number;

  /**
   * custom style
   */
  className?: string;
}

const MCText: React.FC<HeadingProps> = ({
  Text,
  as = "h1",
  color1 = "#186cb8",
  color2 = "#2a9a9f",
  color3 = "#f1b211",
  color4 = "#e83611",
  color5 = "#f9002f",
  degre = 45,
  className = "",
}) => {
  const textStyle = {
    background: `linear-gradient(${degre}deg, 
      ${color1} 19.7%, 
      transparent 19%,transparent 20%, 
      ${color2} 20%, ${color2} 39.7%,
      transparent 39%,transparent 40%, 
      ${color3} 40%,${color3} 59.7% ,
      transparent 59%,transparent 60%, 
      ${color4} 60%, ${color4} 79.7%,
      transparent 79%, transparent 80%, 
      ${color5} 80%)`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    margin: "auto",
    width: "max-content",
  };

  switch (as) {
    case "h1":
      return (
        <h1 className={className} style={textStyle}>
          {Text}
        </h1>
      );
    case "h2":
      return (
        <h2 className={className} style={textStyle}>
          {Text}
        </h2>
      );
    case "h3":
      return (
        <h3 className={className} style={textStyle}>
          {Text}
        </h3>
      );
    case "h4":
      return (
        <h4 className={className} style={textStyle}>
          {Text}
        </h4>
      );
    case "h5":
      return (
        <h5 className={className} style={textStyle}>
          {Text}
        </h5>
      );
    case "h6":
      return (
        <h6 className={className} style={textStyle}>
          {Text}
        </h6>
      );
    default:
      return (
        <p className={className} style={textStyle}>
          {Text}
        </p>
      );
  }
};

export default MCText;
