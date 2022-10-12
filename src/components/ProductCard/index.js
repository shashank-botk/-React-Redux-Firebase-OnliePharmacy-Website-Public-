import React, { useEffect }from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../forms/Button';
import { addProduct } from '../../redux/Cart/cart.actions';
import { fetchProductStart,  setProduct } from '../../redux/Products/products.actions';
import './styles.scss';


const mapState = state => ({
    product: state.productsData.product
});

const ProductCard = ({}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const  { productID } = useParams();
    const { product } = useSelector(mapState);

    const {
        productThumbnail,
        productName,
        productPrice,
        productDesc,

     } = product;

    useEffect(() => {
        dispatch(
            fetchProductStart(productID)
        )

        return () => {
            dispatch(
                setProduct({})
            )
        }

    }, []);

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
        history.push('/cart');
    }
    
    const  configAddToCartBtn = {
        type: 'button'
    }

    return (
        <div className = "productCard">
            <div className= "hero">
                <img src = {productThumbnail} />
            </div>
            <div className= "productDetails">
                <ul>
                <li>
                        <span 
                        className="desc"
                        dangerouslySetInnerHTML={{ __html: productDesc}}  />
                </li >
                <li>
                    <li>
                        <h1 className="product__name">
                            {productName}
                        </h1>
                    </li>
                    <li>
                         <span className="price">
                            Rs: {productPrice}
                         </span>
                    </li>
                    <li>
                        <div className="addToCart">
                            <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </li>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;
