import React, {Fragment, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {Collapse} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const styles = () => ({
  categoryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 10,
    '&:hover': {
          backgroundColor: '#D6E9C9',
      cursor: 'pointer'
    }
  },
  itemContainer: {
    padding: 10
  },
  itemAndPriceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: "0.5rem"
  },
  textLeft: {
    textAlign: 'left'
  },
  itemAndPriceVertical: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "0.5rem"
  }
})

const MenuSection = ({
  classes,
  type,
  lang
}) => {
  const [expanded, setExpanded] = useState(false);
  const [small, resize] = useState(window.innerWidth <= 700);

  const updateScreenSize = () => {
    resize(window.innerWidth <= 700);
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    console.log("test");
    return () => window.removeEventListener("resize", updateScreenSize);
  })


  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  return (
    <Fragment>
      <div
        onClick={handleExpandClick}
        className={classes.categoryContainer}
      >
        <Typography variant='h2'>{type.label}</Typography>
        {expanded ? <KeyboardArrowUpIcon/>: <KeyboardArrowDownIcon/>}
      </div>
      <Collapse
        className={classes.container}
        in={expanded}
      >
        {type.items.map(item => (
          <div className={classes.itemContainer}>
              <Typography variant={'h5'}>{item.allSmoothiePrices}</Typography>
              <Typography variant={'h5'}>{item.allSaladPrices}</Typography>
              <div className={small? classes.itemAndPriceVertical : classes.itemAndPriceContainer}>
                <Typography variant={'h5'}>{item.id}</Typography>
                <Typography variant={'h5'}>{item.price}</Typography>
              </div>
            <Typography className={classes.textLeft}
                        variant={'subtitle2'}>{item.description[lang]}
            </Typography>
          </div>
        ))}
      </Collapse>
    </Fragment>
  )
}

export default withStyles(styles)(MenuSection);
