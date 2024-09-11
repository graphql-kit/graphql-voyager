import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function PoweredBy() {
  return (
    <Typography
      textAlign="center"
      padding={1}
      color="secondary.dark"
      borderTop="1px solid"
      borderColor="shadowColor.main"
    >
      🛰 Powered by{' '}
      <Link
        href="https://github.com/graphql-kit/graphql-voyager"
        target="_blank"
        rel="noreferrer"
      >
        GraphQL Voyager
      </Link>
    </Typography>
  );
}
