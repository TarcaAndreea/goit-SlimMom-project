import React, { useState } from 'react';
import css from '../DailyCalorieIntake/dailyCalorieIntake.module.css';

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

  return (
    <div className="css.App">
      <h2 className="css.title_intake">
        Calculate your daily calorie intake right now
      </h2>
      <form>
        <div className="css.left-inputs">
          <label htmlFor="leftInput1">Height*</label>
          <input
            type="text"
            id="leftInput1"
            name="leftInput1"
            value={leftInputs.leftInput1}
            onChange={handleLeftInputChange}
          />

          <label htmlFor="leftInput2">Age *</label>
          <input
            type="text"
            id="leftInput2"
            name="leftInput2"
            value={leftInputs.leftInput2}
            onChange={handleLeftInputChange}
          />

          <label htmlFor="leftInput3">Current weight *</label>
          <input
            type="text"
            id="leftInput3"
            name="leftInput3"
            value={leftInputs.leftInput3}
            onChange={handleLeftInputChange}
          />
        </div>

        <div className="css.right-inputs">
          <label htmlFor="rightInput1">Desired weight *</label>
          <input
            type="text"
            id="rightInput1"
            name="rightInput1"
            value={rightInputs.rightInput1}
            onChange={handleRightInputChange}
          />

          <label htmlFor="rightInput2">Blood type *</label>
          <input
            type="text"
            id="rightInput2"
            name="rightInput2"
            value={rightInputs.rightInput2}
            onChange={handleRightInputChange}
          />
          <div className="css.checkbox-row">
            <label htmlFor="checkbox1">1</label>
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
            />

            <label htmlFor="checkbox2">2</label>
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
            />

            <label htmlFor="checkbox3">3</label>
            <input
              type="checkbox"
              id="checkbox3"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
            />

            <label htmlFor="checkbox4">4</label>
            <input
              type="checkbox"
              id="checkbox4"
              name="checkbox4"
              checked={checkboxes.checkbox4}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
