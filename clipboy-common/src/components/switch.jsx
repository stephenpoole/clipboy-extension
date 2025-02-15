import React from 'react';
import PropTypes from 'prop-types';
import MaterialSwitch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Switch = ({
    className = '',
    label,
    value,
    onChange,
    enabled = true
}) => (
    <FormGroup className={className}>
        <FormControlLabel
            control={
                <MaterialSwitch
                    size="small"
                    checked={value}
                    onChange={(event, value) => {
                        onChange(value);
                    }}
                    disabled={!enabled}
                    color="primary"
                />
            }
            label={label}
        />
    </FormGroup>
);

Switch.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onStill: PropTypes.func,
    enabled: PropTypes.bool,
    value: PropTypes.bool,
    className: PropTypes.string
};
