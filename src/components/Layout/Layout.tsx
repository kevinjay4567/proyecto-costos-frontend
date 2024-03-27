import { ReactNode, useState } from 'react';
import { ToolBar, SideBar } from '@/components/Layout/components';
import { Box, Toolbar } from '@mui/material';

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
