const Image = (props,{children}) => {
    return (
        <div className="image-section" style={{height:"50%"}}>
            <img className={"w-full bg-white"}  {...props}/>
            {children}
        </div>
    );
}
export default Image;