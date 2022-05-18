import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
      <AppBar position='sticky' elevation={ 0 }>
          <Toolbar>
              <IconButton size='large' edge='start'>
                <MenuOutlinedIcon />
              </IconButton>

              <NextLink href={"/"} passHref>
                  <Link>
                    <Typography variant='h6' color='white'>CookieMaster</Typography>
                  </Link>
              </NextLink>

              <div style={{ flex: 1}} />
              <NextLink href={"/about"} passHref>
                  <Link>
                    <Typography variant='h6' color='white'>Sobre esto</Typography>
                  </Link>
              </NextLink>
              <div style={{ marginRight: 16}} />

              <NextLink href={"/theme-changer"} passHref>
                  <Link>
                    <Typography variant='h6' color='white'>Cambiar Thema</Typography>
                  </Link>
              </NextLink>

          </Toolbar>
      </AppBar>
  )
}
