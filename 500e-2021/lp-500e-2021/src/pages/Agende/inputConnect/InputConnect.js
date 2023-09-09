/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'inputmask/dist/inputmask/inputmask.numeric.extensions';
import 'inputmask/dist/inputmask/jquery.inputmask';
import { connect } from '@cerebral/react';
import { state, signal, props } from 'cerebral/tags';
import { form, field } from '@cerebral/forms';
// import { DataLayer } from '~/components/DataLayer';

const propTypes = {
  path: PropTypes.string,
};

export class InputConnectWrap extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.childRef = this.childRef.bind(this);
  }

  componentDidMount() {
    const { value, path } = this.props;
    value && this.props.actionSetField({ path, value });
  }

  onChange(event) {
    let { value } = event.target;
    if (this.props.filter) {
      value = this.props.filter(value);
    }
    this.props.actionSetField({ path: this.props.path, value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  onBlur() {
    this.props.actionTouchedField({ path: this.props.path });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    if (this.props.tracking && this.props.field.isValid) {
      // DataLayer.push(
      //   `FormSchedule_Preencheu_${this.props.tracking}`,
      // );
    }
  }

  childRef(node) {
    const { maskFormats } = this.props;
    if (maskFormats) {
      $(node).inputmask({
        mask: maskFormats,
        keepStatic: true,
      });
    }
  }

  render() {
    const { field } = this.props;
    const {
      touched,
      errorMessage,
      customErrorMessage,
      value,
      isValid,
    } = field;
    const child = React.Children.only(this.props.children);
    const childClone = React.cloneElement(child, {
      ref: this.childRef,
      onChange: this.onChange,
      onBlur: this.onBlur,
      value: value,
      error:
        touched && !isValid
          ? customErrorMessage
            ? customErrorMessage
            : errorMessage
          : null,
    });
    return childClone;
  }
}

InputConnectWrap.propTypes = propTypes;
export default connect(
  {
    field: field(state`${props`path`}`),
    actionSetField: signal`formSchedule.setField`,
    actionTouchedField: signal`formSchedule.touchedField`,
  },
  InputConnectWrap,
);
