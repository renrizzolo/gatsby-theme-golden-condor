import React from "react";
import { Label, Box } from "theme-ui";

const GUTTER = 2;
const SIZE = 18;

const Switch = function Switch({
  className,
  label,
  sx,
  variant = "switch",
  labelProps,
  labelSx,
  checkedSx,
  onChange,
  ...props
}) {
  const inputRef = React.useRef();
  const callbackRef = React.useRef();

  React.useEffect(() => {
    callbackRef.current = onChange;
  }, [onChange]);

  const onKeyPress = React.useCallback(
    (e) => {
      console.log(e);
      if (e.keyCode === 13 && e.target === inputRef.current) {
        e.preventDefault();
        inputRef.current.checked = !inputRef.current.checked;
        callbackRef && callbackRef.current();
      }
    },
    [callbackRef]
  );

  React.useEffect(() => {
    if (inputRef.current) {
      window.addEventListener("keypress", onKeyPress);
    }
    return () => window.removeEventListener("keypress", onKeyPress);
  }, [onKeyPress]);

  return (
    <Label
      sx={{
        cursor: "pointer",
        borderRadius: SIZE,
        "&:focus-within": {
          outline: "2px solid",
        },
        ...labelSx,
      }}
      {...labelProps}
    >
      <Box
        ref={inputRef}
        as="input"
        type="checkbox"
        themeKey="forms"
        onChange={onChange}
        {...props}
        sx={{
          position: "absolute",
          opacity: 0,
          zIndex: -1,
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      />
      <Box
        themeKey="forms"
        variant={variant}
        className={className}
        sx={{
          padding: "2px",
          position: "relative",
          bg: "gray",
          borderRadius: SIZE,
          height: SIZE + GUTTER * 2,
          width: SIZE * 2 + GUTTER * 2,
          "input:disabled ~ &": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          "& > div": {
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            height: SIZE,
            width: SIZE,
            bg: "white",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            position: "relative",
            transform: "translateX(0%)",
            transition: `transform 240ms cubic-bezier(0.165, 0.840, 0.440, 1.000)`,
          },
          "input:checked ~ &": {
            bg: "primary",
            "> div": {
              transform: "translateX(100%)",
            },
            ...checkedSx,
          },
          ...sx,
        }}
      >
        <Box />
      </Box>
      <span>{label}</span>
    </Label>
  );
};

export default Switch;
