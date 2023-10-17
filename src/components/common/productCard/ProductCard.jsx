import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Link} from "react-router-dom";
const ProductCard = ({item}) => {
  
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title= {`image ${item.title}`}
      />
      <CardContent sx={{height:2}}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.precio} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
        <Button sx={{mt:18, width:1}} size="large" variant="outlined">Ver detalle
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
  


export default ProductCard;