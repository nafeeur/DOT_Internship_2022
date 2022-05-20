import Slider from '@mui/material/Slider';


const marks = [
    {
      value: 2010,
      label: '2010',
    },
    {
      value: 2015,
      label: '2015',
    },
    {
      value: 2020,
      label: '2020',
    },
    {
      value: 2022,
      label: '2022',
    },
  ];



  function valuetext(value) {
    return {value};
  }
  

export default function slider(){


return(

    <Slider
    aria-label="Custom marks"
    defaultValue={20}
    getAriaValueText={valuetext}
    step={10}
    valueLabelDisplay="auto"
    marks={marks}
  />

)


}