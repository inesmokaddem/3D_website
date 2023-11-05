import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white p-8 rounded-2xl mb-[4rem]'
      >
        <div>
          <p className={styles.sectionSubText}>Pour prendre rendez-vous</p>
          <h3 className={styles.sectionContactText}><a href="https://www.doctolib.fr/masseur-kinesitherapeute/labenne/matthias-kupper" target="_blank">Doctolib.</a></h3>
          <p className={styles.sectionSubText}>Tél: 05 59 59 18 71</p>
          <p className={styles.sectionSubText}>Adresse : Pl. du Marensin, 40530 Labenne</p>
        </div>
        {/* <div>
          <img src="../../src/assets/team/kine2.jpg" alt="photo_rdv" className="w-50" />
        </div> */}

        

      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        // className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
      <div className="border-top-light footer">
        <p>Website made by I.Mokaddem</p>
        
        <p><a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-occupational-therapy-illustration_25645143.htm#query=physiotherapy%20background&position=45&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik</p> 
        <p><a href="https://www.flaticon.com/fr/icones-gratuites" title="massage icônes">Icônes by Freepik and Surang - Flaticon</a></p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

