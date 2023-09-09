import { dataMenuLabels } from '@/mocks/menu';
import productDetails, { ProductTab, allSlides } from '@/mocks/productDetails';
import { MenuLabels } from '@/models';
import SwiperCore from 'swiper';
import {
  makeObservable,
  observable,
  action,
  computed,
} from 'mobx';
import { MutableRefObject } from 'react';
import { gallery, GalleryAsset } from '@/assets/gallery';

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
  PRIVACY_POLICY = '@pulse/privacy-policy',
}

type NFunc = number | ((n: number) => number);
type BFunc = boolean | ((n: boolean) => boolean);

interface NavRefs {
  [x: string]: MutableRefObject<unknown>;
}

interface MobileSwiperController {
  [x: string]: SwiperCore | undefined;
}
class PulseStore {
  navigation: Routes[] = [];
  showCookieInfo = false;
  queryString: URLSearchParams = new URLSearchParams('');
  route: Routes = Routes.HOME;
  selectedGalleryImage = gallery[0];
  selectedDetailTab = '';
  swiperController: SwiperCore | undefined;
  expandedSwiperController: SwiperCore | undefined;
  galleryExpanded = false;
  mobileSwiperController: MobileSwiperController = {} as MobileSwiperController;
  connectMeswiperController: SwiperCore | undefined;
  pageX = 0;
  mainDisplayIndex = 0;
  menuOpen = false;
  currentlyVisibleNav: MenuLabels['id'] = '';
  navRefs = {} as NavRefs;

  constructor() {
    makeObservable(this, {
      currentlyVisibleNav: observable,
      route: observable,
      queryString: observable,
      pageX: observable,
      showCookieInfo: observable,
      expandedSwiperController: observable,
      galleryExpanded: observable,
      selectedGalleryImage: observable,
      swiperController: observable,
      connectMeswiperController: observable,
      selectedDetailTab: observable,
      menuOpen: observable,
      mainDisplayIndex: observable,
      navRefs: observable,
      mobileSwiperController: observable,
      setMainDisplayIndex: action,
      setRoute: action,
      setCurrentlyVisibleNav: action,
      setNavRef: action,
      setExpandedSwiperController: action,
      setSelectedDetailTab: action,
      pushNavigation: action,
      setSelectedGalleryImage: action,
      navigateBack: action,
      setMenuOpen: action,
      setQueryString: action,
      setShowCookieInfo: action,
      setMobileSwiperController: action,
      setSwiperController: action,
      setConnectMeSwiperController: action,
      toggleGalleryExpanded: action,
      setGalleryExpanded: action,
      setPageX: action,
      isDesktop: computed,
      isMinWidth: computed,
      lastView: computed,
      isQueried: computed,
      currentTab: computed,
      getSearchParams: computed,
    });
  }

  get currentTab(): ProductTab | undefined {
    return productDetails.find((m) => m.id === this.selectedDetailTab);
  }

  get isDesktop(): boolean {
    return this.pageX > 1024;
  }

  get isMinWidth(): boolean {
    return this.pageX < 768;
  }

  get isQueried(): boolean {
    return false;
  }

  get getSearchParams(): string {
    const searchParams = this.queryString?.toString() ? `/?${this.queryString?.toString()}` : '';
    return searchParams;
  }

  setShowCookieInfo = (b: boolean): boolean => this.showCookieInfo = b;

  setExpandedSwiperController = (s: SwiperCore): SwiperCore => this.expandedSwiperController = s;

  checkNoScroll = (add: boolean): void => {
    if (add) {
      document.getElementById('scroll-snap')?.classList.add('noScroll');
      document.body.classList.add('noScroll');
    } else {
      document.getElementById('scroll-snap')?.classList.remove('noScroll');
      document.body.classList.remove('noScroll');
    }
  }

  setGalleryExpanded = (b: boolean): boolean => {
    this.checkNoScroll(b);
    return this.galleryExpanded = b;
  }

  toggleGalleryExpanded = (): boolean => {
    this.checkNoScroll(!this.galleryExpanded);
    return this.galleryExpanded = !this.galleryExpanded;
  }

  setSelectedGalleryImage = (g: GalleryAsset): GalleryAsset => {
    return this.selectedGalleryImage = g;
  }

  swipeToTab = (tab: ProductTab): void => {
    if (this.swiperController) {
      const index = allSlides.findIndex((s) => s.tabId === tab?.id);
      if (this.swiperController) {
        this.swiperController?.slideTo(index);
      }
    }
  }

  setQueryString = (o: URLSearchParams): URLSearchParams => {
    return this.queryString = o;
  }

  setSwiperController = (s: SwiperCore): SwiperCore => {
    return this.swiperController = s;
  }

  setMobileSwiperController = (s: SwiperCore, tabId: string): MobileSwiperController => {
    return this.mobileSwiperController = {
      ...this.mobileSwiperController,
      [tabId]: s,
    };
  }

  setConnectMeSwiperController = (s: SwiperCore): SwiperCore => {
    return this.connectMeswiperController = s;
  }

  setSelectedDetailTab = (t: ProductTab | null, queryString?: URLSearchParams): string => {
    if (t) {
      const menuItem = dataMenuLabels().find((m) => m.tabId === t.id);
      if (menuItem) this.setCurrentlyVisibleNav(menuItem, queryString);
    }
    return this.selectedDetailTab = t ? t.id : '';
  }

  setNavRef = (x: MenuLabels['slug'], ref: MutableRefObject<unknown>): NavRefs => {
    return this.navRefs = { ...this.navRefs, [x]: ref };
  }

  scrollToRef = (ref: MenuLabels): void => {
    if (ref.nestedPrefix && ref.tabId) {
      const tag = productDetails.find((d) => d.id === ref.tabId);
      if (tag) {
        this.swipeToTab(tag);
        this.setSelectedDetailTab(tag);
      }
    }
    const element = this.navRefs[ref.reference?.slug ?? ref.slug]?.current as HTMLDivElement;
    (element)?.scrollIntoView({ behavior: 'smooth' });
  }

  setCurrentlyVisibleNav = (v: MenuLabels, queryString?: URLSearchParams): MenuLabels['id'] => {
    const tag = productDetails.find((d) => d.id === this.currentlyVisibleNav);
    const tagTab = v.nestedPrefix && tag?.slug ? tag.slug : '';
    if (window?.history) {
      try {
        // TEMPORARY FIX
        const queryProp = queryString ?? this.queryString;
        const searchParams = queryProp?.toString() ? `/?${queryProp?.toString()}` : '';
        window.history.replaceState({ section: v }, '', `${process.env.BASE_PREFIX ?? ''}${v.slug}${tagTab}${searchParams}`.replace('//', '/'));
      } catch (_e) { }
    }
    return this.currentlyVisibleNav = v.id;
  }

  setRoute = (nRoute: Routes): Routes => {
    this.pushNavigation(nRoute);
    return this.route = nRoute;
  }

  setMainDisplayIndex = (nFunc: NFunc): number => {
    if (typeof nFunc === 'number') {
      return this.mainDisplayIndex = nFunc;
    }
    return this.mainDisplayIndex = nFunc(this.mainDisplayIndex);
  }
  setMenuOpen = (b: BFunc): boolean => {
    const setProp: boolean = typeof b !== 'boolean' ? b(this.menuOpen) : b;
    this.checkNoScroll(setProp);
    return this.menuOpen = setProp;
  }
  setPageX = (n: number): number => this.pageX = n;
  pushNavigation = (nRoute: Routes): Routes[] => this.navigation = [...this.navigation, nRoute];
  navigateBack = (): void => {
    this.setRoute(this.lastView);
  }
  get lastView(): Routes {
    const last = this.navigation.length > 1 ? this.navigation[this.navigation.length - 2] : Routes.HOME;
    return last;
  }
}

export default PulseStore;
