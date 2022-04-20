import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {


  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <h1>Rivia</h1>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink style={{ textDecoration: 'none',color:"#1c6159" }} to="/">{logo}</RouterLink>;
}
