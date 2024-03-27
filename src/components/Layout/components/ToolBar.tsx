import CheckIcon from '@/components/icons/CheckIcon';
import { AppBar, Toolbar, Typography, Divider, IconButton } from '@mui/material';

interface Props {
  msg: string,
  fn: () => void;
}

export function ToolBar({ msg, fn } : Props) {
  return (
    <AppBar component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton aria-label='more'
         onClick={fn}>
          <CheckIcon />
        </IconButton>
        <Divider />
        <Typography variant="h6" component="div">
          {msg}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
