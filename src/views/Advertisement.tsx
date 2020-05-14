import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import {
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Paper,
  Box,
  Divider,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/MailOutline';

const ad = {
  id: 2,
  img: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/W78AAOSwnaVevS7-/$_59.JPG',
  title: 'Aquarium Pflanzen komplett',
  description: 'Bei Interesse einfach melden',
  genus: 'Pflanzus Maximus',
  price: 10,
  fix: true,
  zip: '12345',
  town: 'Köln',
  time: 'Heute: 12:00',
};

const styles = createStyles({
  paper: {
    padding: 10,
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    marginBottom: 10,
  },
});

interface IAdvertisementProps extends WithStyles<typeof styles> {}

class Advertisement extends React.Component<IAdvertisementProps> {
  public render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid spacing={2} container>
        <Grid xs={12} item>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/">
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={8} item>
          <img className={classes.image} src={ad.img} alt={ad.title} />
          <Paper className={classes.paper} elevation={2}>
            <Typography component="h2" variant="h5">
              {ad.title}
            </Typography>
            <Typography component="h2" variant="h5" color="primary">
              {ad.price} €
            </Typography>
            <Box alignItems="center" display="flex">
              <Box>
                <LocationIcon color="inherit" />
              </Box>
              <Typography component="p" variant="body1" color="textSecondary">
                {ad.zip} {ad.town}
              </Typography>
            </Box>
          </Paper>
          <Paper className={classes.paper} elevation={2}>
            <Typography component="h2" variant="h5">
              Beschreibung
            </Typography>
            <Divider />
            <Typography component="p" variant="body1">
              {ad.description}
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={4} item>
          <Button variant="contained" color="primary" startIcon={<MailIcon />} fullWidth>
            Nachricht schreiben
          </Button>
          <Card className={classes.card}>
            <CardHeader avatar={<Avatar aria-label="recipe">R</Avatar>} title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                belent
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Advertisement);
