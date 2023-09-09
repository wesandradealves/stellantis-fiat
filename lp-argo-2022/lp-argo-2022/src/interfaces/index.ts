import Swiper from "swiper";

export interface AboutProps {
  setSwiperAbout: React.Dispatch<React.SetStateAction<Swiper>>;
  accordionAbout: string;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  aboutActive: string[];
}

export interface AboutItemProps {
  [x: string]: any;
  category: string;
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  labelLink: string;
}

export interface BuyYoursProps {
  showModalForm: boolean;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormProps {
  setShowFeedback: React.Dispatch<React.SetStateAction<string>>;
}

export interface itemGalleryProps {
  thumb: string;
  preview: string;
  full: string;
  mobile: string;
  idx?: number;
  slug: string;
}

export interface HighlightProps {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HighlightItemProps {
  slug: string;
  title: string;
  description: string;
  label: string;
  tag: string;
  thumb: string;
  image: string;
  link: string;
}

export interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface modalGalleryProps {
  data: itemGalleryProps[] | undefined;
  position: number;
  setShowModalGallery: React.Dispatch<React.SetStateAction<boolean>>;
  // gallerySwiper?: Swiper | undefined;
  setBulletActive: React.Dispatch<React.SetStateAction<number>>;
}

export interface SidebarProps {
  swiperAbout: Swiper;
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setAccordionAbout: React.Dispatch<React.SetStateAction<string>>;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OptionsProps {
  name: string;
  image: string;
}

export interface VersionItemProps {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  image: string;
  thumb: string;
  link: string;
  options: OptionsProps[];
}

export interface itemMenuProps {
  title: string;
  link: string | undefined;
  form: boolean | undefined;
}

export interface ImageProps {
  src: any;
  alt: string;
  className?: string;
}
