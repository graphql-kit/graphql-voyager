import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function PoweredBy() {
  return (
    <Typography
      textAlign="center"
      padding={1}
      color={({ palette }) => palette.logoColor.main}
      borderTop="1px solid"
      borderColor={({ palette }) => palette.shadowColor.main}
    >
      🛰 Powered by{' '}
      <Link
        href="https://github.com/IvanGoncharov/graphql-voyager"
        target="_blank"
        rel="noreferrer"
      >
        GraphQL Voyager
      </Link>
    </Typography>
  );
}
