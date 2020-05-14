import { AppBar, IconButton, InputAdornment, InputBase, Toolbar, Typography, Box } from '@material-ui/core';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const styles = createStyles({
  root: {
    color: 'white',
  },
});

interface INavbarProps extends WithStyles<typeof styles> {}

class Navbar extends React.Component<INavbarProps> {
  public render(): JSX.Element {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Box display="flex" flexGrow="1">
            <Typography variant="h6" noWrap>
              Material-UI
            </Typography>
          </Box>

          <InputBase
            className={this.props.classes.root}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
