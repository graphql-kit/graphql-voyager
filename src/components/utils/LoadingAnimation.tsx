import { SvgIcon, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import VoyagerIcon from '../icons/logo-with-signals.svg';

export default function LoadingAnimation() {
  return (
    <Stack
      role="status"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10,

        color: 'white',
        height: '100%',
        width: '100%',
      }}
    >
      <SvgIcon
        inheritViewBox
        component={VoyagerIcon}
        color="secondary"
        sx={{ width: 180, height: 180 }}
      />
      <Typography variant="h4" color="secondary" letterSpacing={4} fontWeight="medium">
        Transmitting...
      </Typography>
    </Stack>
  );
}
