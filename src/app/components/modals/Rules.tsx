"use client"
import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { style } from "@/app/components/modals/modalStyle";
import data from "@/app/functions/data";
import { ModalContext } from '@/context/ModalContext';
import { LanguageContext } from '@/context/LanguageContext';

const Rules = () => {
    const { isRulesOpen, setIsRulesOpen } = useContext(ModalContext);
    const { lang } = useContext(LanguageContext);

  return (
    <Modal
        open={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            {lang == "tr" ? "Yazılım Topluluğu" : "Software Society"}
          </Typography>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {lang == "tr" ? "Topluluk Kuralları" : "Community Guidelines"}
          </Typography>

          <div dangerouslySetInnerHTML={{ __html: lang == "tr" ? data.rules : data.rules_eng }} className="mt-4 h-[55vh] text-sm border-[1px] p-2 border-black rounded-lg overflow-y-scroll"></div>

          <div className="flex justify-end">
            <button type="button" onClick={() => setIsRulesOpen(false)} className="p-2 bg-orange-400 text-white rounded-xl mt-5">
                {lang == "tr" ? "Okudum" : "OK"}
            </button>
          </div>
        </Box>
      </Modal>
  )
}

export default Rules