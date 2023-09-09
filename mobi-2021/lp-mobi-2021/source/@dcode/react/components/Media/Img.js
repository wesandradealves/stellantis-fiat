import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import * as is from "@dcode/utils/is";

export const propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mode: PropTypes.oneOf(["fill", "fit", "contain", "cover"]),
  style: PropTypes.object,
  alt: PropTypes.string,
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const defaultProps = {
  src: "Define a image src",
  className: "",
  placeholder: "",
  width: "",
  height: "",
  mode: "",
  style: null,
  alt: "",
  x: "center",
  y: "center",
};

export class Img extends React.PureComponent {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    error: false,
    loaded: false,
    width: 0,
    height: 0,
  };

  onLoad = (evt) => {
    const img = evt.currentTarget;
    this.setState({
      width: img.naturalWidth,
      height: img.naturalHeight,
      loaded: true,
    });
    is.fn(this.props.onLoad) && this.props.onLoad(evt);
  };

  onError = (evt) => {
    if (!this.state.error && is.string(this.props.fallback)) {
      evt.target.src = this.props.fallback;
    }
    this.setState({ error: true });
    is.fn(this.props.onError) && this.props.onError(evt);
  };

  componentDidMount() {
    if (!this.state.loaded && !this.state.error) {
      const { src } = this.props;
      this.img = new Image();
      this.img.onload = this.onLoad;
      this.img.onerror = this.onError;
      this.img.src = src;
    }
  }

  componentWillUnmount() {
    if (!this.img) return;
    this.img.onload = Function.prototype;
    delete this.img;
  }

  render() {
    const {
      className,
      src,
      placeholder,
      width,
      height,
      mode,
      style,
      alt,
      x = "center",
      y = "center",
      ...props
    } = this.props;
    const modes = {
      fill: "cover",
      fit: "contain",
      contain: "contain",
      cover: "cover",
    };
    const defaults = {
      width: modes[mode] ? width || "100%" : this.state.width,
      height: modes[mode] ? height || "100%" : this.state.height,
      backgroundColor: "transparent",
    };
    const important = {
      backgroundImage: `url("${this.state.loaded ? src : placeholder || src}")`,
      backgroundPositionX: x,
      backgroundPositionY: y,
      backgroundRepeat: "no-repeat",
      backgroundSize: modes[mode] || "contain",
    };
    return (
      <div className={cls(className)} role="img" aria-label={alt}>
        <div {...props} style={{ ...defaults, ...style, ...important }}>
          {
            <img
              src={src}
              alt={`img-${alt}`}
              width={0}
              height={0}
              style={{ zIndex: -2 }}
            />
          }
        </div>
      </div>
    );
  }
}

export default Img;
