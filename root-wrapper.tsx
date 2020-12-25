import React, { ReactNode } from "react"
import { WrapRootElementNodeArgs } from "gatsby"

export const wrapRootElement: React.FC<WrapRootElementNodeArgs> = ({
  element
}) => {
  return <>{element}</>
}
