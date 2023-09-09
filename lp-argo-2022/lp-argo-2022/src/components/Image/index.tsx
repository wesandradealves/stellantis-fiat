import { ImageProps } from '../../interfaces'

const Image = ({ src, alt='', className='' }: ImageProps) => {
  return <img src={String(src)} alt={alt} className={className} />;
}

export default Image;
