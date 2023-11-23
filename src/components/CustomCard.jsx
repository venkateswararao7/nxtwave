import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CustomCard = ({ icon, text, link }) => {
    return (
        <Card >
            <CardContent >
                <div style={{ display: 'flex', alignItems: 'center', width: 300, height: 200, border: '1px solid #e0e0e0' }}>
                    {/* Image Icon */}
                    <div style={{ marginRight: 16 }}>
                        <img src={icon} alt="Icon" style={{ width: '50px', height: '50px' }} />
                    </div>

                    {/* Text */}
                    <div>
                        <Typography variant="h6" gutterBottom>
                            {text}
                        </Typography>

                        {/* Link */}
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
