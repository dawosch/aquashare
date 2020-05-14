import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import AdvertisementList from '../components/AdvertisementList';

const ads = [
  {
    id: 1,
    img: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/gyIAAOSwcwReu~2g/$_59.JPG',
    title: 'Welse Pangasius sutchi',
    description: 'Hallo verkaufe vier schöne gesunde und sehr aktive hai Welse Pangasius sutchi 2x ca 30+cm 1x 22cm...',
    genus: 'Fischus Maximus',
    price: 60,
    fix: false,
    zip: '12345',
    town: 'Köln',
    time: 'Heute: 10:00',
  },
  {
    id: 2,
    img: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/gX4AAOSwAwFevOc9/$_35.JPG',
    title: 'Aquarium Pflanzen komplett',
    description: 'Bei Interesse einfach melden',
    genus: 'Pflanzus Maximus',
    price: 10,
    fix: true,
    zip: '12345',
    town: 'Köln',
    time: 'Heute: 12:00',
  },
];

const styles = createStyles({
  root: {
    display: 'flex',
  },
  cover: {
    width: 150,
  },
});

interface IOverviewProps extends WithStyles<typeof styles> {}

class Overview extends React.Component<IOverviewProps> {
  public render(): JSX.Element {
    return (
      <Fragment>
        <AdvertisementList ads={ads} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(Overview);
