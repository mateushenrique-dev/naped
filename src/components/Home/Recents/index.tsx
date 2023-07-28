import exampleImage from "@/assets/example.png";
import * as S from "./styled";
import { Card } from '@/components/Ui/Card';

export function Recents() {
  return (
    <S.Wrapper>
      <S.Title>Notícias mais recentes</S.Title>
      <S.Recents>
        <Card.Wrapper
          tag='li'
          height="250px"
        >
          <Card.Tag type='regular'>Lorem</Card.Tag>
          <Card.Background
            src={exampleImage}
            alt="Imagem de exemplo"
          />
          <S.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</S.Description>
        </Card.Wrapper>
      </S.Recents>
    </S.Wrapper>
  )
}