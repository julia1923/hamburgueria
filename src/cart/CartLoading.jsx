const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
};

const spinnerStyle = {
    width: '60px',
    height: '60px',
    border: '6px solid #ccc',
    borderTop: '6px solid #09f',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
};

export const CartLoading = () => {
    return (
        <div style={overlayStyle}>
            <div style={spinnerStyle}></div>
        </div>
    )
}

export default CartLoading;