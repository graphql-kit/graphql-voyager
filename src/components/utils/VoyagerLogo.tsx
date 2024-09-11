import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import LogoIcon from '../icons/logo-small.svg';

export function VoyagerLogo() {
  return (
    <Link
      href="https://github.com/graphql-kit/graphql-voyager"
      target="_blank"
      rel="noreferrer"
      color="secondary.dark"
      underline="none"
      margin={2}
    >
      <Stack direction="row" justifyContent="center" spacing={1}>
        <Box>
          <SvgIcon
            inheritViewBox
            component={LogoIcon}
            sx={{ width: 50, height: 50, transform: 'rotateZ(16deg)' }}
          />
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          textTransform="uppercase"
        >
          <Typography fontSize="21px" lineHeight={1} fontWeight="bold">
            GraphQL
          </Typography>
          <Typography fontSize="15px" lineHeight={1} letterSpacing={5}>
            Voyager
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}
