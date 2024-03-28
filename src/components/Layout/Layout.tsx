import { ReactNode, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { SideBar, ToolBar } from '@/components';

export const Layout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <div>
        <ToolBar msg="Dashboard" fn={handleOpen} />
        <SideBar barStatus={open} />
      </div>
      <Box component="main" paddingTop={2}>
        <Toolbar />
        {children}
      </Box>
    </>
  );
};
