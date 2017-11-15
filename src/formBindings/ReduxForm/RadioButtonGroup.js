import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import RadioButtonGroup from '../../formComponents/SemanticUI/RadioButtonGroup.js';

const styles = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0px',
}
const InputRadioButtonGroup = (props) => {
  return (
    <Field
      {...props}
      component={RadioButtonGroup}
    />
  );
}

export default InputRadioButtonGroup;