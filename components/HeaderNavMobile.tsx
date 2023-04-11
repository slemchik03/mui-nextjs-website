import { FC, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button, { ButtonProps } from "@mui/material/Button";
import Popover, { PopoverProps } from "@mui/material/Popover";
import { Stack } from "@mui/system";
import { styled } from "@mui/material";
import useNavMobile from "@/utils/hooks/useNavMobile";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import navigationLinksInfo from "@/utils/navigationLinksInfo";

const HeaderNavPopover = styled((props: PopoverProps) => (
  <Popover {...props} />
))(() => ({
  "& .MuiPaper-root": {
    background: "#39254D",
  },
}));

interface HeaderNavButtonProps extends ButtonProps {
  isActive: boolean;
  href: string;
}

const HeaderNavButton = styled(
  ({ isActive, href, children, ...props }: HeaderNavButtonProps) => (
    <Button
      sx={{
        color: "white",
        bgcolor: !isActive ? "transparent" : "#541B54",
      }}
      {...props}
      children={
        <Link style={{ color: "white", textDecoration: "none" }} href={href}>
          {children}
        </Link>
      }
    />
  )
)(() => ({}));

interface IProps {
  handleChange: (newPos: number) => void;
}

const HeaderNavMobile: FC<IProps> = ({ handleChange }) => {
  const { open, anchorEl, handleClose, handleOpenCloseClick } = useNavMobile();
  const path = usePathname();

  const handleChangeRoute = useCallback((position: number) => {
    handleClose();
    handleChange(position);
  }, []);

  return (
    <>
      <Button aria-describedby="button-popup" onClick={handleOpenCloseClick}>
        <MenuIcon sx={{ width: "30px", height: "30px", color: "gray" }} />
      </Button>
      <HeaderNavPopover
        id={"button-popup"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack direction="column">
          {navigationLinksInfo.map(({ href, label }, idx) => (
            <HeaderNavButton
              key={idx}
              isActive={path === href}
              href={href}
              onClick={() => handleChangeRoute(idx)}
            >
              {label}
            </HeaderNavButton>
          ))}
        </Stack>
      </HeaderNavPopover>
    </>
  );
};

export default HeaderNavMobile;