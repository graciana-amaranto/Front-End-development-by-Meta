import { useState } from "react";

function GiftCard(props) {
    const [giftCard, setGiftcard] = useState(
        {
            fistName: "Jennifer",
            lastName: "Smith",
            text: "Free dinner for 4 guests",
            valid: true,
            instructions: "To use your coupon, click the button below:"
        }
    )

        function spendGiftCard() {
            setGiftcard(prevState => {
                return {
                    ...prevState,
                    text: "Your coupon has been used.",
                    valid: false,
                    instructions: "Please visit our restaurant to renew your gift card."
                }
            });
        }
        props.style(giftCard);

        return(
            <div style={{padding: '40px'}}>
                <h1>Gift Card Page</h1>
                <h2>Customer: {giftCard.fistName} {giftCard.lastName}</h2>
                <h3>{giftCard.text}</h3>
                <h3>{giftCard.instructions}</h3>
                <p>
                    {
                        giftCard.valid && (
                            <button onClick={spendGiftCard}>Spend Gift Card</button>
                        )
                    }
                </p>
            </div>
        );
}
export default GiftCard;