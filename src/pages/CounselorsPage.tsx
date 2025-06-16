import React, { useEffect, useState, useMemo } from 'react';
import { Container, Typography, Grid, Paper, Box, TextField, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { MailOutline, Person, WorkOutline, SchoolOutlined, BusinessCenter } from '@mui/icons-material';
import { fetchAllCounselors, setCounselors } from 'data/redux/counselor/counselor.slice';
import { CounselorType } from 'data/types/domainTypes/counselor.types';
import { useAppSetup } from 'data/useAppSetup';
import ContactCounselorDialog from 'components/dialogs/contact/ContactCounselorDialog';
import { useCounselorPageStyles } from 'styles/CounselorPage.styles';

const CounselorsPage: React.FC = () => {
    const classes = useCounselorPageStyles;
    const { dispatch, counselors } = useAppSetup();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<string | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [selectedCounselorEmail, setSelectedCounselorEmail] = useState<string | null>(null);
    const [selectedCounselorName, setSelectedCounselorName] = useState<string | null>(null);
    const { currentUser, isAuthenticated } = useAppSetup();
    const [hoveredSignUp, setHoveredSignUp] = useState(false);
    const [hoveredLogin, setHoveredLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const loadCounselors = async () => {
        setLoading(true);
        try {
            await dispatch(fetchAllCounselors()).unwrap();
        } catch (error) {
            console.error('Failed to fetch counselors:', error);
        } finally {
            setLoading(false);
        }
    };

         loadCounselors();
     }, [dispatch]);

    // Memoized filtered counselors based on search query and experience level
    const filteredCounselors = useMemo(() => {
        let result = Object.values(counselors).filter(counselor =>
            counselor.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Filter counselors based on selected experience level
        if (selectedExperienceLevel) {
            result = result.filter(counselor => {
                if (selectedExperienceLevel === 'beginner' && counselor.yearsOfExperience <= 2) return true;
                if (selectedExperienceLevel === 'experienced' && counselor.yearsOfExperience >= 3 && counselor.yearsOfExperience <= 5) return true;
                if (selectedExperienceLevel === 'expert' && counselor.yearsOfExperience > 5 && counselor.yearsOfExperience <= 10) return true;
                if (selectedExperienceLevel === 'senior' && counselor.yearsOfExperience > 10) return true;
                return false;
            });
        }

        return result;
    }, [searchQuery, counselors, selectedExperienceLevel]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setSelectedExperienceLevel(null);  // Reset experience level when search query changes
    };

    // Fetch and sort counselors based on experience level when component mounts or counselors change
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: CounselorType[] = Object.values(counselors);
                if (data.length === 0) {
                    return;
                }
                const sortedData = data.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
                if (JSON.stringify(counselors) !== JSON.stringify(sortedData)) {
                    dispatch(setCounselors(sortedData));
                }
            } catch (error) {
                console.error('Failed to fetch counselors', error);
            }
        };

        fetchData();
    }, [dispatch, counselors]);

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    // Handle counselor contact button click to open the dialog
    const handleContactClick = (email: string, name: string) => {
        setSelectedCounselorEmail(email);
        setSelectedCounselorName(name);
        setOpenDialog(true);
    };

    return (
        <Container maxWidth="lg" sx={classes.root}>
            <Typography variant="h3" component="h1" gutterBottom sx={classes.title}>
                היועצים שלנו
            </Typography>

            <Box sx={classes.explanationBox}>
                <Typography variant="body1" component="p">
                    התגיות מציינות את ניסיון היועץ: מתחיל: 0-2 שנות ניסיון, מנוסה: 3-5 שנים, מומחה: 5-10 שנים, בכיר: 10+ שנים.
                </Typography>
            </Box>

            {/* Filtering section for experience level */}
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 700, color: '#6F4E37', marginTop: '20px' }}>
                    מיון לפי רמת ניסיון:
                </Typography>
                <Box display="flex" justifyContent="center">
                    <Button
                        variant={selectedExperienceLevel === 'beginner' ? 'contained' : 'outlined'}
                        color="primary"
                        style={{ margin: '0 10px', backgroundColor: '#F5DEB3' }}
                        onClick={() => setSelectedExperienceLevel('beginner')}
                    >
                        מתחיל
                    </Button>
                    <Button
                        variant={selectedExperienceLevel === 'experienced' ? 'contained' : 'outlined'}
                        color="primary"
                        style={{ margin: '0 10px', backgroundColor: '#C88A4A' }}
                        onClick={() => setSelectedExperienceLevel('experienced')}
                    >
                        מנוסה
                    </Button>
                    <Button
                        variant={selectedExperienceLevel === 'expert' ? 'contained' : 'outlined'}
                        color="primary"
                        style={{ margin: '0 10px', backgroundColor: '#8B4513' }}
                        onClick={() => setSelectedExperienceLevel('expert')}
                    >
                        מומחה
                    </Button>
                    <Button
                        variant={selectedExperienceLevel === 'senior' ? 'contained' : 'outlined'}
                        color="primary"
                        style={{ margin: '0 10px', backgroundColor: '#4B2C20' }}
                        onClick={() => setSelectedExperienceLevel('senior')}
                    >
                        בכיר
                    </Button>
                </Box>
            </Box>

            {/* Search by first name or last name */}
            <Box display="flex" flexDirection="column" alignItems="center" mb={1}>
                <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 700, color: '#6F4E37' }}>
                    חיפוש לפי שם פרטי או שם משפחה:
                </Typography>

                <Box sx={classes.searchBoxContainer}>
                    <TextField
                        sx={classes.searchBox}
                        onChange={handleSearchChange}
                        variant="outlined"
                        fullWidth
                        value={searchQuery}
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                </Box>
            </Box>

            {/* Display counselors in grid format */}
            <Grid container spacing={3}>
                {filteredCounselors.length === 0 && (
                    <Dialog open={openDialog} onClose={handleDialogClose}>
                        <DialogTitle>לא נמצאו תוצאות</DialogTitle>
                        <DialogContent>
                            <Typography variant="body1">לא נמצאו יועצים שמתאימים לחיפוש שלכם.</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose} color="primary">סגור</Button>
                        </DialogActions>
                    </Dialog>
                )}
                {filteredCounselors.map((counselor: CounselorType | null | undefined, index) => {
                    if (!counselor) {
                        return null;
                    }

                    return (
                        <Grid item xs={12} sm={6} lg={4} key={`${counselor.id}-${index}`}>
                            <Box sx={classes.counselorItem} component={Paper}>
                                {/* Display experience level badge */}
                                {counselor.yearsOfExperience <= 2 && (
                                    <Chip label="יועץ מתחיל" sx={classes.badge} style={{ backgroundColor: '#F5DEB3', color: '#6F4E37' }} />
                                )}
                                {counselor.yearsOfExperience >= 3 && counselor.yearsOfExperience <= 5 && (
                                    <Chip label="יועץ מנוסה" sx={classes.badge} style={{ backgroundColor: '#C88A4A', color: '#fff' }} />
                                )}
                                {counselor.yearsOfExperience > 5 && counselor.yearsOfExperience <= 10 && (
                                    <Chip label="יועץ מומחה" sx={classes.badge} style={{ backgroundColor: '#8B4513', color: '#fff' }} />
                                )}
                                {counselor.yearsOfExperience > 10 && (
                                    <Chip label="יועץ בכיר" sx={classes.badge} style={{ backgroundColor: '#4B2C20', color: '#fff' }} />
                                )}

                                {/* Display counselor name and details */}
                                <Typography sx={classes.counselorName}>
                                    {counselor.name}
                                </Typography>
                                <div>
                                    <div style={useCounselorPageStyles.counselorDetails}>
                                        <Person style={useCounselorPageStyles.icon} />
                                        <span><strong>מי אני:</strong> {counselor.bio}</span>
                                    </div>
                                    <div style={useCounselorPageStyles.counselorDetails}>
                                        <WorkOutline style={useCounselorPageStyles.icon} />
                                        <span><strong>שנות ניסיון:</strong> {counselor.yearsOfExperience}</span>
                                    </div>
                                    <div style={useCounselorPageStyles.counselorDetails}>
                                        <BusinessCenter style={useCounselorPageStyles.icon} />
                                        <span><strong>היסטוריית עבודה:</strong> {counselor.workHistory}</span>
                                    </div>
                                    <div style={useCounselorPageStyles.counselorDetails}>
                                        <SchoolOutlined style={useCounselorPageStyles.icon} />
                                        <span><strong>תארים אקדמיים ומוסדות לימוד:</strong> {counselor.academicDegrees} - {counselor.educationalInstitutions}</span>
                                    </div>
                                </div>
                                {/* Contact button */}
                                <a
                                    href="#"
                                    style={{
                                        marginTop: "20px",
                                        backgroundColor: "#D77F3E",
                                        color: "#fff",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        textDecoration: "none",
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleContactClick(counselor.email, counselor.name);
                                    }}
                                >
                                    <MailOutline style={useCounselorPageStyles.buttonIcon} />
                                    צרו קשר
                                </a>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>

            <ContactCounselorDialog
                open={openDialog}
                onClose={handleDialogClose}
                isAuthenticated={isAuthenticated}
                counselorEmail={selectedCounselorEmail}
                counselorName={selectedCounselorName}
                currentUser={currentUser}
                hoveredSignUp={hoveredSignUp}
                setHoveredSignUp={setHoveredSignUp}
                hoveredLogin={hoveredLogin}
                setHoveredLogin={setHoveredLogin}
            />
        </Container>
    );
};

export default CounselorsPage;
