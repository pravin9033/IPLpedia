const Card = ({children, rounded}) => {
    const r = rounded ? "rounded" : "";
    return (
        <div className={`max-w-sm overflow-hidden shadow-lg ${r} bg-white text-black own`}>
            {children}
        </div>
    );
}
export default Card;