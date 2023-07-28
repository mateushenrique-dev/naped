import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IBackground {
  src: string | StaticImport
  alt: string
}

export function Background({ src, alt }: IBackground) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
    />
  )
}