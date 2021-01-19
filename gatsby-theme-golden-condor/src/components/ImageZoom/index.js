import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import "react-medium-image-zoom/dist/styles.css";
import { ThemeContext } from "@emotion/react";

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
  console.log(props);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom
      wrapElement={ZoomWrapper}
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
      zoomMargin={theme.space[4]}
      overlayBgColorEnd={theme.colors.gray[2]}
    >
      <img
        {...props}
        className={`${className} Image__Zoom`}
        // style={{
        //   display: "block",
        //   margin: "0 auto",
        //   width: "100%",
        //   borderRadius: isZoomed ? "5px" : "0px",
        // }}
      />
    </ControlledZoom>
  );
};

export default ImageZoom;
