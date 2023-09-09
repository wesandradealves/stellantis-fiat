import sanitizeString from '@/utils/sanitizeString';
import { FC } from 'react';

interface CloseModalProps {
  title: string;
}

const CloseModal: FC<CloseModalProps> = ({ title = 'seta' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.032"
      height="9.98"
      viewBox="0 0 10.032 9.98"
      aria-labelledby={`close-modal-${sanitizeString(title)}`}
    >
      <title id={`close-modal-${sanitizeString(title)}`}>{title}</title >
      <g id="Group_3860" data-name="Group 3860" transform="translate(5.118 -8.735) rotate(45)">
        <line id="Line_17" data-name="Line 17" y2="12" transform="translate(9.614 3.853)" fill="none" stroke="currentColor" strokeWidth="2" />
        <line id="Line_18" data-name="Line 18" y2="12" transform="translate(15.651 9.702) rotate(90)" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default CloseModal;
