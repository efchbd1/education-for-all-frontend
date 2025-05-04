import React, { FormEvent } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useCreateTopic } from '../hooks/useCreateTopic';
import * as classes from 'styles/form';

const CreateTopicPage: React.FC = () => {
    const { formData, initialPostContent, errors, handleChange, handleSubmit } = useCreateTopic();

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit();
    };

    return (
        <Container maxWidth="sm" sx={classes.container}>
            <Typography variant="h2" sx={classes.title}>
                פתיחת אשכול חדש
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="כותרת"
                    name="title"
                    placeholder="הקלידו כותרת עניינית וממצה"
                    value={formData.title}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    error={!!errors.title}
                    helperText={errors.title}
                    InputLabelProps={{ shrink: true }}
                    sx={{ input: classes.inputField }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="תוכן השאלה"
                    name="initialPostContent"
                    placeholder="פרטי השאלה, כגון גיל הילד/ה, הדילמה והפתרונות שנוסו עד כה"
                    multiline
                    rows={4}
                    value={initialPostContent}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    error={!!errors.initialPostContent}
                    helperText={errors.initialPostContent}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        ...classes.textField,
                        textarea: classes.inputField,
                    }}
                />
                <Button variant="contained" type="submit" fullWidth sx={classes.button}>
                    צרו אשכול
                </Button>
                {errors.form && (
                    <Typography variant="body2" sx={classes.errorText}>
                        {errors.form}
                    </Typography>
                )}
            </form>
        </Container>
    );
};

export default CreateTopicPage;