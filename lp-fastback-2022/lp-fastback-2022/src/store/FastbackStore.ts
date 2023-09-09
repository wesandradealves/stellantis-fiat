import productDetails, {
  ProductTab,
  allSlides,
} from '@/data/productDetails';
import {IVersion, MenuLabel} from '@/models';
import SwiperCore from 'swiper';
import {
  makeObservable,
  observable,
  action,
  computed,
} from 'mobx';
import {MutableRefObject} from 'react';
//import { gallery, GalleryAsset } from '@/assets/gallery';

import {getProductDetails} from '@/data/menu';
import {dataVersions} from '@/data/versions';
import {gallery, GalleryAsset} from "@assets/gallery";

export enum Routes {
  FORM = 'form',
  FORM_CONFIRM = 'form_confirm',
  FORM_ERROR = 'form_error',
  FORM_SUCCESS = 'form_success',
  HOME = 'home',
  PRIVACY = 'privacy',
  CONFIRM_LOGOUT = 'confirm_logou',
}

export enum StorageNames {
  PRIVACY_POLICY = '@fastback/privacy-policy',
}

type NFunc = number | ((n: number) => number);
type BFunc = boolean | ((n: boolean) => boolean);

interface NavRefs {
  [x: string]: MutableRefObject<unknown>;
}

interface MobileSwiperController {
  [x: string]: SwiperCore | null;
}

interface SlugSuffixes {
  [x: string]: (slugSuffix: string) => void;
}

class FastbackStore {
  slugSuffixes: SlugSuffixes = {};
  currentlyVisibleNav: MenuLabel['id'] = '';
  queryString: URLSearchParams | null = null;
  galleryExpanded = false;
  mainDisplayIndex = 0;
  menuOpen = false;
  modalHero = false;
  fixModalHero = false;
  stopHistoryChange = false;
  navigation: Routes[] = [];
  navRefs = {} as NavRefs;
  pageX = 0;
  route: Routes = Routes.HOME;
  selectedDetailTab = '';
  selectedGalleryImage = gallery[0];
  showCookieInfo = false;
  showDisclaimerInfo = false;
  formSection: HTMLElement | null = null;
  selectedGalleryThumbID = '';
  selectedHeroDetailTab = '';
  versionSlugSuffix = '';
  currentVersion: IVersion = dataVersions()[dataVersions().length-1];
  /// SWIPER CONTROLLERS
  featuresSwiperController: SwiperCore | null = null;
  featuresMobileSwiperController: SwiperCore | null = null;
  newProductsSwiperController: SwiperCore | null = null;
  newProductsMobileSwiperController: SwiperCore | null = null;
  expandedGallerySwiperController: SwiperCore | null = null;
  productDetailsSwiperController: SwiperCore | null = null;
  productDetailsMobileSwiperController: MobileSwiperController =
      {};
  highlightedVersionsSwiperController: SwiperCore | null = null;
  highlightedVersionsMobileSwiperController: SwiperCore | null =
      null;

  constructor() {
    makeObservable(this, {
      //
      featuresSwiperController: observable,
      featuresMobileSwiperController: observable,
      newProductsSwiperController: observable,
      newProductsMobileSwiperController: observable,
      expandedGallerySwiperController: observable,
      productDetailsSwiperController: observable,
      productDetailsMobileSwiperController: observable,
      highlightedVersionsSwiperController: observable,
      highlightedVersionsMobileSwiperController: observable,
      versionSlugSuffix: observable,
      stopHistoryChange: observable,
      slugSuffixes: observable,
      fixModalHero: observable,
      currentlyVisibleNav: observable,
      route: observable,
      pageX: observable,
      modalHero: observable,
      queryString: observable,
      selectedHeroDetailTab: observable,
      selectedGalleryThumbID: observable,
      showCookieInfo: observable,
      showDisclaimerInfo: observable,
      galleryExpanded: observable,
      selectedGalleryImage: observable,

      selectedDetailTab: observable,
      menuOpen: observable,
      mainDisplayIndex: observable,
      navRefs: observable,
      currentVersion: observable,

      setMainDisplayIndex: action,
      setRoute: action,
      setCurrentlyVisibleNav: action,
      setNavRef: action,
      setCurrentVersion: action,

      setSelectedDetailTab: action,
      pushNavigation: action,
      setSelectedGalleryImage: action,
      navigateBack: action,
      setMenuOpen: action,
      setModalHero: action,
      setShowCookieInfo: action,
      setShowDisclaimerInfo: action,
      toggleGalleryExpanded: action,
      setGalleryExpanded: action,
      setPageX: action,
      isDesktop: computed,
      isMinWidth: computed,
      lastView: computed,
      currentTab: computed,
      formSection: observable,
      setFormSection: action,
      setFixModalHero: action,
      setSlugSuffixes: action,
      setStopHistoryChange: action,
      setVersionSlugSuffix: action,
      setFeaturesSwiperController: action,
      setFeaturesMobileSwiperController: action,
      setNewProductsSwiperController: action,
      setNewProductsMobileSwiperController: action,
      setExpandedGallerySwiperController: action,
      setProductDetailsSwiperController: action,
      setProductDetailsMobileSwiperController: action,
      setHighlightedVersionsSwiperController: action,
      setHighlightedVersionsMobileSwiperController: action,
      setQueryString: action,
    });
  }

  setCurrentVersion = (version: IVersion): IVersion =>
      (this.currentVersion = version);

  setQueryString = (
      queryString: URLSearchParams,
  ): URLSearchParams => {
    return (this.queryString = queryString);
  };

  setFeaturesSwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null => (this.featuresSwiperController = s);

  setFeaturesMobileSwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null =>
      (this.featuresMobileSwiperController = s);

  setNewProductsSwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null => (this.newProductsSwiperController = s);

  setNewProductsMobileSwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null =>
      (this.newProductsMobileSwiperController = s);

  setExpandedGallerySwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null =>
      (this.expandedGallerySwiperController = s);

  setProductDetailsSwiperController = (
      s: SwiperCore | null,
  ): SwiperCore | null =>
      (this.productDetailsSwiperController = s);

  setProductDetailsMobileSwiperController = (
      s: SwiperCore | null,
      tabId: string,
  ): MobileSwiperController => {
    return (this.productDetailsMobileSwiperController = {
      ...this.productDetailsMobileSwiperController,
      [tabId]: s,
    });
  };

  setHighlightedVersionsSwiperController = (
      s: SwiperCore,
  ): SwiperCore =>
      (this.highlightedVersionsSwiperController = s);

  setHighlightedVersionsMobileSwiperController = (
      s: SwiperCore,
  ): SwiperCore =>
      (this.highlightedVersionsMobileSwiperController = s);

  get currentTab(): ProductTab | undefined {
    return productDetails.find(
        (m) => m.id === this.selectedDetailTab,
    );
  }

  get isDesktop(): boolean {
    return this.pageX > 1024;
  }

  get isMinWidth(): boolean {
    return this.pageX < 768;
  }

  setVersionSlugSuffix = (s: string): string =>
      (this.versionSlugSuffix = s);

  setStopHistoryChange = (b: boolean): boolean =>
      (this.stopHistoryChange = b);

  setSlugSuffixes = (
      reference: MenuLabel,
      func: (slugSuffix: string) => void,
  ): void => {
    this.slugSuffixes = {
      ...this.slugSuffixes,
      [reference.slug]: func,
    };
  };

  setFixModalHero = (b: boolean): boolean =>
      (this.fixModalHero = b);

  setShowCookieInfo = (b: boolean): boolean =>
      (this.showCookieInfo = b);

  setShowDisclaimerInfo = (b: boolean): boolean =>
      (this.showDisclaimerInfo = b);

  checkNoScroll = (add: boolean): void => {
    if (add) {
      document
          .getElementById('scroll-snap')
          ?.classList.add('noScroll');
      document.body.classList.add('noScroll');
    } else {
      document
          .getElementById('scroll-snap')
          ?.classList.remove('noScroll');
      document.body.classList.remove('noScroll');
    }
  };

  setGalleryExpanded = (b: boolean): boolean => {
    this.checkNoScroll(b);
    return (this.galleryExpanded = b);
  };

  toggleGalleryExpanded = (): boolean => {
    this.checkNoScroll(!this.galleryExpanded);
    return (this.galleryExpanded = !this.galleryExpanded);
  };

  //OLD GALLERY
  // setSelectedGalleryImage = (g: GalleryAsset): GalleryAsset => {
  //   return (this.selectedGalleryImage = g);
  // };
  setSelectedGalleryImage = (g: GalleryAsset): GalleryAsset => {
    return (this.selectedGalleryImage = g);
  };

  swipeToTab = (tab: ProductTab): void => {
    if (this.productDetailsSwiperController) {
      const index = allSlides.findIndex(
          (s) => s.tabId === tab?.id,
      );
      if (this.productDetailsSwiperController) {
        this.productDetailsSwiperController?.slideTo(index);
      }
    }
  };

  setSelectedDetailTab = (
      t: ProductTab | null,
      setHistyState = true,
  ): string => {
    if (t && setHistyState) {
      const reference = getProductDetails(productDetails).find(
          (p) => p.id === `data-${t?.id}`,
      );
      const sufffix = allSlides.filter(
          (tab) => tab.tabId === t.id,
      )[0]?.slug;
      reference &&
      t?.parentSlug &&
      this.setCurrentlyVisibleNav(reference, sufffix);
    }
    return (this.selectedDetailTab = t ? t.id : '');
  };

  setNavRef = (
      x: MenuLabel['slug'],
      ref: MutableRefObject<unknown>,
  ): NavRefs => {
    return (this.navRefs = {...this.navRefs, [x]: ref});
  };

  scrollToRef = (ref: MenuLabel): void => {
    const element = this.navRefs[ref.slug]
        ?.current as HTMLDivElement;
    element?.scrollIntoView({behavior: 'smooth'});
  };

  setCurrentlyVisibleNav = (
      v: MenuLabel,
      suffix = '',
  ): MenuLabel['id'] => {
    const href = suffix ? `${v.slug}/${suffix}` : v.slug;
    if (window?.history && !this.stopHistoryChange) {
      try {
        const queryString = !!this.queryString
            ? `?${this.queryString.toString()}`
            : '';
        window.history.replaceState(
            {section: v},
            '',
            `${
                process.env.BASE_PREFIX ?? '/'
            }${href}${queryString}`.replace('//', '/'),
        );
      } catch (_e) {
        console.error(_e);
      }
    }
    return (this.currentlyVisibleNav = v.id);
  };

  setRoute = (nRoute: Routes): Routes => {
    this.pushNavigation(nRoute);
    return (this.route = nRoute);
  };

  setMainDisplayIndex = (nFunc: NFunc): number => {
    if (typeof nFunc === 'number') {
      return (this.mainDisplayIndex = nFunc);
    }
    return (this.mainDisplayIndex = nFunc(
        this.mainDisplayIndex,
    ));
  };
  setMenuOpen = (b: BFunc): boolean => {
    const setProp: boolean =
        typeof b !== 'boolean' ? b(this.menuOpen) : b;
    this.checkNoScroll(setProp);
    return (this.menuOpen = setProp);
  };
  setModalHero = (b: BFunc): boolean => {
    const setProp: boolean =
        typeof b !== 'boolean' ? b(this.modalHero) : b;
    this.checkNoScroll(setProp);
    return (this.modalHero = setProp);
  };
  setPageX = (n: number): number => (this.pageX = n);
  pushNavigation = (nRoute: Routes): Routes[] =>
      (this.navigation = [...this.navigation, nRoute]);
  navigateBack = (): void => {
    this.setRoute(this.lastView);
  };

  get lastView(): Routes {
    const last =
        this.navigation.length > 1
            ? this.navigation[this.navigation.length - 2]
            : Routes.HOME;
    return last;
  }

  setFormSection = (f: HTMLElement | null): HTMLElement | null =>
      (this.formSection = f);
}

export default FastbackStore;
