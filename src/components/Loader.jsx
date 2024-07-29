import React from "react";
import { Box } from "@material-ui/core";

const Loader = () => {

    return(
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100000000 }}
        open={true}
        style={{zIndex:"1"}}>
          <Box pt={10} pb={20}>
             <CircularProgress color="secondary" /> 
          </Box>
     </Backdrop>
    )
  };

  export default Loader;