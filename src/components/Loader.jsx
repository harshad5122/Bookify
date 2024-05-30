import { RingLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="align-items-center container d-flex justify-content-center loader-container">
            <RingLoader
                loading={true}
                size={80}
                sizeUnit={"px"}
                color="#3498db"
            />
        </div>
    )
}

export default Loader;