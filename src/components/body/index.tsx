import { FC } from "react";

type BodyProps = {
  children: JSX.Element
}

export const Body: FC<BodyProps> = ({ children }) => {
  return (
    <div className="body-container container">
      {children}
    </div>
  )
}
