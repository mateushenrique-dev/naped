import Image from 'next/image';
import * as S from "./style";
import exampleImage from "@/assets/example.png";
import { Card } from '@/components/Ui/Card';

export function Resume() {
  return (
    <S.Wrapper>
      <S.Resumes>
        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>

        <S.Resume>
          <S.Picture>
            <Image
              src={exampleImage}
              width={144}
              height={110}
              alt="Imagem de exemplo"
            />
            <Card.Tag type="litte">Lorem</Card.Tag>
          </S.Picture>
          <S.Informations>
            <S.Title>Lorem ipsum dolor sit, adipiscing elit. </S.Title>
            <S.Date>00/00/0000</S.Date>
            <S.Read>Ler notícia</S.Read>
          </S.Informations>
        </S.Resume>
      </S.Resumes>

      <S.OtherResumes>
        <S.ResumeTitle>Lorem Ipsum</S.ResumeTitle>
        <Card.Wrapper
          tag='li'
          height='250px'
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
          height='250px'
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
          height='250px'
        >
          <Card.Background
            src={exampleImage}
            alt="Imagem de exemplo"
          />
          <Card.Tag type="regular">Lorem</Card.Tag>
          <Card.Description>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</Card.Description>
        </Card.Wrapper>
      </S.OtherResumes>
    </S.Wrapper>
  )
}