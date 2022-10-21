import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box } from '@mui/material'

export const CarouselC = () => {
    let items = [
        {
            
            image: 'assets/img/amberoud.jpg',
            name: 'amber oud'
        },
        {
            image: 'assets/img/cloud.jpg',
            name: 'cloud '
        },
        {
            image: 'assets/img/safron.jpg',
            name: 'saffron'
        }
    ]

    return (
        <Carousel sx={{ maxWidth:'900px', margin: '0 auto'}}>
            {
                items.map( (item, i)=>  <Item  key={i} item={item} /> )
            }
        </Carousel>
    )
}

export const Item = ({item})=> {
    return (
        <Paper sx={{ backgroundColor:'transparent', borderBottom:'none', paddingBottom:'10px',
            '&.MuiPaper-root':{
                boxShadow:  '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' 
            }
        }} >
            <img src={item.image} alt={item.name} style={{display:'block', width:'580px', maxHeight:'450px', margin: '0 auto 10px'}}/>

            <Button className="CheckButton" variant='contained' sx={{width:{xs:'100%', sm: 'auto'}, maxWidth:'400px', backgroundColor:'secondary.main', 
            color: '#fff', display:'block', margin:'0 auto 5px', borderRadius:{xs:'0'}, 
            '&:hover':{
                color:'#26290289', border: '2px solid #26290289'
            }}}>
                La quiero!
            </Button>
        </Paper>
    )
}
