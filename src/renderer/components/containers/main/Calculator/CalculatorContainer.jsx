import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   window.getData().then((result) => {
  //     const settingProfile = new Setting(result.priceRate, result.services);

  //     setData(settingProfile);
  //   });
  // }, []);
  console.log(data);
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="exampleRequired1" ref={register({ required: true })} />
        <input name="exampleRequired2" ref={register({ required: true })} />
        <input name="exampleRequired3" ref={register({ required: true })} />
        <input name="exampleRequired4" ref={register({ required: true })} />
        <input name="exampleRequired5" ref={register({ required: true })} />
        <input name="exampleRequired6" ref={register({ required: true })} />
        <input name="exampleRequired7" ref={register({ required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}