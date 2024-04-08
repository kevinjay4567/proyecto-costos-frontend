import { ReactNode, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { SideBar, ToolBar } from '@/components';

interface Props {
  children : ReactNode,
  title: string
}

export const Layout = ({children, title}: Props) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <div>
        <ToolBar msg={title} fn={handleOpen} />
        <SideBar barStatus={open} />
      </div>
      <Box component="main" paddingTop={2}>
        <Toolbar />
        {children}
      </Box>
    </>
  );
};
