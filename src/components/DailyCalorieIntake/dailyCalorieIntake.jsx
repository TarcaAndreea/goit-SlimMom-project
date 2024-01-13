import React, { useState } from 'react';
import css from '../DailyCalorieIntake/dailyCalorieIntake.module.css';
import { ModalComponent } from 'components/Modal/Modal';
export default function DailyCalorieIntake() {
  const [leftInputs, setLeftInputs] = useState({
    leftInput1: '',
    leftInput2: '',
    leftInput3: '',
  });

  const [rightInputs, setRightInputs] = useState({
    rightInput1: '',
    rightInput2: '',
  });

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleLeftInputChange = e => {
    const { name, value } = e.target;
    setLeftInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const handleRightInputChange = e => {
    const { name, value } = e.target;
    setRightInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setCheckboxes(prevCheckboxes => ({ ...prevCheckboxes, [name]: checked }));
  };
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = e => {
    e.preventDefault();
    console.log('modal opened');
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div className={css.App}>
      <h2 className={css.title_intake}>
        Calculate your daily calorie intake right now
      </h2>
      <form>
        <div className={css.left_inputs}>
          <label htmlFor="leftInput1">Height*</label>
          <input
            type="text"
            id="leftInput1"
            name="leftInput1"
            value={leftInputs.leftInput1}
            onChange={handleLeftInputChange}
            autoFocus
          />

          <label htmlFor="leftInput2">Age *</label>
          <input
            type="text"
            id="leftInput2"
            name="leftInput2"
            value={leftInputs.leftInput2}
            onChange={handleLeftInputChange}
            autoFocus
          />

          <label htmlFor="leftInput3">Current weight *</label>
          <input
            type="text"
            id="leftInput3"
            name="leftInput3"
            value={leftInputs.leftInput3}
            onChange={handleLeftInputChange}
            autoFocus
          />
        </div>

        <div className={css.right_inputs}>
          <label htmlFor="rightInput1">Desired weight *</label>
          <input
            type="text"
            id="rightInput1"
            name="rightInput1"
            value={rightInputs.rightInput1}
            onChange={handleRightInputChange}
            autoFocus
          />

          <label htmlFor="rightInput2">Blood type *</label>
          <input
            type="text"
            id="rightInput2"
            name="rightInput2"
            value={rightInputs.rightInput2}
            onChange={handleRightInputChange}
          />
          <div className={css.checkbox_row}>
            <input
              type="radio"
              id="checkbox1"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />

            <label htmlFor="checkbox1" className="css.label_checkbox">
              1
            </label>
            <input
              type="radio"
              id="checkbox2"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox2" className="css.label_checkbox">
              2
            </label>

            <input
              type="radio"
              id="checkbox3"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox3" className="css.label_checkbox">
              3
            </label>

            <input
              type="radio"
              id="checkbox4"
              name="checkbox4"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox4" className="css.label_checkbox">
              4
            </label>
          </div>
        </div>
      </form>
      <button className={css.buttom_home} onClick={handleModalOpen}>
        Start losing weight
      </button>
      <ModalComponent isOpen={openModal} onClose={handleModalClose} />
    </div>
  );
}
