import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../providers/theme-provider';
import { fontSizes } from '../../../theme/font-sizes';

function CtaButton({ label, onClick = () => {}, style = {} }) {
  const { colors } = useTheme();

  return (
    <button
      onClick={onClick}
      style={{
        margin: '10px',
        backgroundColor: colors.primary,
        color: colors.buttonText,
        fontSize: fontSizes.body,
        cursor: 'pointer',
        ...style,
      }}
    >
      {label}
    </button>
  );
}

CtaButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default CtaButton;
