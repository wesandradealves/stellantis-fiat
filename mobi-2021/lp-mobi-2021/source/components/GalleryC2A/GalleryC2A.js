import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TweenMax, TimelineMax, Cubic, Back, Quart } from "gsap";
import { DataLayer } from "@dcode/react/components/DataLayer";
import css from "./GalleryC2A.scss";

export const classes = {
  root: css.galleryC2A,
  container: css.galleryC2AContainer,
  text: css.galleryC2AText,
  callToAction: css.galleryC2ACallToAction,
  closeButton: css.galleryC2ACloseButton,
};

export const propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  show: PropTypes.bool,
};

export const defaultProps = {
  className: "",
  classes,
  show: false,
};

export class GalleryC2A extends React.Component {
  timeline = new TimelineMax({ paused: true, smoothChildTiming: true });

  componentDidMount() {
    TweenMax.set(this.refs.root, { autoAlpha: 0 /*, y: 40*/ });
    this.timeline.add([
      TweenMax.to(this.refs.root, 1, {
        autoAlpha: 1,
        /*y: 0,*/ ease: Quart.easeInOut,
      }),
      TweenMax.from(this.refs.text, 1, {
        autoAlpha: 0,
        y: 20,
        ease: Back.easeOut,
        delay: 0.5,
      }),
      TweenMax.from(this.refs.callToAction, 1, {
        autoAlpha: 0,
        y: 20,
        ease: Back.easeInOut,
        delay: 0.55,
      }),
      TweenMax.from(this.refs.closeButton, 1, {
        autoAlpha: 0,
        ease: Back.easeInOut,
        delay: 0.6,
      }),
    ]);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      if (nextProps.show) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  show = () => {
    this.timeline.seek(0).play();
  };

  hide = () => {
    TweenMax.to(this.refs.root, 0.5, {
      autoAlpha: 0,
      /*y: 0,*/ ease: Quart.easeInOut,
    });
  };

  render() {
    const { className, classes, ...props } = this.props;
    return (
      <div className={cls(classes.root, className)} ref="root">
        <div className={cls(classes.container)}>
          <p className={classes.text} ref="text">
            SE ELE É LINDO NAS FOTOS,
            <br />
            IMAGINA NA SUA GARAGEM?
          </p>
          <DataLayer onEvent={"Galeria_C2A_Fechou"}>
            <button
              className={classes.closeButton}
              onClick={this.hide}
              ref="closeButton"
            >
              x
            </button>
          </DataLayer>
          <DataLayer onEvent={"Galeria_C2A_LinkAgende"}>
            {/* <Link className={classes.callToAction} to={`/agende${window.location.search || ''}`} https://www.fiat.com.br/compre/fiat-mobi.html> */}
            <Link
              className={classes.callToAction}
              href="https://www.fiat.com.br/compre/fiat-mobi.html"
              target="_blank"
            >
              COMPRE O SEU
            </Link>
          </DataLayer>
        </div>
      </div>
    );
  }
}

GalleryC2A.propTypes = propTypes;
GalleryC2A.defaultProps = defaultProps;
export default GalleryC2A;
