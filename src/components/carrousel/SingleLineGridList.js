import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#fff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)', 
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * 
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 import image1 from '../../assets/img/work01.JPG';
 import image2 from '../../assets/img/work02.JPG';
 import image3 from '../../assets/img/work03.JPG';
 import image4 from '../../assets/img/work04.JPG';
 import image5 from '../../assets/img/work05.JPG';
 import image6 from '../../assets/img/work06.JPG';
 import image7 from '../../assets/img/work07.JPG';
 import image8 from '../../assets/img/work08.JPG';
 import image9 from '../../assets/img/work09.JPG';
 import image10 from '../../assets/img/work10.JPG';
 import image11 from '../../assets/img/work11.JPG';
 import image12 from '../../assets/img/work12.JPG';
 import image13 from '../../assets/img/work13.JPG';
 import image14 from '../../assets/img/work14.JPG';
 import image15 from '../../assets/img/work15.JPG';
 import image16 from '../../assets/img/work16.JPG';

 const tileData = [
    {
        img: image1,
        title: 'First Reef',
        author: 'Carlos SJM'
    },
    {
        img: image2,
        title: 'Nemo at home',
        author: 'Carlos SJM'
    },
    {
        img: image3,
        title: 'Lps Reef',
        author: 'Carlos SJM'
    },
    {
        img: image4,
        title: 'Aquapaludarium',
        author: 'Carlos SJM'
    },
    {
        img: image5,
        title: 'Montiphora Rainbow',
        author: 'Carlos SJM'
    },
    {
        img: image6,
        title: 'My reef',
        author: 'Carlos SJM'
    },
    {
        img: image7,
        title: 'Breeded betta',
        author: 'Carlos SJM'
    },
    {
        img: image8,
        title: 'Fresh Water Aquascaping',
        author: 'Carlos SJM'
    },
    {
        img: image9,
        title: 'Aquapaludarium',
        author: 'Carlos SJM'
    },
    {
        img: image10,
        title: 'Lps coral',
        author: 'Carlos SJM'
    },
    {
        img: image11,
        title: 'My reef again',
        author: 'Carlos SJM'
    },
    {
        img: image12,
        title: 'Amazonas',
        author: 'Carlos SJM'
    },
    {
        img: image13,
        title: 'Goby cave',
        author: 'Carlos SJM'
    },
    {
        img: image14,
        title: 'Estanque indoor',
        author: 'Carlos SJM'
    },
    {
        img: image15,
        title: 'Large reef',
        author: 'Carlos SJM'
    },
    {
        img: image16,
        title: 'Office Reef',
        author: 'Carlos SJM'
    },
 ]


function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default SingleLineGridList;
