import React from 'react';
import { makeStyles } from '@mui/styles';

import { ImageList, ImageListItem } from '@mui/material';
// import ImageList from '@material-ui/core/ImageList';
// import { ImageListItem } from '@material-ui/core';

/*
    Wrap scrollbar in div for styling
    Scrollbar props:
        func: callback function to set the selected item
        data: array of items, ex Glasses, colors, earrings, if item.name is set then name will be displayed
        pics: array of corresponding images to display for each item in data
        cols: number of pics displayed at once

*/
export default function ProductScroll(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper
        },
        imageList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)'

            //height: props.height
        },
        title: {
            color: theme.palette.primary.light
        },
        titleBar: {
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
        },
        item: {
            display: 'block',
            height: '100%',
            cursor: 'pointer'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={props.cols} rowHeight={props.height}>
                {props.data.map((item, index) => (
                    <ImageListItem key={index} className={classes.item}>
                        <img src={item.src} height={20} onClick={() => props.itemSelected(item)} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
