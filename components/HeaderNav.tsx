import React, { FC, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationLinksInfo from "@/utils/navigationLinksInfo";

const StyledTabs = styled((props: TabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
  },
  "& .MuiTabs-indicatorSpan": {
    height: "100%",
    width: "100%",
    background: "#402166",
    borderRadius: "10px",
    zIndex: "2",
  },
});

interface StyledTabProps extends TabProps {
  label: string;
  href: string;
}

const StyledTab = styled(({ label, href, ...props }: StyledTabProps) => (
  <Tab
    disableRipple
    {...props}
    label={
      <>
        <Link
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          href={href}
          passHref
        ></Link>
        {label}
      </>
    }
  />
))(({ theme }) => ({
  position: "relative",
  textTransform: "none",
  fontWeight: 700,
  fontSize: "16px",
  fontFamily: "'Roboto', sans-serif",
  padding: "0 40px",
  color: "rgba(255, 255, 255, 0.7)",
  marginRight: theme.spacing(5),
  zIndex: "3",
  [theme.breakpoints.down(1250)]: {
    padding: "0 25px",
  },
  [theme.breakpoints.down(1000)]: {
    padding: "0 10px",
  },
  "&.Mui-focusVisible": {},
  "&.Mui-selected": {
    color: "#fff",
    borderRadius: "26px",
  },
}));

interface IProps {
  position: number;
  handleChange: (newPos: number) => void;
}

const HeaderNav: FC<IProps> = ({ position, handleChange }) => {
  const path = usePathname();

  useEffect(() => {
    const currentLink = navigationLinksInfo.find(({ href }) =>
      path === href
    );
    
    if (currentLink) {
      handleChange(navigationLinksInfo.indexOf(currentLink));
    }
  }, []);
  return (
    <>
      <StyledTabs
        value={position}
        onChange={(_, value) => handleChange(value)}
        variant="scrollable"
        scrollButtons={false}
      >

        {navigationLinksInfo.map(({ href, label }, idx) => (
          <StyledTab key={idx} href={href} label={label} />
        ))}
      </StyledTabs>
    </>
  );
};

export default HeaderNav;
