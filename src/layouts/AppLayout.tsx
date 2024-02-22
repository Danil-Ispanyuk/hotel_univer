import React from "react";
import * as Styled from "./style";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
