import PropTypes from "prop-types";
import { Children } from "react";

export default function Paragraphs({ children, className }) {
  Paragraphs.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };
  const childrenArray = Children.toArray(children);
  return <div className={`font-secondFont ${className}`}>{childrenArray}</div>;
}
