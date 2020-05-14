import { Grid } from '@material-ui/core';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import React from 'react';
import IAd from '../interfaces/IAd';

const styles = (theme: Theme) => createStyles({});

interface IAdvertisementListProps extends WithStyles<typeof styles> {
  ads: IAd[];
}

class AdvertisementList extends React.Component<IAdvertisementListProps> {
  public render(): JSX.Element[] {
    const { ads } = this.props;

    return ads.map((ad: IAd) => (
      <Grid spacing={2} container>
        <Grid xs={12} md={4} lg={2} component={Link} to="#" item>
          <img src={ad.img} alt={ad.title} style={{ objectFit: 'cover', width: '100%', height: 105 }} />
        </Grid>
        <Grid xs={12} md={6} lg={7} direction="column" container item>
          <Typography component="h2" variant="h5">
            {ad.title}
          </Typography>
          <Typography component="h2" variant="subtitle1" color="textSecondary">
            {ad.genus}
          </Typography>
          <Typography component="p" variant="body1">
            {ad.description}
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={1}>
          <Typography component="p" variant="subtitle1">
            {ad.fix ? `${ad.price} €` : `${ad.price} € VB`}
          </Typography>
          <Typography component="p" variant="body1">
            {ad.zip}
          </Typography>
          <Typography component="p" variant="body1">
            {ad.town}
          </Typography>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Typography component="p" variant="body1" color="textSecondary">
            {ad.time}
          </Typography>
        </Grid>
      </Grid>
    ));
  }
}

export default withStyles(styles)(AdvertisementList);
