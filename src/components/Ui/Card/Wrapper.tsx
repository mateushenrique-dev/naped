import * as S from "./Style";

interface IWrapper {
  children: any;
  width?: string;
  height?: string;
  tag?: string;
}

export function Wrapper({ children, width, height, tag }: IWrapper) {
  return (
    <S.Wrapper
      width={width}
      height={height}
      as={tag}
    >
      {children}
    </S.Wrapper>
  )
}