import React from 'react'

import { useState } from 'react';

import { useForm, useController } from 'react-hook-form';

import { PhoneInput } from 'react-international-phone';

import flags from 'react-phone-number-input/flags'

/**import 'react-international-phone/style.css';**/

import Select from "react-tailwindcss-select";

import "./Login.css"




const positionList = [
    { value: 1, label: 'Desenvolvedor Front-End' },
    { value: 2, label: 'Desenvolvedor Back-End' },
    { value: 3, label: 'Desenvolvedor Full-Stack' },
    { value: 4, label: 'UX/UI' },
    { value: 5, label: 'Analista de Infraestrutura' }
];

function LoginForm() {


    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const { field: { value: positionValue, onChange: positionOnChange, ...restPositionField } } = useController({ name: 'position', control });

    const onSubmit = (data) => {
        console.log("data",data);
    };


    function handleChangeFile(e) {
        console.log("Arquivo PDF", e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        e.target.value = null;
        console.log("Arquivo PDF currículo", e.target.files);
    }

    return (
        <div className='mx-auto relative px-40 top-20 pb-40 block'>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                            type="text"
                            name="name"
                            {...register("name", {
                                required: "Nome é obrigatório",
                            })}
                            placeholder='Digite o seu nome'
                        />
                        {errors.name && <p className="relative inline z-10 pt-1 text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <input
                            className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                            type="text"
                            name="lastname"
                            {...register("lastname", {
                                required: "Sobrenome é obrigatório",
                            })}
                            placeholder='Digite o seu sobrenome'
                        /> {errors.lastname && <p className="relative inline z-10 pt-1 text-red-500 text-xs italic">{errors.lastname.message}</p>}

                    </div>
                </div>
                <div className="mb-6">
                    <input
                        className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        type="text"
                        name="email"
                        {...register("email", {
                            required: "Email é obrigatório",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email invalido."
                            }
                        })}
                        placeholder='Digite o seu e-mail'
                    />
                    {errors.email && <p className="z-10 pt-1 text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                { /**   <input
                    className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                    type="tel"
                    name="phone"
                    {...register("phone", {
                        required: "Telefone é obrigatório",
                        validate: {
                            checkLength: (value) => value.length == 12,
                        }
                    })}
                    placeholder='Digite o seu telefone'
                />
                {errors.phone?.type === "required" && (
                    <p className="text-red-500 text-xs italic">O número de telefone é origatório</p>
                )}
                {errors.phone?.type === "checkLength" && (
                    <p className="text-red-500 text-xs italic">
                        O número de ter no mínimo 12 digitos.
                    </p>
                )} **/}
                <div className="mb-6">
                    <PhoneInput

                        inputClassName='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        name="phone"
                        control={control}
                        rules={{
                            required: "Telefone é obrigatório",
                            validate: {
                                checkLength: (value) => value.length == 12,
                            }
                        }}
                        placeholder="Digite o número de telefone"
                    />
                    {errors.phone?.type === "required" && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">O número de telefone é origatório</p>
                    )}
                    {errors.phone?.type === "checkLength" && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">
                            O número de ter no mínimo 12 digitos.
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <input
                        className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        type="date"
                        name="dateofbirth"
                        {...register("dateofbirth", {
                             required: {
                                value: true,
                                message:"Data de nascimento é obrigatória",
                            },

                        })}
                        placeholder='Data de nascimento'
                    />
                    {errors.dateofbirth && <p className="z-10 pt-1 text-red-500 text-xs italic">{errors.dateofbirth.message}</p>}
                </div>
                <div className="mb-6">
                    <Select

                        classNames={{
                            menuButton: ({ isDisabled }) => (
                                `mb-6 w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ${isDisabled
                                    ? "bg-gray-200"
                                    : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                }`
                            ),
                            menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                            listItem: ({ isSelected }) => (
                                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected
                                    ? `text-white bg-blue-500`
                                    : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                }`
                            )
                        }}
                        placeholder="Selecione o cargo pretendito"
                        isClearable
                        options={positionList}
                        value={positionValue ? positionList.find(x => x.value === positionValue) : positionValue}
                        onChange={option => positionOnChange(option ? option.value : option)}
                        {...restPositionField}
                    />
                    {errors.position && <p className="z-10 pt-1 text-red-500 text-xs italic">{errors.position.message}</p>}
                </div>

                <div className="mb-6">
                    {watch("curriculo") ? (console.log("watch length",watch("curriculo").length)):(<></>)}
                    {!watch("curriculo") || watch("curriculo").length === 0 ? (<>
                        <label className='cursor-pointer text-center mb-6 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' for="arquivo">Upload do Currículo</label>
                        <input id="arquivo" name="arquivo"  {...register("curriculo", {
                             required: {
                                value: true,
                                message:"Currículo é obrigatório",
                            },

                        })} type="file" accept='application/pdf' />
                        {errors.curriculo && <p className="z-10 pt-1 text-red-500 text-xs italic">{errors.curriculo.message}</p>}
                    </>

                    ) : (<strong className=''>Currículo baixado: {watch('curriculo')[0].name}</strong>)}
                </div>
                <div className="mb-6">
                    <input
                        className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "A senha é obrigatória",
                            validate: {
                                checkLength: (value) => value.length >= 6,
                                matchPattern: (value) =>
                                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                        value
                                    )
                            }
                        })}
                        placeholder='Digite a sua senha'
                    />
                    {errors.password?.type === "required" && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">A senha é obrigatória</p>
                    )}
                    {errors.password?.type === "checkLength" && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">
                            A senha deve ter no mínimo 6 caracteres.
                        </p>
                    )}
                    {errors.password?.type === "matchPattern" && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">
                            A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula
                            ,um digito e um caracter especial.
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <input
                        className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                        type="password"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Repita a senha",
                            validate: (value) => {
                                if (watch("password") != value) {
                                    return "As senhas não são iguais";
                                }
                            }
                        })}
                        placeholder='Confirme a sua senha'
                    />
                    {errors.confirmPassword && (
                        <p className="z-10 pt-1 text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                    )}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default LoginForm
