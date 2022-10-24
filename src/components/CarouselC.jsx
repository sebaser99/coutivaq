import Carousel from 'react-material-ui-carousel'
import { Paper, Button} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';


export const CarouselC = () => {
    const matches = useMediaQuery('(min-width:600px)');
    let items = [
        {
            
            image: 'https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666635989/amber_quzzod.jpg',
            name: 'amber oud'
        },
        {
            image: 'https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666631701/cloud_ne1xlz.jpg',
            name: 'cloud '
        },
        {
            image: 'https://res.cloudinary.com/react-journal-sebaser/image/upload/v1666631701/safron_eppksa.jpg',
            name: 'saffron'
        }
    ]

    return (
        <Carousel sx={{ maxWidth:'900px', margin: '0 auto'}}
            navButtonsAlwaysVisible
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                }
            }}
           height={matches ? 500 : 400}
           indicatorIconButtonProps={{
            style: {
                padding: ' 0 5px',    // 1
               
                }
            }}
            indicatorContainerProps={{
            style: {
                marginTop: '5px', // 5
                
                }

            }}
        >
            {
                items.map( (item, i)=>  <Item  key={i} item={item} /> )
            }
        </Carousel>
    )
}

export const Item = ({item})=> {
    return (
        <Paper sx={{ backgroundColor:'transparent', borderBottom:'none', padding:'10px',
            '&.MuiPaper-root':{
                boxShadow:  '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' 
            }
             
        }} >
            <img src={item.image} alt={item.name} style={{display:'block', width:'580px', maxHeight:'430px', margin: '0 auto 10px'}}/>

            <Button className="CheckButton" variant='contained' sx={{width:{xs:'100%', sm: 'auto'}, maxWidth:'400px', backgroundColor:'secondary.main', 
            color: '#fff', display:'block', margin:'0 auto 5px', borderRadius:{xs:'0'}, 
            '&:hover':{
                color:'#26290289', border: '2px solid #26290289', backgroundColor:'rgba(172,240,192,1)'
            }}}>
                La quiero!
            </Button>
        </Paper>
    )
}
