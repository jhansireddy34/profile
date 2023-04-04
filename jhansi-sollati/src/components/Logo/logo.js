import {motion} from 'framer-motion';
import {Grid} from '@mui/material';



const JSlogo =(props)=> {

    return <Grid className="logoBg">
        <Grid xs={12} item={true} className="jslogo"><motion.h1
        animate={{rotateY: 360}}
        transition={{duration: 1.5}}
        
        >
            JS
        </motion.h1>
        </Grid><Grid xs={12}className="jsname">
        <h4>Jhansi</h4>

        </Grid>

        </Grid>




}
export default JSlogo;

