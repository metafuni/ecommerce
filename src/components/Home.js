import React, { useState } from 'react';
import Products from './Products';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Home() {

    const classes = useStyles();
    const [sort, setSort] = useState('');
    const handleChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <div>
            <div className={classes.root}>
                <ButtonGroup color="primary" size="small" aria-label="outlined primary button group">
                    <Button>Men Clothing</Button>
                    <Button>Women Clothing</Button>
                    <Button>Jewelry</Button>
                    <Button>Electronics</Button>
                </ButtonGroup>
            </div>

            <div className="selectsorting">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        onChange={handleChange}
                    >
                        <MenuItem value={'price (ascending)'}>price (low to high)</MenuItem>
                        <MenuItem value={'price (descending)'}>price (high to low)</MenuItem>
                    </Select>
                </FormControl>

                <Products />
            </div>
        </div>
    )
};

export default Home;