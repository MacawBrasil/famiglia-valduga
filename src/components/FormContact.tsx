'use client';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputMask } from '@react-input/mask';
import { ClipLoader } from 'react-spinners';
import { Button } from './Button';
import { Animated } from './Animated';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string(),
  polices: yup.boolean().required(),
});

export const FormContact = () => {
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await fetch('/api/contact', {
        body: JSON.stringify(data),
        method: 'POST',
      });
      reset();
      return;
    } catch (error) {
      console.log(error);
      reset();
    }
  });
  return (
    <Animated>
      <form
        className="w-[591px] p-8 bg-white rounded shadow flex flex-col items-end gap-6 relative"
        onSubmit={onSubmit}>
        <div className="w-full flex flex-col gap-2 items-start">
          <label className="text-stone-600 text-base font-semibold font-mont leading-normal">
            Nome:
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder="Seu nome completo"
            className="w-full h-14 bg-white rounded border border-stone-300 pl-3 focus:outline-ouro"
          />
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <label className="text-stone-600 text-base font-semibold font-mont leading-normal">
            E-mail:
          </label>
          <input
            type="text"
            {...register('email')}
            placeholder="exemplo@gmail.com"
            className="w-full h-14 bg-white rounded border border-stone-300 pl-3 focus:outline-ouro"
          />
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <label className="text-stone-600 text-base font-semibold font-mont leading-normal ">
            Telefone:
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <InputMask
                placeholder="Insira apenas números"
                mask="(__) _____-____"
                replacement={{ _: /\d/ }}
                {...field}
                className="w-full h-14 bg-white rounded border border-stone-300 pl-3 focus:outline-ouro"
              />
            )}
          />
          <span className="text-roxo text-sm font-semibold leading-[21px]">
            {errors.phone?.message}
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <label className=" text-stone-600 text-base font-semibold font-mont leading-normal ">
            Mensagem:
          </label>
          <textarea
            {...register('message')}
            className="resize-none w-full h-[189px] bg-white rounded border border-stone-300 pl-3 pt-3 focus:outline-ouro"
            placeholder="Digite aqui a sua mensagem"
          />
        </div>
        <div className="w-full flex gap-3">
          <input type="checkbox" {...register('polices')} />
          <span className="text-stone-400 text-sm font-normal font-mont leading-[21px]">
            Eu concordo com a{' '}
            <a
              href="#"
              className="text-ouro text-sm font-normal font-mont leading-[21px]">
              política de privacidade
            </a>
          </span>
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center disabled:bg-opacity-80"
          disabled={!isValid}>
          {isSubmitting ? (
            <ClipLoader
              color="#FDF1E4"
              loading={isSubmitting}
              size={35}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            'Enviar mensagem'
          )}
        </Button>
        {isSubmitted && (
          <span className="text-green-700 text-base font-semibold font-mont leading-normal absolute left-8 bottom-8">
            Mensagem enviada com sucesso!
          </span>
        )}
      </form>
    </Animated>
  );
};
