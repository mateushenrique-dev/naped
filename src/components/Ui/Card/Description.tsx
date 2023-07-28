import * as S from "./Style";

interface IDescription {
  children: string
}

export function Description({ children }: IDescription) {
  return (
    <S.Description>
      {children}
    </S.Description>
  )
}