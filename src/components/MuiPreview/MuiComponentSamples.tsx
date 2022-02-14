import React from "react"
import { Box, Button, Typography } from "@mui/material"
import componentSamples from "./Samples"

const MuiComponentSamples = () => {
  return (
    <Box sx={{
      maxWidth: 1000,
      padding:2,
      margin: "auto",
    }}>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <Box key={id} id={id} sx={{paddingBottom:2}}>
          <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            paddingBottom:2,
          }}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              href={docs}
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Button>
          </Box>
          <Box sx={{
            marginBottom: 10,
            width: "100%",
            maxWidth: 1000,
            paddingLeft: 4,
            margin: "auto",
          }} >
            {component}</Box>
        </Box>
      ))}
    </Box>
  )
}

export default MuiComponentSamples
