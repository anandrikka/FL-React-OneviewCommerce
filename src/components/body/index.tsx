import { FC } from "react";

type BodyProps = {
  children: JSX.Element
}

const Body: FC<BodyProps> = ({ children }) => {
  return (
    <div className="body-container container">
      {children}
    </div>
  )
}

export default Body;

