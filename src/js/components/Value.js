// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';

const CLASS_ROOT = "value";

export default class Value extends Component {

  render () {
    const classes = [CLASS_ROOT];
    if (this.props.size) {
      classes.push(`${CLASS_ROOT}--${this.props.size}`);
    }
    if (this.props.align) {
      classes.push(`${CLASS_ROOT}--align-${this.props.align}`);
    }
    if (this.props.onClick) {
      classes.push(`${CLASS_ROOT}--interactive`);
    }
    if (this.props.colorIndex) {
      classes.push(`color-index-${this.props.colorIndex}`);
    }
    if (this.props.active) {
      classes.push(`${CLASS_ROOT}--active`);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    let units;
    if (this.props.units) {
      units = (
        <span className={`${CLASS_ROOT}__units`}>
          {this.props.units}
        </span>
      );
    }

    let label;
    if (this.props.label) {
      label = (
        <span className={`${CLASS_ROOT}__label`}>
          {this.props.label}
        </span>
      );
    }

    return (
      <div className={classes.join(' ')} onClick={this.props.onClick}>
        <div className={`${CLASS_ROOT}__annotated`}>
          {this.props.icon}
          <span className={`${CLASS_ROOT}__value`}>
            {this.props.value}
          </span>
          {units}
          {this.props.trendIcon}
        </div>
        {label}
      </div>
    );
  }

}

Value.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  colorIndex: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  trendIcon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  units: PropTypes.string
};

Value.defaultProps = {
  align: 'center'
};
