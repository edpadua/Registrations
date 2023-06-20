import React from 'react'

import { useForm } from 'react-hook-form';

import { PhoneInput } from 'react-international-phone';

import flags from 'react-phone-number-input/flags'

/**import 'react-international-phone/style.css';**/

import "./Login.css"

function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='relative inline-block w-half'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                            type="text"
                            name="name"
                            {...register("name", {
                                required: "Nome é obrigatório",
                            })}
                            placeholder='Digite o seu nome'
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
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
                        />
                    </div>
                </div>
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
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
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
                        <p className="text-red-500 text-xs italic">O número de telefone é origatório</p>
                    )}
                    {errors.phone?.type === "checkLength" && (
                        <p className="text-red-500 text-xs italic">
                            O número de ter no mínimo 12 digitos.
                        </p>
                    )}
                <input
                    className='w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                    type="date"
                    name="dateofbirth"
                    {...register("dateofbirth", {
                        required: {
                            value: true,
                            message: "Data de nascimento é obrigatória",
                        },

                    })}
                    placeholder='Data de nascimento'
                />
                {errors.dateofbirth && <p className="text-red-500 text-xs italic">{errors.dateofbirth.message}</p>}
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
                    <p className="text-red-500 text-xs italic">A senha é obrigatória</p>
                )}
                {errors.password?.type === "checkLength" && (
                    <p className="text-red-500 text-xs italic">
                        A senha deve ter no mínimo 6 caracteres.
                    </p>
                )}
                {errors.password?.type === "matchPattern" && (
                    <p className="text-red-500 text-xs italic">
                        A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula
                        ,um digito e um caracter especial.
                    </p>
                )}

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
                    <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                )}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default LoginForm
