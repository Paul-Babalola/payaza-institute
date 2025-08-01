import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba(31, 2, 46, 0.54)",
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  padding: "24px 0",
  height: "88px",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: "16px 0",
    height: "72px",
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 120px",
  minHeight: "auto",
  gap: "120px",
  "@media (max-width: 1200px)": {
    padding: "0 60px",
    gap: "80px",
  },
  "@media (max-width: 768px)": {
    padding: "0 24px",
    gap: "40px",
  },
});

const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "316px",
  flexShrink: 0,
  "@media (max-width: 768px)": {
    width: "auto",
  },
});

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavLink = styled(Button)({
  color: "#FFF",
  fontFamily: "Roobert, -apple-system, Roboto, Helvetica, sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16px",
  textTransform: "none",
  padding: "8px 0",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#80FF72",
  },
});

const SignInContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "316px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "10px",
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    width: "auto",
  },
}));

const SignInButton = styled(Button)({
  display: "flex",
  height: "40px",
  padding: "16px",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "8px",
  borderRadius: "96px",
  border: "1px solid #80FF72",
  color: "#80FF72",
  fontFamily: "Roobert, -apple-system, Roboto, Helvetica, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(128, 255, 114, 0.1)",
    borderColor: "#80FF72",
  },
});

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#FFF",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const MobileDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    backgroundColor: "rgba(31, 2, 46, 0.95)",
    backdropFilter: "blur(10px)",
    width: 280,
    padding: "20px",
  },
});

const PayazaLogo = () => (
  <svg
    width="130"
    height="32"
    viewBox="0 0 130 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.2988 14.4376C37.2988 13.0663 37.6416 11.8006 38.3272 10.6403C39.0392 9.48002 40.0149 8.54388 41.2543 7.83189C42.4673 7.17264 43.7595 6.84302 45.1307 6.84302C46.5283 6.84302 47.8336 7.18583 49.0466 7.87145C50.2597 8.58344 51.2354 9.54594 51.9737 10.759C52.6593 11.972 53.0021 13.2773 53.0021 14.6749C53.0021 16.0989 52.6462 17.4174 51.9342 18.6304C51.2222 19.8171 50.2728 20.7664 49.0862 21.4784C47.8995 22.1904 46.581 22.5464 45.1307 22.5464C43.4694 22.5464 41.9531 22.0453 40.5819 21.0433V26.3436C40.3841 26.6205 40.0281 27.1743 39.3557 27.5698C38.4855 28.0841 37.6548 28.0841 37.2988 28.0841C37.2988 23.5484 37.2988 18.9996 37.2988 14.4376ZM41.1752 16.9691C41.5971 17.6547 42.1509 18.2085 42.8365 18.6304C43.5221 19.0523 44.2869 19.2633 45.1307 19.2633C45.9482 19.2633 46.7129 19.0523 47.4249 18.6304C48.1369 18.2085 48.7039 17.6547 49.1258 16.9691C49.5213 16.2835 49.7191 15.5188 49.7191 14.6749C49.7191 13.8574 49.5081 13.1059 49.0862 12.4203C48.6906 11.7083 48.1369 11.1413 47.4249 10.7194C46.7393 10.2975 45.9745 10.0865 45.1307 10.0865C44.3396 10.0865 43.5881 10.2975 42.8761 10.7194C42.1641 11.1413 41.6103 11.6951 41.2148 12.3807C40.7929 13.0663 40.5819 13.8311 40.5819 14.6749C40.5819 15.4924 40.7796 16.2571 41.1752 16.9691Z"
      fill="white"
    />
    <path
      d="M84.5274 6.84302V15.6242C84.5274 17.0087 84.211 18.1953 83.5386 19.2633C82.8529 20.3181 81.9563 21.1356 80.8488 21.7157C80.295 22.0058 79.7149 22.2167 79.1084 22.3486V28.0841H78.0799C76.8537 28.0841 75.8649 27.0952 75.8649 25.869V22.4277C75.1529 22.2695 74.4805 22.0321 73.8476 21.7157C72.74 21.1356 71.8434 20.3181 71.1578 19.2633C70.4854 18.1953 70.1689 17.0087 70.1689 15.6242V6.84302H71.3556C72.5027 6.84302 73.4124 7.75279 73.4124 8.86033V15.6242C73.4124 16.7713 73.808 17.6415 74.5595 18.314C75.1397 18.7886 75.7989 19.0919 76.5373 19.2237C76.5637 19.2237 76.5901 19.2237 76.6164 19.2237C76.7219 19.2501 76.8405 19.2633 76.9724 19.2633C76.9988 19.2633 77.0383 19.2633 77.0911 19.2633C77.1702 19.2633 77.2361 19.2633 77.2888 19.2633H77.4075C77.4866 19.2633 77.5657 19.2633 77.6449 19.2633C77.6844 19.2633 77.7239 19.2633 77.7239 19.2633C77.8558 19.2633 77.9876 19.2501 78.1195 19.2237C78.225 19.1974 78.3436 19.171 78.4755 19.1446C79.0688 18.9864 79.6621 18.7095 80.1368 18.314C80.9279 17.6415 81.2839 16.7713 81.2839 15.6242V8.93944C81.2839 7.75279 82.2332 6.84302 83.4199 6.84302H84.5274Z"
      fill="white"
    />
    <path
      d="M77.0911 19.2634C77.1702 19.2898 77.2624 19.303 77.3679 19.303H77.2888C77.2361 19.303 77.1702 19.2898 77.0911 19.2634Z"
      fill="white"
    />
    <path
      d="M78.5152 22.4673C78.5152 22.4673 78.5152 22.4805 78.5152 22.5068C78.4097 22.5068 78.3174 22.5068 78.2383 22.5068C78.3174 22.5068 78.4097 22.4937 78.5152 22.4673Z"
      fill="white"
    />
    <path
      d="M77.3684 19.303C77.4475 19.303 77.5398 19.2898 77.6453 19.2634C77.5662 19.2898 77.4871 19.303 77.408 19.303H77.3684Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.7384 21.0433C96.3408 22.0454 94.8113 22.5464 93.15 22.5464C91.7524 22.5464 90.4471 22.1904 89.2341 21.4784C88.021 20.7664 87.0717 19.8039 86.3861 18.5909C85.6478 17.4043 85.2786 16.099 85.2786 14.675C85.2786 13.2774 85.6346 11.972 86.3466 10.759C87.0586 9.546 88.021 8.5835 89.2341 7.87151C90.6053 7.08041 92.1216 6.7376 93.7829 6.84308C94.7718 6.92219 95.7607 7.19907 96.6704 7.63418C98.068 8.34617 99.1624 9.34823 99.9535 10.6404C100.666 11.8006 101.021 13.0664 101.021 14.4376L100.982 19.8962C100.982 21.3202 99.8348 22.4673 98.4109 22.4673H97.7384V21.0433ZM97.1847 12.4995C96.7627 11.7347 96.1826 11.1282 95.4442 10.6799C94.7322 10.258 93.9411 10.0602 93.0709 10.0866C92.3589 10.0866 91.6469 10.2844 91.014 10.6404C90.2493 11.0623 89.6428 11.6292 89.1945 12.3412C88.7726 13.0532 88.5616 13.8443 88.5616 14.7145C88.5616 15.4265 88.7594 16.1385 89.1154 16.8109C89.5373 17.5757 90.1175 18.169 90.8559 18.5909C91.5678 19.0392 92.3589 19.2502 93.2292 19.2238C93.9411 19.2238 94.6531 19.026 95.286 18.67C96.0507 18.2481 96.6572 17.668 97.1055 16.9296C97.5538 16.2176 97.7648 15.4265 97.7384 14.5563C97.6988 13.8443 97.5407 13.1323 97.1847 12.4995Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M126.574 21.0433C125.176 22.0454 123.647 22.5464 121.986 22.5464C120.588 22.5464 119.283 22.1904 118.07 21.4784C116.857 20.7664 115.907 19.8039 115.222 18.5909C114.51 17.4043 114.154 16.099 114.154 14.675C114.154 13.2774 114.497 11.972 115.182 10.759C115.894 9.546 116.857 8.5835 118.07 7.87151C119.467 7.08041 120.984 6.7376 122.619 6.84308C123.647 6.92219 124.636 7.19907 125.506 7.63418C126.904 8.34617 127.998 9.34823 128.789 10.6404C129.501 11.8006 129.857 13.0664 129.857 14.4376L129.818 19.8962C129.818 21.3202 128.671 22.4673 127.247 22.4673H126.574V21.0433ZM126.02 12.4995C125.598 11.7347 125.018 11.1282 124.28 10.6799C123.568 10.258 122.777 10.0602 121.907 10.0866C121.195 10.0866 120.483 10.2844 119.85 10.6404C119.085 11.0623 118.492 11.6292 118.07 12.3412C117.621 13.0532 117.411 13.8443 117.437 14.7145C117.437 15.4265 117.595 16.1385 117.951 16.8109C118.373 17.5757 118.953 18.169 119.692 18.5909C120.404 19.0392 121.195 19.2502 122.065 19.2238C122.816 19.2238 123.528 19.026 124.161 18.67C124.926 18.2481 125.532 17.668 125.981 16.9296C126.403 16.2176 126.6 15.4265 126.574 14.5563C126.574 13.8443 126.376 13.1323 126.02 12.4995Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M66.1744 21.0433C64.7768 22.0454 63.2474 22.5464 61.5861 22.5464C60.1621 22.5464 58.8568 22.1904 57.6701 21.4784C56.4571 20.7664 55.4946 19.8039 54.7826 18.5909C54.0706 17.4043 53.7146 16.099 53.7146 14.675C53.7146 13.2774 54.0706 11.972 54.7826 10.759C55.4946 9.546 56.4571 8.5835 57.6701 7.87151C59.0413 7.08041 60.5576 6.7376 62.2189 6.84308C63.2078 6.92219 64.1966 7.19907 65.1064 7.63418C66.4777 8.34617 67.5589 9.34823 68.35 10.6404C69.0883 11.8006 69.4575 13.0664 69.4575 14.4376L69.4179 19.8962C69.4179 21.3202 68.2708 22.4673 66.8468 22.4673H66.1744V21.0433ZM65.6206 12.4995C65.1987 11.7347 64.6186 11.1282 63.8802 10.6799C63.1682 10.258 62.3771 10.0602 61.5069 10.0866C60.7949 10.0866 60.0434 10.2844 59.4501 10.6404C58.6853 11.0623 58.0788 11.6292 57.6306 12.3412C57.2086 13.0532 56.9976 13.8443 56.9976 14.7145C56.9976 15.4265 57.1954 16.1385 57.5514 16.8109C57.9733 17.5757 58.5535 18.169 59.2918 18.5909C59.9775 19.0392 60.7686 19.2502 61.6651 19.2238C62.3771 19.2238 63.0891 19.026 63.722 18.67C64.4867 18.2481 65.0933 17.668 65.5416 16.9296C65.9635 16.2176 66.1744 15.4265 66.1744 14.5563C66.1349 13.8443 65.9371 13.1323 65.6206 12.4995Z"
      fill="white"
    />
    <path
      d="M109.842 9.33499V10.2052H105.491C103.751 10.2052 102.327 8.78121 102.327 7.04079C102.327 6.92213 102.446 6.84302 102.525 6.84302H114.154C114.273 6.84302 114.352 6.92213 114.352 7.04079V8.06923C114.352 8.74166 114.114 9.37454 113.758 9.88876L106.124 19.8962V19.0655H111.543C113.244 19.0655 114.629 20.4499 114.629 22.1508V22.309C114.629 22.4277 114.549 22.5068 114.431 22.5068H102.09C101.971 22.5068 101.892 22.4277 101.892 22.309V21.1224C101.892 20.2522 102.169 19.4611 102.643 18.7886L109.842 9.33499Z"
      fill="white"
    />
    <path
      d="M15.9802 32C7.15947 32 0 24.8405 0 15.9802C0 7.15945 7.15947 0 15.9802 0C24.8406 0 32 7.15945 32 15.9802C32 24.8405 24.8406 32 15.9802 32Z"
      fill="#8CFF73"
    />
    <path
      d="M25.9483 26.1854C25.3945 22.9023 24.2079 20.9245 22.3093 20.0939C19.6986 18.9468 16.6529 20.4103 13.6467 21.8343C12.9743 22.1508 11.8667 22.665 10.9174 23.021C10.4032 23.2583 9.88897 22.665 10.1263 22.1508C11.1152 20.2126 13.1325 17.2459 15.6245 14.6353C17.4044 12.8158 19.4218 11.2336 21.6764 9.88871V16.0197C21.7159 17.1273 22.6257 18.037 23.7332 18.037H24.5639C24.9199 18.037 25.1968 17.7602 25.1968 17.4042L25.1572 5.61676C25.1572 5.26076 24.8408 4.98389 24.4848 4.98389H12.025C11.669 4.98389 11.3921 5.26076 11.3921 5.61676V6.21008C11.3921 7.47584 12.381 8.46472 13.6072 8.46472H17.4836C15.9014 9.59863 14.451 10.8512 13.1325 12.2224C11.1943 14.2002 9.21655 16.7713 7.87168 19.0655C6.60592 21.1619 5.14237 24.1681 6.76412 25.9085C6.92234 26.1063 7.12016 26.2645 7.39704 26.4227C9.57257 27.6489 12.3019 26.3436 15.1498 24.9592C17.2067 24.0098 19.7777 22.7836 20.9248 23.2979C21.4786 23.5352 21.9137 24.2867 22.2302 25.5129C22.3488 25.9085 22.507 26.1854 22.7839 26.4623C23.2981 26.9369 23.9706 27.016 24.4848 27.016C24.8012 26.9897 25.1045 26.9501 25.3946 26.8974C25.7506 26.8578 25.9879 26.5414 25.9483 26.1854Z"
      fill="#440066"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20.5V19.75C20 17.4028 18.0972 15.5 15.75 15.5H8.25C5.90279 15.5 4 17.4028 4 19.75V20.5"
      stroke="#80FF72"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="7.5"
      r="4"
      stroke="#80FF72"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PayazaHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigationItems = [
    { label: "About Us", href: "/about" },
    { label: "Tracks", href: "/tracks" },
    { label: "How it works", href: "/how-it-works" },
    { label: "FAQs", href: "/faq" },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Container maxWidth={false} disableGutters>
          <StyledToolbar>
            {/* Logo Section */}
            <LogoContainer>
              <PayazaLogo />
            </LogoContainer>

            {/* Desktop Navigation */}
            <NavigationContainer>
              {navigationItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </NavigationContainer>

            {/* Desktop Sign In & Mobile Menu Button */}
            <SignInContainer>
              {!isMobile ? (
                <SignInButton startIcon={<UserIcon />}>Sign In</SignInButton>
              ) : (
                <MobileMenuButton
                  onClick={handleMobileMenuToggle}
                  aria-label="menu"
                >
                  <MenuIcon />
                </MobileMenuButton>
              )}
            </SignInContainer>
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <MobileDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={handleMobileMenuClose} sx={{ color: "#FFF" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.label} sx={{ px: 0 }}>
              <ListItemText>
                <NavLink
                  href={item.href}
                  sx={{ width: "100%", justifyContent: "flex-start" }}
                >
                  {item.label}
                </NavLink>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 4 }}>
          <SignInButton startIcon={<UserIcon />} fullWidth>
            Sign In
          </SignInButton>
        </Box>
      </MobileDrawer>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <Box sx={{ height: { xs: "72px", md: "88px" } }} />
    </>
  );
};

export default PayazaHeader;
