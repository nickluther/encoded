import React from 'react';
import PropTypes from 'prop-types';
import * as globals from './globals';

const StatusLabel = (props) => {
    const { status, title, buttonLabel, fileStatus } = props;
    const labelClass = fileStatus ? 'file-label' : 'label';

    if (typeof status === 'string') {
        // Display simple string and optional title in badge
        return (
            <ul className="status-list">
                <li className={globals.statusClass(status, labelClass)}>
                    {title ? <span className="status-list-title">{`${title}: `}</span> : null}
                    {buttonLabel || status}
                </li>
            </ul>
        );
    } else if (typeof status === 'object') {
        // Display a list of badges from array of objects with status and optional title
        return (
            <ul className="status-list">
                {status.map(singleStatus => (
                    <li key={singleStatus.title} className={globals.statusClass(singleStatus.status, labelClass)}>
                        {singleStatus.title ? <span className="status-list-title">{`${singleStatus.title}: `}</span> : null}
                        {singleStatus.status}
                    </li>
                ))}
            </ul>
        );
    }
    return null;
};

StatusLabel.propTypes = {
    status: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired, // Array of status objects with status and badge title
    title: PropTypes.string,
    buttonLabel: PropTypes.string,
    fileStatus: PropTypes.bool,
};

StatusLabel.defaultProps = {
    title: '',
    buttonLabel: '',
    fileStatus: false,
};

export default StatusLabel;
