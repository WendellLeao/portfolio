import {motion} from "framer-motion";
import loadingImage from '../images/loading.webp';
import './Loading.css';

const Loading = () => {
    return (
       <div className="loadingContainer">
           <motion.img
               src={loadingImage}
               alt=""
               animate={{ rotate: 360 }}
               transition={{ ease: "linear", repeat: Infinity, repeatType: "reverse", duration: 0.6 }}/>
       </div>
    )
}

export default Loading;