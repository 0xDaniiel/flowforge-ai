import { ReactElement } from "react";

export interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
  className?: string;
}
