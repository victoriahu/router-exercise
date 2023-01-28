import { ReactElement } from "react";

type RouterProps<T> = {
  children: T;
};

export function Router<T extends ReactElement | ReactElement[]>({
  children,
}: RouterProps<T>): ReactElement {
  return <div />;
}
