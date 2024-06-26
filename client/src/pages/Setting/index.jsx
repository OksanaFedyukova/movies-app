import { Box, Typography, Grid, Switch, FormControlLabel, Select, MenuItem, TextField, Button, Avatar } from "@mui/material";
import { useState } from "react";

const Setting = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        photo: ''
    });

    const handleDarkModeChange = (event) => {
        setDarkMode(event.target.checked);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfile(prevProfile => ({ ...prevProfile, photo: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    return (
<Box sx={{ flexGrow: 1, mt: 8, px: 3, minHeight: 'calc(100vh - 64px)' }}>
<Typography variant="h3" gutterBottom>Settings</Typography>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h6">Appearance</Typography>
                    <FormControlLabel 
                        control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
                        label="Dark Mode"
                    />
                </Grid>
        <Grid item xs={6}>
                    <Typography variant="h6">Profile</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={profile.photo} sx={{ width: 56, height: 56, mr: 2 }} />
                        <Button 
                        sx={{bgcolor:"#f8a5a5",
                            '&:hover': {
            bgcolor: "#e57373", }
                        }} variant="contained" component="label">
                            Upload Photo
                            <input type="file" hidden onChange={handlePhotoUpload} />
                        </Button>
                    </Box>
                    </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Language</Typography>
                    <Select
                        value={language}
                        onChange={handleLanguageChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">Українська</MenuItem>
                    </Select>
                </Grid>

               

                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        margin="normal"
                    />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Setting;
