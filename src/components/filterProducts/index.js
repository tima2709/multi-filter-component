import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import * as React from 'react';
import {Button, Input, Typography} from "@mui/joy";
import {useDispatch} from "react-redux";
import {getProducts} from "../../redux/actions/productAction";




export default function FilterProducts() {
    const [value, setValue] = React.useState([20, 1000]);
    const [title, setTitle] = React.useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(getProducts(value))
    };

    const dispatch = useDispatch()


    const handleChange1 = (e) => {
        setValue([Number(e.target.value), value[1]])
        dispatch(getProducts(value, title))
    };
    const handleChange2 = (e) => {
        setValue([value[0], Number(e.target.value)])
        dispatch(getProducts(value, title))
    };

    console.log(value, 'value')

    const handleSearch = () => {
        dispatch(getProducts(value, title))
        setTitle('')
    }


    return (
        <Box
            className={'col-4'}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                    flexDirection: 'column',
                    // width: '100%'
                }}
                className={'filter'}
            >
                <Box>
                    <Input
                        placeholder='search by title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </Box>
                <Box>
                    <Typography sx={{padding: '0 0 10px 7px'}}>От</Typography>
                    <Input
                        placeholder="Type in here…"
                        value={value[0]}
                        onChange={(e) => handleChange1(e)}
                        // variant="soft"
                    />
                </Box>
                <Box>
                    <Typography sx={{padding: '0 0 10px 7px'}}>До</Typography>
                    <Input
                        placeholder="Type in here…"
                        value={value[1]}
                        onChange={(e) => handleChange2(e)}
                        // variant="soft"
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </Box>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valueText}
                    max={1000}
                    sx={{marginTop: '5px'}}
                />
            </Box>

        </Box>
    );
}