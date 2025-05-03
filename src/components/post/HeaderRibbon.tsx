import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    headerRibbon: {
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255,165,0,0.9)',
        color: 'black',
        padding: '2px 10px',
        borderRadius: '0 0 10px 10px',
        fontSize: '0.7rem',
    },

    ownerRibbon: {
        backgroundColor: 'rgba(255, 0, 0, 0.4)',  // Red for topic owner
    },

    counselorRibbon: {
        backgroundColor: 'rgba(0, 128, 0, 0.4)', // Green for counselor
    },

    userRibbon: {
        backgroundColor: 'rgba(255, 165, 0, 0.4)', // Orange for regular user
    },
});

type HeaderRibbonProps = {
    userType: 'owner' | 'counselor' | 'user';
};

// HeaderRibbon component displayed on a post, showing user roles with different background colors.
const HeaderRibbon: React.FC<HeaderRibbonProps> = ({ userType }) => {
    const classes = useStyles();

    // Mapping user roles to corresponding classes and labels
    const ribbonDetails = {
        owner: { className: classes.ownerRibbon, label: 'פותח האשכול' },
        counselor: { className: classes.counselorRibbon, label: 'יועץ' },
        user: { className: classes.userRibbon, label: 'משתמש רגיל' },
    };

    const { className, label } = ribbonDetails[userType];

    return <div className={`${classes.headerRibbon} ${className}`}>{label}</div>;
};

export default HeaderRibbon;