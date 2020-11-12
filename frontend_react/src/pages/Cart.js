import { useHistory } from 'react-router-dom';
const Cart = () => {
    let history = useHistory();

    return (
        <div>
            <span>Cart Page</span>
            <button
                onClick={() => {
                    history.push('/');
                }}
            >
                Go Main
            </button>
        </div>
    );
};

export default Cart;
