import {FC} from "react";
import styles from './SectionTitle.module.scss';
// <title id="arrowTitle">{title}</title>


const SectionTitle: FC<{ title: string }> = ({
                                                                title
                                                              }) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="460.936" height="48.705"
           viewBox="0 0 460.936 48.705">
        <defs>
          <clipPath id="clip-path">
            <path id="mask"
                  d="M-19704.422-9660l23.154-10.469h228.082l2.121,48.705h-342.344l11.344-8.142h53.455l47.342-30.095Z"
                  fill="#00ff3b"/>
          </clipPath>
        </defs>
        <g id="tit-versoes" transform="translate(19912 9670.469)">
          <g id="Mask_Group_927" data-name="Mask Group 927" clipPath="url(#clip-path)">
            <g id="Path_4709" data-name="Path 4709" transform="translate(-19665.285 -9666)" fill="none">
              <path d="M-16.362,0H206.47V41.434l-326.078.188Z" stroke="none"/>
              <path
                  d="M -16.16767883300781 1.000011444091797 L -114.4463500976562 40.6185417175293 L 205.4695129394531 40.43454360961914 L 205.4695129394531 1.000011444091797 L -16.16767883300781 1.000011444091797 M -16.36160278320312 1.1444091796875e-05 L 206.4695129394531 1.1444091796875e-05 L 206.4695129394531 41.43396759033203 L -119.6089019775391 41.62150955200195 L -16.36160278320312 1.1444091796875e-05 Z"
                  stroke="none" fill="#9a0000"/>
            </g>
          </g>
          <text id="title" data-name={title} transform="translate(-19912 -9639.136)" fill="#f6f6f1" className={styles.title}>
            <tspan x="0" y="0">{title}</tspan>
          </text>
        </g>
      </svg>

  );
};

export default SectionTitle;
