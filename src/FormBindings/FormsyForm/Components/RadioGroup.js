import React from 'react';
import PropTypes from 'prop-types';
import { HOC } from 'formsy-react';

import { RadioButtonGroupUI } from '../Config/UIPicker.js';
import { RadioUI } from '../Config/UIPicker.js';

import { formsyApiPropsKeys, wrapperRadioButtonGroupPropsKeys } from '../Common/utilConstants.js';
import { extractObjectHavingKeys, extractObjectOmittingKeys } from '../Common/util.js';

class FormsyMuiRadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
  }

  render() {
    const formsyApiProps = extractObjectHavingKeys(formsyApiPropsKeys, this.props);
    const extractedPropsForWrapperRadioGroup = extractObjectHavingKeys(wrapperRadioButtonGroupPropsKeys, this.props);
    const wrapperRadioButtonGroupProps = {
      ...extractedPropsForWrapperRadioGroup,
      disabled: this.props.isFormDisabled(),
      onChange: this.handleChange,
      value: this.props.getValue(),
    }
    const DOMInputProps = extractObjectOmittingKeys(
      [...formsyApiPropsKeys, ...wrapperRadioButtonGroupPropsKeys],
      this.props,
    )

    const radioComponents = this.props.options.map(({ key, text: name , value, ...radioOption }) => {
      const {
        onChange,
        ...rest,
      } = radioOption;

      const checked = radioOption.value === this.props.getValue;
      
      return (
        <RadioUI
          key={key}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          {...rest}
        />
      )
    })
    const {
      wrapperStyle,
      labelStyle,
      inputDivStyle,
      label,
      loadDefaultStyle,
    } = this.props;
    return (
      <div style={wrapperStyle}>
        {
          !loadDefaultStyle ?
          <label>
            {label}
          </label> : null
        }
        <div style={inputDivStyle}>
          <RadioButtonGroupUI
            {...this.props}
            disabled={wrapperRadioButtonGroupProps.disabled}
            onChange={this.handleChange}
            value={this.props.getValue()}
            radioOptions={this.props.options}
          />
        </div>      
      </div>
    );
  }
}

export default HOC(FormsyMuiRadioGroup);
