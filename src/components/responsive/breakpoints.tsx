// Ionic Breakpoints
import { FC } from "react";
import MediaQuery from "react-responsive";

const IoBkp = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
export const IfMobile: FC = ({ children }) => (
  <MediaQuery maxWidth={IoBkp.md - 1}>{children}</MediaQuery>
);
export const IfNotMobile: FC = ({ children }) => (
  <MediaQuery minWidth={IoBkp.md}>{children}</MediaQuery>
);
