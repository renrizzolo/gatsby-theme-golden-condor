import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import "react-medium-image-zoom/dist/styles.css";
import { Box } from "theme-ui";

const ZoomWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ImageZoom = ({ className, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const { theme } = useThemeUI();

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <ControlledZoom
        wrapElement={ZoomWrapper}
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        overlayBgColorEnd={theme.colors.gray[2]}
      >
        <img {...props} className={`${className} Image__Zoom`} />
      </ControlledZoom>
    </Box>
  );
};

export default ImageZoom;
