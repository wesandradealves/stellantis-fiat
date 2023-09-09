import { FC } from 'react';

interface VimeoEmbedProps {
  title: string;
  id: string;
  className?: string;
}

const VimeoEmbed: FC<VimeoEmbedProps> = ({
  title,
  id,
  className = '',
}) => {
  return (
    <>
      <iframe
        src={`https://player.vimeo.com/video/${id}?h=5f2b4628e5&title=0&byline=0&loop=1&portrait=0&autopause=1&playsinline=1&portrait=0`}
        title={title}
        className={className}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </>
  );
}

export default VimeoEmbed;
