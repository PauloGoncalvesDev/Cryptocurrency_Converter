import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { Menu, MenuItem } from "@mui/material";
import "./menuformitem.css";

const options: IOptionsMenu[] = [
  {
    name: "Projeto",
    link: "https://github.com/PauloGoncalvesDev/Cryptocurrency_Converter",
  },
  {
    name: "API CoinGecko",
    link: "https://www.coingecko.com/pt/api",
  },
];

function MenuFormItem() {
  const [openMenu, setOpenMenu] = React.useState<Element | null>(null);
  const open: boolean = Boolean(openMenu);

  const handleClick = (event: React.MouseEvent<Element>) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <MenuRoundedIcon
        id="menu-item"
        fontSize="large"
        aria-label="more"
        aria-controls={open ? "menu-item" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="long-menu"
        MenuListProps={{ "aria-labelledby": "menu-item" }}
        anchorEl={openMenu}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={index}>
            <a href={option.link} target="_blank">
              {option.name} <LaunchRoundedIcon style={{ fontSize: "15px" }} />
            </a>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuFormItem;
