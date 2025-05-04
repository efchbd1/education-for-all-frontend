import React from 'react';

const styles = {
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
    } as React.CSSProperties,

    ownerRibbon: {
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
    } as React.CSSProperties,

    counselorRibbon: {
        backgroundColor: 'rgba(0, 128, 0, 0.4)',
    } as React.CSSProperties,

    userRibbon: {
        backgroundColor: 'rgba(255, 165, 0, 0.4)',
    } as React.CSSProperties,
};

type HeaderRibbonProps = {
    userType: 'owner' | 'counselor' | 'user';
};

// HeaderRibbon component displayed on a post, showing user roles with different background colors.
const HeaderRibbon: React.FC<HeaderRibbonProps> = ({ userType }) => {

    // Mapping user roles to corresponding classes and labels
    const ribbonDetails = {
        owner: { style: styles.ownerRibbon, label: 'פותח האשכול' },
        counselor: { style: styles.counselorRibbon, label: 'יועץ' },
        user: { style: styles.userRibbon, label: 'משתמש רגיל' },
    };

    const { style, label } = ribbonDetails[userType];

    return (<div style={{ ...styles.headerRibbon, ...style }}>
        {label}
    </div>
    );
};

export default HeaderRibbon;