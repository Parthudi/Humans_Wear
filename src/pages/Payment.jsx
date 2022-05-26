import React, {useState,useEffect, forwardRef} from "react";
import {Card,Typography,makeStyles,Box,Button,Grid} from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Checkout from "../components/CheckoutLayout";
import MoneyIcon from '@mui/icons-material/Money';
import PriceDetails from "../components/PriceDetails";
import {getCart} from "../components/LocalStorageItems/Cart";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CashOnDelivery from "../components/PaymentMethods/CashOnDelivery";
import CardPayment from "../components/PaymentMethods/CardPayment";
import RadioPayments from "../components/PaymentMethods/RadioPayments";

import creditcard from "../assets/creditCard.jpg"
import zest from "../assets/zest.png"
import flexipay from "../assets/flexipay.png"

import axis from "../assets/axis.png"
import hdfc from "../assets/hdfc.png"
import icici from "../assets/icici.png"
import kotak from "../assets/kotak.png"
import sbi from "../assets/sbi.png"

import phonepay from "../assets/phonepay.png";
import gpay from "../assets/gpay.png";
import upi from "../assets/upi.png";

import paytm from "../assets/paytm.jpg"
import payzapp from "../assets/payzapp.png"
import mobiKwik from "../assets/MobiKwik.png"
import airtelMoney from "../assets/airtelMoney.png"
import freeCharge from "../assets/freecharge.png"
import olaMoney from "../assets/olaMoney.png"

import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(4,4),
        width: "25vw"
    },
    [theme.breakpoints.down("sm")]: {
        card: {
            padding: theme.spacing(4,4),
            width: "200vw"
        }
    }
}));

const Payment = () => {
    const [showbankoffers, setShowBankOffers] = useState(false);
    const [product, setProduct] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const upiRadio = [{icon: phonepay, paymentBy: "Phone Pay" }, {icon: gpay, paymentBy: "Google Pay"} , {icon: upi, paymentBy: "Enter UPI ID" }];
    const walletRadio = [{icon: paytm, paymentBy: "Paytm" }, {icon: payzapp, paymentBy: "PayZapp"} , {icon: mobiKwik, paymentBy: "MobiKwik" }, {icon: airtelMoney, paymentBy: "Airtel Money" }, {icon: freeCharge, paymentBy: "Free Charge" }, {icon: olaMoney, paymentBy: "Ola Money" }];
    const netBankingRadio = [{icon: axis, paymentBy: "Axis Bank" }, {icon: hdfc, paymentBy: "HDFC Bank"} , {icon: icici, paymentBy: "ICICI Bank" }, {icon: kotak, paymentBy: "Kotak Bank" }, {icon: sbi, paymentBy: "Sbi Bank" }];
    const emiRadio = [{icon: creditcard, paymentBy: "Credit Card" }, {icon: zest, paymentBy: "Zest Money"} , {icon: creditcard, paymentBy: "Cardless Emi"}, {icon: flexipay, paymentBy: "Flexi Pay By HDFC Bank"}];

    const classes = useStyles();

    useEffect(() => {
        const cart = getCart();
        setProduct(cart);
    }, [product.length]);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

    const bankOffers = () => {
        return(
            <Box ml={3} >
                    <ListItemText secondary="10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,000. TCA" />
                    <div style={{display: `${showbankoffers ? "" : "none"}`}}>
                        <ListItemText secondary="10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000. TCA" />
                        <ListItemText secondary="Flat Rs 100 Cashback on Paytm Wallet transaction of minimum Rs 2,000. TCA" />
                        <ListItemText secondary="10% Instant Discount with Standard Chartered Credit and Debit Cards on a min spend of Rs 3,000. TCA" />
                        <ListItemText secondary="5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA" />
                        <ListItemText secondary="10% Cashback up to Rs 750 on Dhani OneFreedom Card on a min spend of Rs 1,200. TCA" />
                        <ListItemText secondary="5% Cashback upto Rs 200 on a minimum spend of Rs 1,500 with PayZapp. TCA" />
                        <ListItemText secondary="Flat Rs 200 Cashback on first Airtel Payments Bank transaction on Myntra on a min spend of Rs 2000. TCA" />
                    </div>
            </Box>
        )
    }

    const checkOutPage = () => {
        return(
            <Checkout showHighlight="payment">
            <Grid container spacing={8}>
                <Grid container item xs={10} sm={11} md={8}>
                    <div>
                    <Card>
                        <Typography variant="subtitle2" display="block" noWrap>
                            <LocalOfferOutlinedIcon /> <b> Bank Offer </b>
                            {bankOffers()}
                        </Typography>
                        {showbankoffers ? <Button color="secondary" size="small" onClick={() => setShowBankOffers(false)}> <b> Show Less </b> </Button>
                            : <Button color="secondary" size="small" onClick={() => setShowBankOffers(true)}> <b> Show More </b> </Button>   } 
                    </Card>
                    <Typography variant="subtitle1" gutterBottom style={{marginTop:"30px", marginBottom:"20px"}}>
                        <b> Choose Payment Mode </b>
                    </Typography>

                    <Card>
                        <Grid container justifyContent="center" spacing={4}>
                            <Grid item xs={4} sm={4} md={4} style={{backgroundColor: "rgb(246, 248, 250)"}}  > 
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 0}
                                            onClick={(event) => handleListItemClick(event, 0)}>
                                            <ListItemIcon>
                                                <MoneyIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="CASH ON DELIVERY" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 1}
                                            onClick={(event) => handleListItemClick(event, 1)}>
                                            <ListItemIcon>
                                                <CreditCardOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="CREDIT/ DEBIT CARD" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 2}
                                            onClick={(event) => handleListItemClick(event, 2)}>
                                            <ListItemIcon>
                                                <PaymentsOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="PHONEPAY/ GOOGLE PAY/ BHIM UPI" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 3}
                                            onClick={(event) => handleListItemClick(event, 3)}>
                                            <ListItemIcon>
                                                <AccountBalanceWalletOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="PAYTM/ PAYZ APP/ WALLETS" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 4}
                                            onClick={(event) => handleListItemClick(event, 4)}>
                                            <ListItemIcon>
                                                <AccountBalanceOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="NET BANKING" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton selected={selectedIndex === 5}
                                            onClick={(event) => handleListItemClick(event, 5)}>
                                            <ListItemIcon>
                                                <DateRangeOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText secondary="EMI/ PAYLATER" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>

                            <Grid item xs={8} sm={8} md={8}>
                                {selectedIndex == 0 && <CashOnDelivery />}
                                {selectedIndex == 1 && <CardPayment products={product} />}
                                {selectedIndex == 2 && <RadioPayments options={upiRadio} paymentMethodName="PAY USING UPI" name="Upi" radioFor="Payment" />}
                                {selectedIndex == 3 && <RadioPayments options={walletRadio} paymentMethodName="Select Wallet To Pay" name="Wallet" radioFor="Payment" />}
                                {selectedIndex == 4 && <RadioPayments options={netBankingRadio} paymentMethodName="Net Banking" name="net banking" radioFor="Payment" />}
                                {selectedIndex == 5 && <RadioPayments options={emiRadio} paymentMethodName="Select Emi Option" name="Emi" radioFor="Payment" />}

                            </Grid>
                        </Grid>
                    </Card>
                    </div>
                </Grid>
                <Grid container item xs={12} sm={12} md={4}>
                    <Card className={classes.card}>
                        <PriceDetails products={product} buttonText="NONE" />
                    </Card>
                </Grid>
            </Grid>
        </Checkout>
        )
    }
    return(
        <div>
            {product.length > 0 ? 
                checkOutPage()
                :
            <Alert severity="warning">Cart Is Empty!</Alert>}
        </div>
    )
}

export default Payment;