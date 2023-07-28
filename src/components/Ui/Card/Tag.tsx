import * as S from "./Style";

interface ITag {
  children: string;
  type: 'litte' | 'regular';
}

export function Tag({ children, type }: ITag) {
  return (
    <S.Tag type={type}>{children}</S.Tag>
  )
}