import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [data, setData] = useState(false);
  const [value, setValue] = useState('');
  // eslint-disable-next-line no-shadow
  const onChange = ({ target: { value } }) => setValue((prev) => (/\d+/.test(Number(value)) ? value : prev));

  useEffect(() => {
    window.getData().then((result) => {
      const settingProfile = new Setting(result.priceRate, result.services);

      setData([settingProfile]);
    });
  }, []);

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {data ? (
          data[0].servises.map((product) => (
            <>
              <label htmlFor={product.name}>{product.name}</label>
              <input
                id={product.name}
                name={product.name}
                defaultValue={product.rate}
                key={product.id}
                ref={register({ max: 0, min: 5000, maxLength: 100, pattern: /\d+/ })}
              />
            </>
          ))
        ) : (
          <h1>Загрузка данных</h1>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}