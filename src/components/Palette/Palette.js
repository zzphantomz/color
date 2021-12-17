import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./PaletteStyles";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors, paletteName, emoji, id } = props.palette;
  const { classes } = props;

  const changeLevel = (val) => {
    setLevel(val);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };

  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.colors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

//export default Palette
export default withStyles(styles)(Palette);
