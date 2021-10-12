import React, {useState, useEffect} from "react"
import "./singleImage.css"
// import StarRatings from 'react-star-ratings';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ModalCompo from "../../components/Modal";
import CloseIcon from '@material-ui/icons/Close';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import moment from "moment";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import exchange from "../../assets/exchange.png"; 
import delivery from "../../assets/deliveryPerson.jpg"; 
import deliveryService from "../../assets/deliveryService.jpg"; 
import refund from "../../assets/refund.png"; 
import {addItem} from "../../components/LocalStorageItems/Cart";
import {wishListAddItems} from "../../components/LocalStorageItems/Wishlist";
import {withRouter} from "react-router-dom"
import SHOP_DATA from "../Shop/ShopData";
import AlertMessage from "../../components/AlertMessage";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {Avatar} from "@material-ui/core";
import Stack from '@mui/material/Stack';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const ShowSingleImage = (props) => {
    const [showalertwishlist, setShowAlertWishList] = useState(false);
    const [showalertbag, setShowAlertBag] = useState(false);
    const [s, sets] = useState("black");
    const [m, setm] = useState("black");
    const [l, setl] = useState("black");
    const [xl, setxl] = useState("black");
    const [xxl ,setxxl] = useState("black");
    const [pincode, setPincode] = useState("");
    const [showincorrectpincode, setShowIncorrectPincode] = useState(false);
    const [buttonColor, setButtonColor] = useState("grey");
    const [pincodecorrectsymbol, setPinCodeCorrectSymbol] = useState(false);
    const [open, setOpen] = useState(false);
    const [showinfoforexchange, setShowInfoForExchange] = useState(false);
    const [showdetailmodal , setShowDetailModal] = useState(false);
    const [showmore, setShowMore] = useState(false);
    const [productdetails, setProductDetails] = useState([]);
    const [value, setValue] = useState(4);
    const [hover, setHover] = useState(-1);
    const [selectsize, setSelectSize] = useState(false);

    const [bankcolor, setBankColor] = useState({
        HDFC: "grey",
        ICICI : "grey",
        CITY: "grey",
        SBI: "grey",
        KOTAK: "grey",
        AMEX: "grey",
        HSBC: "grey",
        INDUSIND: "grey",
        RBL: "grey"
    });

    const {HDFC,ICICI, CITY, SBI, KOTAK, AMEX, HSBC, INDUSIND, RBL} = bankcolor;

    useEffect(() => {
        const route = props.location;
        const productid = Number(route.pathname.split("/").pop());
        const fetchedProduct = [];
        SHOP_DATA && SHOP_DATA.map(data => {
            data.items.map(result => {
                if(result.id == productid){
                    fetchedProduct.push(result);
                } 
            });
        });
        console.log(fetchedProduct);
        setProductDetails(fetchedProduct);
    }, []);

    const changeColor = (index) => {
        sets("black");
        setm("black");
        setl("black");
        setxl("black");
        setxxl("black");
        if(index === "1"){
            sets("rgb(230, 25, 110)");
        }
        if(index === "2"){
            setm("rgb(230, 25, 110)")
        }
        if(index === "3"){
            setl("rgb(230, 25, 110)");
        }
        if(index === "4"){
            setxl("rgb(230, 25, 110)");
        }
        if(index === "5"){
            setxxl("rgb(230, 25, 110)");
        }
    }

    const createData = (Months, Intrest, MonthlyEMI , OverAllCoast) => {
        return {Months, Intrest, MonthlyEMI , OverAllCoast};
      }

    const rows = [
        createData(3, "12.5% pa (Rs. 27)" , "Rs. 435" , "Rs. 1305"),
        createData(6, "12.5% pa (Rs. 48)" , "Rs. 221" , "Rs. 1326"),
        createData(9, "13.5% pa (Rs. 72)" , "Rs. 150" , "Rs. 1350"),
        createData(12, "13.5% pa (Rs. 90)" , "Rs. 114" , "Rs. 1368"),
        createData(18, "13.5% pa (Rs. 144)" , "Rs. 79" , "Rs. 1422"),
      ];

    const changeBankColor = (name) => {
        setBankColor({ICICI: "grey", CITY: "grey", SBI: "grey", KOTAK: "grey", AMEX: "grey", HSBC: "grey", INDUSIND: "grey", RBL: "grey", HDFC: "grey"});
        const colorName = {};
        colorName[`${name}`] = "black";
        setBankColor(colorName);
    }

    const dataForModel = () => {
        return(
            <div className="makeModel">
                <span className="emi"> EMI PLANS </span>
                <span className="faq">
                    <span> FAQs  | </span>
                    <span> Terms & Conditions </span>
                </span>
                <span className="cross"> <CloseIcon onClick={() => setOpen(false)}/> </span>
                <hr />
                <span className="deliveryTime1">
                    Available on listed bank credit cards. Pay easy monthly installments instead of lump-sum amount. Find suitable EMI option below and choose same option at payments step while placing the order.
                </span>
                <hr />
                <div className="row">
                    <div className="col-3">
                        <ul className="banks">
                            <li className="bank" style={{color:`${HDFC}`}} onClick = {() => changeBankColor("HDFC")}> HDFC </li> <hr/>
                            <li className="bank" style={{color:`${ICICI}`}} onClick = {() => changeBankColor("ICICI")}> ICICI </li> <hr/>
                            <li className="bank" style={{color:`${CITY}`}} onClick = {() => changeBankColor("CITY")}> CITY </li> <hr/>
                            <li className="bank" style={{color:`${SBI}`}} onClick = {() => changeBankColor("SBI")}> SBI </li> <hr/>
                            <li className="bank" style={{color:`${KOTAK}`}} onClick = {() => changeBankColor("KOTAK")}> KOTAK </li> <hr/>
                            <li className="bank" style={{color:`${AMEX}`}} onClick = {() => changeBankColor("AMEX")}> AMEX </li> <hr/>
                            <li className="bank" style={{color:`${HSBC}`}}  onClick = {() => changeBankColor("HSBC")}> HSBC </li> <hr/>
                            <li className="bank" style={{color:`${INDUSIND}`}}  onClick = {() => changeBankColor("INDUSIND")}> INDUSIND </li> <hr/>
                            <li className="bank" style={{color:`${RBL}`}}  onClick = {() => changeBankColor("RBL")}> RBL </li> <hr/>
                        </ul>
                    </div>

                    <div className="col-9">
                        
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell align="center"> Months </TableCell>
                                    <TableCell align="center"> Intrest </TableCell>
                                    <TableCell align="center"> Monthly EMI</TableCell>
                                    <TableCell align="center"> OverAll Coast</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.Months} >
                                    <TableCell className="tableBody" align="center" component="th" scope="row">
                                        {row.Months}
                                    </TableCell>
                                    <TableCell className="tableBody" align="center">{row.Intrest}</TableCell>
                                    <TableCell className="tableBody" align="center">{row.MonthlyEMI}</TableCell>
                                    <TableCell className="tableBody" align="center">{row.OverAllCoast}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                </div>
            </div>
        )
    }

    const model = () => {
        return(
            <ModalCompo showModal={open}>
                {dataForModel()}
            </ModalCompo>
        )
    }

    const handleOnChange = (e) => {
        setPincode(e.target.value);
        if(pincode.length === 5){
            setButtonColor("rgb(230, 25, 110)");
        }else{
            setButtonColor("grey");
        }
    }

    const pinCodeCheck = () => {
        setTimeout(() => {
            setShowIncorrectPincode(false);
          }, 4000);
        return(
            <AlertMessage severity="error" shouldDisplay={buttonColor === "grey" ? "dontShow" : "none"} pinCodeInvalid={true} icon={<ErrorOutlineIcon />} message="Please enter a valid pincode" />
            );  
        }

    const showPincodeModel = () => {
        if(buttonColor === "grey"){
            setShowIncorrectPincode(true);
            setPinCodeCorrectSymbol(false);
        }else{
            setShowIncorrectPincode(false);
            setPinCodeCorrectSymbol(true);
        }
    }

    const productExchangeDetails = () => {
        return(
            <div className="exchangeModel">
                <div style={{display: "flex"}}>
                    <CloseIcon style={{fontSize:"4rem", cursor:"pointer"}} onClick={() => setShowInfoForExchange(false)}/>
                    <div className="headingExchange"> Easy Exchange & Return </div>
                </div>
                <p className="subheadingexchange" style={{textAlign:"center"}}> How It Works ? </p>
                <hr/>
                <div>
                    <p style={{textAlign:"center"}}> EASY EXCHANGE </p>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={exchange} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> Go to <b>Menu</b> {'>'} <b>My Orders</b> {'>'} <b>Exchange</b> and select the time slot for exchange </p>
                        </div>
                    </div>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={delivery} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> Delivery agent will deliver the new product and pick up the old one </p>
                        </div>
                    </div>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={deliveryService} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> No additional payment needed </p>
                        </div>
                    </div>

                    <p style={{textAlign:"center", marginTop:"1rem"}}> EASY RETURNS </p>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={exchange} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> Go to <b>Menu</b> {'>'} <b>My Orders</b> {'>'} <b>Exchange</b> and select the time slot and mode for return </p>
                        </div>
                    </div>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={delivery} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> Delivery agent will pick up the product </p>
                        </div>
                    </div>

                    <div className="row" style={{margin:"0.2rem auto"}}>
                        <div className="col-3 centerDiv">
                            <img src={refund} alt="icon not available" style={{height:"4rem", marginRight:"5rem"}}/>
                        </div>
                        <div className="col-9">
                            <p style={{marginTop:"0.2rem"}}> Refund will be processed in 7-14 days after the quality check </p>
                        </div>
                    </div>

                    <p style={{marginTop:"2rem"}}> <b> Note </b>: The product should not be damaged and the price tags should be intact. T&C applicable </p>

                </div>
            </div>
        )
    }

    const details = () => {
        return(
            <div className="detailModel">
                <span> 
                    <CloseIcon onClick={() => setShowDetailModal(false)} style={{float:"right", cursor:"pointer"}} /> 
                    <h6> What customers say about this product </h6>
                </span>

                <div className="row">
                    <div className="col-6">
                        <p> FIT </p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={3}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={5}/> </p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={80}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={10}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={2}/></p>
                   
                        <p style={{marginTop:"1rem"}}> LENGTH </p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={2}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={5}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={85}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={7}/></p>
                        <p><LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={1}/></p>
                    </div>

                    <div className="col-6" style={{fontSize:"12px"}}>
                        <p style={{marginTop:"1.8rem"}}>Too Tight (3%)</p>
                        <p style={{marginTop:"-0.7rem"}}> Somewhat Tight (5%) </p>
                        <p style={{marginTop:"-0.8rem"}}> <b> As Expected (80%) </b> </p>
                        <p style={{marginTop:"-0.9rem"}}> Somewhat Loose (10%) </p>
                        <p style={{marginTop:"-1rem"}}> Too Loose (2%) </p>

                        <p style={{marginTop:"2.9rem"}}> Too Short (2%) </p>
                        <p style={{marginTop:"-0.9rem"}}> Somewhat Short (5%) </p>
                        <p style={{marginTop:"-0.9rem"}}> As Expected (85%) </p>
                        <p style={{marginTop:"-0.9rem"}}> Somewhat Long (7%) </p>
                        <p style={{marginTop:"-0.9rem"}}> Too Long (1%) </p>
                    </div>
                </div>
            </div>
        )
    }

    const showExchangeModal = () => {
        return(
            <ModalCompo showModal={showinfoforexchange} closeModal={() => setShowInfoForExchange(false)}>
                {productExchangeDetails()}
            </ModalCompo>
        )
    }

    const detailmodel = () => {
        return(
            <ModalCompo showModal={showdetailmodal} closeModal={() => setShowDetailModal(false)}>
                {details()}
            </ModalCompo>
        )
    }
    const addItemsToBag = () => {
        if(s === "rgb(230, 25, 110)" || m === "rgb(230, 25, 110)" || l === "rgb(230, 25, 110)" || xl === "rgb(230, 25, 110)" || xxl ==="rgb(230, 25, 110)"){
            return(addItem({id: productdetails[0].id, image: productdetails[0].imageUrl, name: productdetails[0].name, price: productdetails[0].price} , () => {
                console.log("Item Pushed To Cart");
                setTimeout(() => {
                    setShowAlertBag(false);
                    window.location.reload();
                  }, 2000);
                  setShowAlertBag(true);
            }));
        }else{
              setTimeout(() => {
                setSelectSize(false);
                }, 3000);
            setSelectSize(true);
        }
    }

    const addItemsToWishList = () => {
        if(s === "rgb(230, 25, 110)" || m === "rgb(230, 25, 110)" || l === "rgb(230, 25, 110)" || xl === "rgb(230, 25, 110)" || xxl ==="rgb(230, 25, 110)"){
            return(wishListAddItems({id: productdetails[0].id, image:productdetails[0].imageUrl, name: productdetails[0].name, price: productdetails[0].price} , () => {
                console.log("Item Pushed To WishList");
                setTimeout(() => {
                    setShowAlertWishList(false);
                    window.location.reload();
                  }, 2000);
                  setShowAlertWishList(true);
            }))
        }else{
            setTimeout(() => {
                setSelectSize(false);
                }, 3000);
            setSelectSize(true);
        }
    }

    return(
        <div>
        {productdetails && productdetails.length > 0 ? (
        <div className="row" style={{justifyContent:"space-between"}}>
            {showincorrectpincode && pinCodeCheck()}
            {selectsize && <AlertMessage severity="error" shouldDisplay={"dontShow"} pinCodeInvalid={true} icon={<ErrorOutlineIcon />} message="Please Select Size First" />}
            {showalertwishlist && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message="Product Added To WishList" />}
            {showalertbag && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message="Product Added To Bag" />}
            
            <div className="collection-item1">
                <div className="background-image" style={{backgroundImage : `url(${productdetails[0].imageUrl})` }} /> 
            </div>    

            <div className="collection-item2">
                <div className="name1"> HRX by Parth The Human </div>
                <span className="productName"> {productdetails[0].name} &nbsp; <strong></strong> </span> 
                <div className="rating">
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>
                    {/* <StarRatings
                        rating={rating}
                        starRatedColor="lightyellow"
                        changeRating={changeRating}
                        numberOfStars={5}
                        name="rating"
                        /> */}
                </div>
                <hr/>
                <span> $ {productdetails[0].price} </span>  
                <span className="deletedPrice"> <del> $ {productdetails[0].price+15} </del> </span>
                <span className="off"> ($ 5 OFF) </span>  
                <div className="tax"> Inclusive Of All Taxs </div>
                <span className="clothSizing"> Select Size </span> 
                <span className="sizeChart"> Size Chart {'>'} </span>
                <Stack direction="row" spacing={3} mt={3} mb={3}>
                    <Avatar style={{color: `${s}`,backgroundColor:"white", border:`1px solid ${s}`, fontWeight: "normal"}} onClick={() => changeColor("1")}> S </Avatar>
                    <Avatar style={{color: `${m}`,backgroundColor:"white", border:`1px solid ${m}`, fontWeight: "normal"}} onClick={() => changeColor("2")}> M </Avatar>
                    <Avatar style={{color: `${l}`,backgroundColor:"white", border:`1px solid ${l}`, fontWeight: "normal"}} onClick={() => changeColor("3")}> L </Avatar>
                    <Avatar style={{color: `${xl}`,backgroundColor:"white", border:`1px solid ${xl}`, fontWeight: "normal"}} onClick={() => changeColor("4")}> XL </Avatar>
                    <Avatar style={{color: `${xxl}`,backgroundColor:"white", border:`1px solid ${xxl}`, fontWeight: "normal"}} onClick={() => changeColor("5")}> XXL </Avatar>
                </Stack>
                    {/* <span className="size"  style={{color: `${s}`, border:`1px solid ${s}`}} onClick={() => changeColor("1")}> S </span>   */}
                    {/* <span className="size"  style={{color: `${m}`, border:`1px solid ${m}`}} onClick={() => changeColor("2")} > M </span>  
                    <span className="size"  style={{color: `${l}`, border:`1px solid ${l}`}} onClick={() => changeColor("3")} > L </span>  
                    <span className="size"  style={{color: `${xl}`,border:`1px solid ${xl}`}} onClick={() => changeColor("4")} > XL </span>  
                    <span className="size"  style={{color: `${xxl}`,border:`1px solid ${xxl}`}} onClick={() => changeColor("5")} > XXL </span>   */}

                <button className="addToCart" onClick={() => addItemsToBag()}> <ShoppingBasketIcon style={{marginRight: "5px"}}/>  ADD TO BAG </button>
                <button className="wishList" onClick={() => addItemsToWishList()}> <FavoriteBorderIcon style={{marginRight: "5px"}}/> WISHLIST </button>
                <hr />

                <span className="smallerPrice"> $ {productdetails[0].price} </span>  
                <span className="smallerDeletedPrice"> <del> $ {productdetails[0].price+15} </del> </span>
                <span className="smallerOff"> ($ 5 OFF) </span>  
                <div className="seller"> Seller: <span className="sellerColor"> Omnitech Retail </span></div>

                <hr />

                <div className="deliveryIcon"> DELIVERY OPTIONS <LocalShippingOutlinedIcon style={{marginLeft:"5px", fontSize:"27px"}}/> </div>
        
                {pincodecorrectsymbol ? 
                    (<div>
                        <span className='inputWithButton' onClick={() => setPinCodeCorrectSymbol(false)}>
                            <input type="text" placeholder="Enter a PIN code" name="pincode"  value={pincode}  minLength="6" maxLength="6"  autoComplete="off"/>  
                            <span className="tick"> <CheckCircleRoundedIcon style={{color:"mediumseagreen"}} /> </span>
                            <button style={{color: `${buttonColor}`}} onClick={() => showPincodeModel()}> <b> CHANGE </b> </button>   
                        </span>
                        
                        <div className="expectedDeliveryDay"> <LocalShippingOutlinedIcon style={{marginRight:"10px"}}/> Get it by {moment().format("ddd, MMM Do")} </div>
                        <div className="expectedDeliveryDay"> 
                            <MobileScreenShareOutlinedIcon style={{marginRight:"10px"}}/> Pay on delivery available {moment().format("ddd, MMM Do")} 
                        </div>
                        <div className="expectedDeliveryDay"> 
                            <SwapHorizIcon style={{marginRight:"10px"}}/> Easy 30 days return & exchange available {moment().format("ddd, MMM Do")} 
                            <span className="moreInfoForExchange" onClick={() => setShowInfoForExchange(true)}> MORE INFO {`>`} </span>
                        </div>
                        {showExchangeModal()}
                    </div> )
                : 
                    (<div className='inputWithButton'>
                        <input type="text" placeholder="Enter a PIN code" name="pincode" onChange={(e) => handleOnChange(e)} value={pincode} minLength="6" maxLength="6"  autoComplete="off"/>
                        <button style={{color: `${buttonColor}`}} onClick={() => showPincodeModel()}> <b> CHECK </b> </button>   
                    </div>)
                }
           
                <div className="deliveryTime"> Please enter PIN code to check delivery time & Pay on Delivery Availability </div>
                <div className="details"> 100% Original Products </div>
                <div className="details"> Pay on delivery might be available </div>
                <div className="details"> Easy 30 days returns and exchanges </div>
                <div className="details"> Try & Buy might be available </div>

                <div className="offer"> BEST OFFERS <LocalOfferOutlinedIcon style={{ fontSize: "20px" }}/> </div>
                <div className="bestPrice"> Best Price: <span className="best_Price"> $ {productdetails[0].price-4} </span> </div>
                <ul className="details">
                    <li> Applicable on: Orders above $ 2499 (only on first purchase) </li>
                    <li> Coupon code: <b>MYNTRA400</b> </li>
                    <li> Coupon Discount: Rs. 400 off (check cart for final savings) </li>
                </ul>
                <span className="best_Price"> View Eligible Products </span>
                <div className="bestPrice"> Get additional offer </div>
                <div className="details"> Buy this style and unlock additional 10% off on a selected catalogue. </div>

                <span className="best_Price"> View Products </span>
                <div className="bestPrice"> EMI option available </div>
                <ul className="details">
                    <li> Buy this style and unlock additional 10% off on a selected catalogue. </li>
                </ul>

                <span className="best_Price" onClick={() => setOpen(true)} style={{cursor:"pointer"}}> View Plans </span>
                {model()}

                <hr/>

                <span className="productDetails"> PRODUCT DETAILS <ListAltOutlinedIcon /> </span>
                <div className="prodDetail">
                    Black and rust orange floral print woven tiered midi fit and flare dress with ruffles, has a V-neck, short ruched sleeves, elasticated waistband, an attached lining, and flared hem
                </div>

                <span className="productDetails"> Size & Fit </span>
                <div className="prodDetail"> Semi-Fit </div>
                <div className="prodDetail"> The model (height 5'8") is wearing a size S </div>

                <span className="productDetails"> Material & Care </span>
                <div className="prodDetail"> Material: Poly chiffon </div>
                <div className="prodDetail"> Hand Wash </div>

                <span className="productDetails">  Specifications </span>
                <div className="row">
                    <div className="col-6">
                        <span className="deliveryTime" style={{color: "grey"}}> Shape </span>
                        <div className="prodDetail"> Fit and Flare </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Length </span>
                        <div className="prodDetail"> Midi </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Sleeve Length </span>
                        <div className="prodDetail"> Short Sleeves </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Occasion </span>
                        <div className="prodDetail"> Casual </div>
                        <hr/>
                    
                    </div>

                    <div className="col-6">
                        <span className="deliveryTime" style={{color: "grey"}}> Neck </span>
                        <div className="prodDetail"> V-Neck </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Print or Pattern Type </span>
                        <div className="prodDetail"> Floral </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Sleeve Styling </span>
                        <div className="prodDetail"> Puff Sleeves </div>
                        <hr/>

                        <span className="deliveryTime" style={{color: "grey"}}> Knit or Woven </span>
                        <div className="prodDetail"> Woven </div>
                        <hr/>
                    </div>

                </div>

                <span className="best_Price" onClick={() => setShowMore(true)} style={{cursor:"pointer", display: showmore ? "none" : ""}}> See More </span>
                    <div style={{display : showmore ? "" : "none"}}>
                        <div className="row">
                            <div className="col-6">
                                <span className="deliveryTime" style={{color: "grey"}}> Hemline </span>
                                <div className="prodDetail"> Flared </div>
                                <hr/>

                                <span className="deliveryTime" style={{color: "grey"}}> Fabric Type </span>
                                <div className="prodDetail"> Chiffon </div>
                                <hr/>

                                <span className="deliveryTime" style={{color: "grey"}}> Surface Styling </span>
                                <div className="prodDetail"> Ruffles </div>
                                <hr/>
                            </div>

                            <div className="col-6">
                                <span className="deliveryTime" style={{color: "grey"}}> Transparency </span>
                                <div className="prodDetail"> Opaque </div>
                                <hr/>

                                <span className="deliveryTime" style={{color: "grey"}}> Lining </span>
                                <div className="prodDetail"> Has a lining </div>
                                <hr/>

                                <span className="deliveryTime" style={{color: "grey"}}> Main Trend </span>
                                <div className="prodDetail"> Floral </div>
                                <hr/>
                            </div>
                        </div>

                        <span className="productDetails">  Complete The Look </span>
                        <div className="prodDetail"> 
                            Turn heads this season in this effortlessly stylish dress by Antheaa. When you 
                            need an outfit for work and dinner after work, wear this printed piece with 
                            platform heels and some minimalistic silver jewellery.
                        </div>

                <span className="best_Price" onClick={() => setShowMore(false)} style={{cursor:"pointer", display: showmore ? "" : "none"}}> See Less </span>
                    </div>
                        <hr/>

                <span className="rating"> RATINGS </span>  <GradeOutlinedIcon /> 
                <div className="row">
                    <div className="col-3">
                            <span className="exactRating"> 4.4 <StarRoundedIcon  style={{ fontSize: "2rem", color: "green" }}/> </span> 
                            <div className="prodDetail"> 1.6k Verified Buyers </div>
                    </div>

                    <div className="partition"> </div>

                    <div className="col-7 multipleRating">
                        <div className="flexingStar"> 5 <StarRoundedIcon  color="disabled" style={{ fontSize: "13px" }}/> <LinearProgress style={{backgroundColor:"lightgray", width:"10rem"}}  variant="determinate" value={70}/> </div> 
                        <div className="flexingStar"> 4 <StarRoundedIcon  color="disabled" style={{ fontSize: "13px" }}/> <LinearProgress style={{backgroundColor:"lightgray", width:"10rem"}}  variant="determinate" value={40}/> </div> 
                        <div className="flexingStar"> 3 <StarRoundedIcon  color="disabled" style={{ fontSize: "13px" }}/> <LinearProgress style={{backgroundColor:"lightgray", width:"10rem"}}  variant="determinate" value={25}/> </div>
                        <div className="flexingStar"> 2 <StarRoundedIcon  color="disabled" style={{ fontSize: "13px" }}/> <LinearProgress style={{backgroundColor:"lightgray", width:"10rem"}}  variant="determinate" value={10}/> </div>
                        <div className="flexingStar"> 1 <StarRoundedIcon  color="disabled" style={{ fontSize: "13px" }}/> <LinearProgress style={{backgroundColor:"lightgray", width:"10rem"}}  variant="determinate" value={5}/>  </div> 
                    </div>
                </div>

                <span className="customerReview"> WHAT CUSTOMERS SAID </span>  <GradeOutlinedIcon /> 
                <div className="multipleRating">
                        <h6> Fit </h6>  
                        <div style={{width:"10rem", marginBottom:"5px"}}>
                            <LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={80}/>
                        </div>
                        <h6> Length </h6> 
                        <div style={{width:"10rem"}}>
                            <LinearProgress style={{backgroundColor:"lightgray"}}  variant="determinate" value={85}/>
                        </div>
                </div>
                <span className="best_Price" style={{cursor:"pointer"}} onClick={() => setShowDetailModal(true)} > view Details </span>
                {detailmodel()}
            </div>
        </div>) : null}
        </div>
    )
}

export default withRouter(ShowSingleImage);
