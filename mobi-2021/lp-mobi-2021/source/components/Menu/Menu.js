import $ from "jquery";
import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { gsap, TweenLite } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import { DataLayer } from "@dcode/react/components/DataLayer";
import { BackButton } from "~/components/BackButton";
import { AsideButton } from "~/components/AsideButton";
import { ToggleButton } from "~/components/ToggleButton";
import { FiatBrand } from "~/components/FiatBrand";
import { CarBrand } from "~/components/CarBrand";
import { HamburgerIcon } from "~/components/HamburgerButton";
import { PinIcon } from "~/components/PinButton";
import { getAnchorIndex, getScrollTop } from "./MenuUtils";
import configData from "~/configurations/data";
import css from "./Menu.scss";

// do not remove this line
gsap.registerPlugin(CSSPlugin, ScrollToPlugin);

export const classes = {
  global: "is-menu-open",
  root: css.menu,
  foreground: css.menuForeground,
  navBar: css.menuNavBar,
  navBarLogo: css.menuNavBarLogo,
  navBarLogoIcon: css.menuNavBarLogoIcon,
  navBarLabel: css.menuNavBarLabel,
  navBarLabelIcon: css.menuNavBarLabelIcon,
  navBarPin: css.menuNavBarPin,
  navBarPinIcon: css.menuNavBarPinIcon,
  aside: css.menuAside,
  asideList: css.menuAsideList,
  asideListAnchors: css.menuAsideListAnchors,
  asideListLinks: css.menuAsideListLinks,
  asideClose: css.menuAsideClose,
  isAsideClosed: css.isAsideClosed,
  asideCloseIcon: css.menuAsideCloseIcon,
  asideAnchor: css.menuAsideAnchor,
  asideAnchorText: css.menuAsideAnchorText,
  asideAnchorLink: css.menuAsideAnchorLink,
  asideAnchorLinkText: css.menuAsideAnchorLinkText,
  iconWhataspp: css.menuiconWhataspp,
  brand: css.menuBrand,
  brandDivider: css.menuBrandDivider,
  brandFiat: css.menuBrandFiat,
  brandCar: css.menuBrandCar,
  isActive: css.isActive,
  isTop: css.isTop,
  isOpen: css.isOpen,
};

export const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  mobile: PropTypes.bool,
};

export const defaultProps = {
  className: "",
  classes,
  data: configData.menu.data,
};

export class Menu extends React.Component {
  lastTop = -1;

  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
      isOpen: !props.mobile,
      currentIndex: 0,
      clicked: false,
    };
  }

  open = (triggerDL = true) => {
    if (triggerDL) DataLayer.push("Menu_ClicouAbrir");
    $(document).trigger("OPEN_ACCORDION_ITEM", "*");
    this.setState({ isOpen: true });
  };

  close = (triggerDL = true) => {
    if (triggerDL) DataLayer.push("Menu_ClicouFechar");
    this.setState({ isOpen: false });
  };

  toggle = (triggerDL = true) => {
    this.state.isOpen ? this.close(triggerDL) : this.open(triggerDL);
  };

  scrollTo = (y = 0, time = 0.5, props = {}) => {
    TweenLite.to(window, 0.5, { scrollTo: { y, autoKill: false }, ...props });
  };

  checkAnchors = () => {
    if (this.state.clicked) return false;
    const index = getAnchorIndex(this.anchorList, 0);
    if (this.state.currentIndex !== index) {
      const anchor = this.anchorList[index];
      const anchorId = anchor && anchor.getAttribute("id");
      if (anchor && anchorId) {
        DataLayer.push("App_Pageview", anchor.getAttribute("data-ui-anchor"));
      }
      this.setState({ currentIndex: index });
    }
  };

  onScroll = (evt) => {
    const top = getScrollTop();
    this.setState({ isTop: top === 0 });
    this.checkAnchors();
  };

  onClickLogo = () => {
    this.scrollTo(0, 0.5);
  };

  onClickItem = (index) => {
    this.setState({ currentIndex: index, clicked: true });
    const item = this.props.data.list[index];
    const scrollPositionY = getScrollTop();
    const $target = document.querySelector(`[data-ui-anchor="${item.anchor}"]`);
    if ($target) {
      const targetBounds = $target.getBoundingClientRect();
      const navBarDiff = this.props.mobile ? this.refs.menu.clientHeight : 58;
      const scrollTo = targetBounds.top + scrollPositionY - navBarDiff;
      this.scrollTo(scrollTo + 60, 0.5, {
        onComplete: () => {
          this.setState({ clicked: false });
          const uiAnchor = $target.getAttribute("data-ui-anchor");
          const vpv = /design|performance|tecnologia|seguranca/gi.test(uiAnchor)
            ? "sobre"
            : uiAnchor;
          DataLayer.push("App_Pageview", vpv);
          if (item.openTab) {
            $(document).trigger("OPEN_ACCORDION_ITEM", item.anchor);
          }
        },
      });
    }
    if (this.props.mobile) {
      this.close(false);
    }
  };

  sections = {};
  componentDidMount() {
    const anchors = document.querySelectorAll("[data-ui-anchor]");
    Array.prototype.forEach.call(anchors, ($el, index) => {
      const anchorName = $el.getAttribute("data-ui-anchor");
      this.sections[anchorName] = {
        index,
        anchor: anchorName,
        y: $el.offsetTop,
      };
    });
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  renderNavButton = (item, index) => {
    return (
      <DataLayer
        key={index}
        onEvent={item.dataLayerId || "Menu_ClicouItem"}
        args={[item.label]}
      >
        <button
          className={cls(classes.asideAnchor, {
            [classes.isActive]: this.state.currentIndex === index,
          })}
          onClick={(evt) => this.onClickItem(index)}
        >
          <span
            className={cls(classes.asideAnchorText, {
              sub: item.openTab,
            })}
            dangerouslySetInnerHTML={{
              __html: this.props.mobile
                ? item.labelMobile || item.label
                : item.label,
            }}
          />
        </button>
      </DataLayer>
    );
  };

  renderNavAnchor = (item, index) => {
    return (
      <DataLayer
        key={index}
        onEvent={item.dataLayerId || "Menu_ClicouItem"}
        args={[item.label]}
      >
        <a
          className={cls(classes.asideAnchorLink)}
          href={item.href}
          target={item.target}
        >
          {item.icon ? (
            <img alt={"whatsapp"}className={"iconWhataspp"} src={item.icon} />
          ) : (
            ""
          )}

          <span
            className={cls(classes.asideAnchorLinkText)}
            dangerouslySetInnerHTML={{
              __html: this.props.mobile
                ? item.labelMobile || item.label
                : item.label,
            }}
          />
        </a>
      </DataLayer>
    );
  };

  renderNavLink = (item, index) => {
    return (
      <DataLayer
        key={index}
        onEvent={item.dataLayerId || "Menu_ClicouItem"}
        args={[item.label]}
      >
        <Link
          className={cls(classes.asideAnchorLink)}
          to={`${item.href}${window.location.search || ''}`}
          onClick={item.onClick}
        >
          <span
            className={cls(classes.asideAnchorLinkText)}
            dangerouslySetInnerHTML={{
              __html: this.props.mobile
                ? item.labelMobile || item.label
                : item.label,
            }}
          />
        </Link>
      </DataLayer>
    );
  };

  renderMenuItems = (renderType = "*") => {
    return this.props.data.list.map((item, index) => {
      if (item.hideOnMobile && this.props.mobile) return null;
      const renderLinks = renderType === "*" || renderType === "link";
      const renderAnchors = renderType === "*" || renderType === "link";
      const renderButtons = renderType === "*" || renderType === "button";
      if (item.router) return renderLinks && this.renderNavLink(item, index);
      else if (item.href)
        return renderAnchors && this.renderNavAnchor(item, index);
      return renderButtons && this.renderNavButton(item, index);
    });
  };

  renderNavBar = (isOpen, props) => {
    return (
      <div className={cls(classes.navBar)}>
        {/* HAMBURGER ICON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <button className={cls(classes.navBarLabel)} onClick={this.toggle}>
          <HamburgerIcon className={cls(classes.navBarLabelIcon)} />
        </button>

        {/* FIAT LOGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <DataLayer onEvent={"Menu_ClicouLogoFiat"} args={[]}>
          <button
            className={cls(classes.navBarLogo)}
            onClick={this.onClickLogo}
          >
            <FiatBrand className={cls(classes.navBarLogoIcon)} />
            {props.mobile && <span>FIAT MOBI</span>}
          </button>
        </DataLayer>

        {/* PIN ICON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        {props.data.pin.visible && (
          <DataLayer onEvent={"Menu_ClicouPin"} args={[]}>
            <a
              className={cls(classes.navBarPin)}
              href={props.data.pin.href}
              target={props.data.pin.target}
            >
              <PinIcon className={cls(classes.navBarPinIcon)} />
            </a>
          </DataLayer>
        )}
      </div>
    );
  };

  renderAside = (isOpen, props) => {
    return (
      <div className={cls(classes.aside)}>
        {props.mobile && (
          <BackButton
            className={cls(classes.asideClose)}
            onClick={this.close}
          />
        )}
        <div className={cls(classes.asideList)}>
          <div className={cls(classes.asideListAnchors)}>
            {this.renderMenuItems("button")}
          </div>
          <div className={cls(classes.asideListLinks)}>
            {this.renderMenuItems("link")}
          </div>
        </div>
      </div>
    );
  };

  renderBrands = (isOpen, props) => {
    return (
      <div className={cls(classes.brand)}>
        <DataLayer onEvent={"Menu_ClicouLogoFiat"} args={[]}>
          <a href="http://fiat.com.br" target="_blank">
            <FiatBrand className={cls(classes.brandFiat)} />
          </a>
        </DataLayer>
        <DataLayer onEvent={"Menu_ClicouLogoCarro"} args={[]}>
          <span className={cls(classes.brandCar)} onClick={this.onClickLogo}>
            FIAT MOBI
          </span>
        </DataLayer>
      </div>
    );
  };

  renderMobile = (isOpen, props) => {
    return (
      <React.Fragment>
        <div className={cls(classes.foreground)} onClick={this.close} />
        {this.renderNavBar(isOpen, props)}
        {this.renderAside(isOpen, props)}
      </React.Fragment>
    );
  };

  renderDesktop = (isOpen, props) => {
    return (
      <React.Fragment>
        {this.renderBrands(isOpen, props)}
        {this.renderNavBar(isOpen, props)}
        {this.renderAside(isOpen, props)}
        {!props.mobile && (
          <ToggleButton
            className={cls(classes.asideClose, {
              [classes.isAsideClosed]: !isOpen,
            })}
            onClick={this.toggle}
            active={isOpen}
          />
        )}
      </React.Fragment>
    );
  };

  render() {
    const { classes, ...props } = this.props;
    const { isOpen } = this.state;
    const scrollPositionY = getScrollTop();
    document.body.classList[isOpen ? "add" : "remove"](classes.global);
    this.anchorList = Array.prototype.slice.call(
      document.querySelectorAll("[data-ui-anchor]")
    );
    return (
      <div
        ref={"menu"}
        className={cls(classes.root, {
          [classes.isTop]: scrollPositionY === 0,
          [classes.isOpen]: isOpen,
        })}
      >
        {props.mobile
          ? this.renderMobile(isOpen, props)
          : this.renderDesktop(isOpen, props)}
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export default Menu;
