import React from 'react';
import Button from '@material-ui/core/Button';
import {useSnackbar,SnackbarProvider } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const variant = 'success';
    enqueueSnackbar('This is a success message!',{variant});
     
  }, [])

 
  return (
    <>
    </>
  );
}
export default function IntegrationNotistack() {
    return (
      <SnackbarProvider maxSnack={2}>
        <MyApp />
      </SnackbarProvider>
    );
  }