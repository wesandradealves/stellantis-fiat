import { ImageProps } from '../../interfaces'

const Image = ({ src, alt='', className='' }: ImageProps) => {
  let s = String(src)
  if(src['src']){
    s = src.src
  }
  return <img src={s} alt={alt} className={className} />;
}

export default Image;
