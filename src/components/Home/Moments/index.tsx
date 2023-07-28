import * as S from "./style";
import exampleImage from "@/assets/example.png";
import { Card } from '@/components/Ui/Card';

export function Moments() {
  return (
    <S.Wrapper>
      <S.MomentsCards>
        <Card.Wrapper tag='li'>
          <Card.Background
            src={exampleImage}
            alt="Imagem de exemplo"
          />
          <Card.Tag type="regular">Lorem</Card.Tag>
          <Card.Description>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</Card.Description>
        </Card.Wrapper>
      </S.MomentsCards>

      <S.OtherMoments>
        <Card.Wrapper
          tag='li'
          height='50%'
        >
          <Card.Background
            src={exampleImage}
            alt="Imagem de exemplo"
          />
          <Card.Tag type="regular">Lorem</Card.Tag>
          <Card.Description>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</Card.Description>
        </Card.Wrapper>

        <Card.Wrapper
          tag='li'
          height='50%'
        >
          <Card.Background
            src={exampleImage}
            alt="Imagem de exemplo"
          />
          <Card.Tag type="regular">Lorem</Card.Tag>
          <Card.Description>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</Card.Description>
        </Card.Wrapper>
      </S.OtherMoments>
    </S.Wrapper>
  )
}