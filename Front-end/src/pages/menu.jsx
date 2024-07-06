import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import menuImage from '../assets/menuImage.jpg';
import spicyTunaMaki from '../assets/spicyTunaMaki.jpg';
// import mangoMaki from '../assets/mango_maki.jpg';
// import salmonMaki from '../assets/salmon_maki.jpg';
// import tunaMaki from '../assets/tuna_maki.jpg';
// import volcanoDelight from '../assets/volcano_delight.jpg';
// import rainbowFusion from '../assets/rainbow_fusion.jpg';
// import dragonElegance from '../assets/dragon_elegance.jpg';
// import sunsetSerenity from '../assets/sunset_serenity.jpg';
// import mysticGarden from '../assets/mystic_garden.jpg';
// import oceanBreeze from '../assets/ocean_breeze.jpg';
// import tokyoBlossom from '../assets/tokyo_blossom.jpg';
// import sunriseBliss from '../assets/sunrise_bliss.jpg';
// import mangoTangoFusion from '../assets/mango_tango_fusion.jpg';
// import truffleIndulgence from '../assets/truffle_indulgence.jpg';
// import pacificFirecracker from '../assets/pacific_firecracker.jpg';
// import eternalEelEnchantment from '../assets/eternal_eel_enchantment.jpg';

const Root = styled(Container)(({ theme }) => ({
  backgroundColor: '#111',
  color: '#fff',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: "'Playfair Display', serif", // Apply Playfair Display font here
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
}));

const LeftPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  marginRight: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const RightPanel = styled(Box)(({ theme }) => ({
  flex: 2,
}));

const MenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderBottom: '1px solid #333',
}));

const MenuItemImage = styled('img')(({ theme }) => ({
  width: '50px',
  marginRight: '10px',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: '20px',
  marginBottom: '10px',
  fontFamily: "'Playfair Display', serif", // Apply Playfair Display font here
}));

const Footer = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  textAlign: 'center',
  fontFamily: "'Playfair Display', serif", // Apply Playfair Display font here
}));

const menuItems = {
  maki: [
    { name: 'Spicy Tuna Maki', price: '$6', image: spicyTunaMaki},
    { name: 'Mango Maki', price: '$6',  },
    { name: 'Salmon Maki', price: '$5' },
    { name: 'Tuna Maki', price: '$6' },
  ],
  uramaki: [
    { name: 'Volcano Delight', price: '$12', },
    { name: 'Rainbow Fusion', price: '$12',  },
    { name: 'Dragon Elegance', price: '$12', },
    { name: 'Sunset Serenity', price: '$12',  },
    { name: 'Mystic Garden', price: '$12' },
    { name: 'Ocean Breeze', price: '$12',  },
    { name: 'Tokyo Blossom', price: '$12',  },
  ],
  specialRolls: [
    { name: 'Sunrise Bliss', price: '$16',  },
    { name: 'Mango Tango Fusion', price: '$16', },
    { name: 'Truffle Indulgence', price: '$16',  },
    { name: 'Pacific Firecracker', price: '$16' },
    { name: 'Eternal Eel Enchantment', price: '$16'},
  ],
};

const Menu = () => {
  return (
    <Root>
      <MenuContainer>
        <LeftPanel>
          <img src={menuImage} alt="Menu" style={{ width: '100%' }} />
        </LeftPanel>
        <RightPanel>
          <Typography variant="h4" style={{ fontFamily: "'Playfair Display', serif" }}>MAKI</Typography>
          {menuItems.maki.map((item, index) => (
            <MenuItem key={index}>
              <Box display="flex">
                <MenuItemImage src={item.image} alt={item.name} />
                <Typography style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</Typography>
              </Box>
              <Typography>{item.price}</Typography>
            </MenuItem>
          ))}

          <SectionTitle variant="h4">URAMAKI</SectionTitle>
          {menuItems.uramaki.map((item, index) => (
            <MenuItem key={index}>
              <Box display="flex">
                <MenuItemImage src={item.image} alt={item.name} />
                <Typography style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</Typography>
              </Box>
              <Typography>{item.price}</Typography>
            </MenuItem>
          ))}

          <SectionTitle variant="h4">SPECIAL ROLLS</SectionTitle>
          {menuItems.specialRolls.map((item, index) => (
            <MenuItem key={index}>
              <Box display="flex">
                <MenuItemImage src={item.image} alt={item.name} />
                <Typography style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</Typography>
              </Box>
              <Typography>{item.price}</Typography>
            </MenuItem>
          ))}

          <Footer>
            <Typography>By Chef John | License | Sitemap</Typography>
          </Footer>
        </RightPanel>
      </MenuContainer>
    </Root>
  );
};

export default Menu;
