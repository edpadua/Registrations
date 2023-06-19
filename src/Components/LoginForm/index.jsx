import React from 'react'

import { useForm } from 'react-hook-form';



function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="email"
                    {...register("email", {
                        required: "Email é obrigatório",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email invalido."
                        }
                    })}
                />
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                <input
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
                />
                {errors.password?.type === "required" && (
                    <p className="errorMsg">A senha é obrigatória</p>
                )}
                {errors.password?.type === "checkLength" && (
                    <p className="errorMsg">
                        A senha deve ter no mínimo 6 caracteres.
                    </p>
                )}
                {errors.password?.type === "matchPattern" && (
                    <p className="errorMsg">
                        A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula
                        letter, digit, and special symbol.
                    </p>
                )}

                <input
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
                />
                {errors.confirmPassword && (
                    <p className="errorMsg">{errors.confirmPassword.message}</p>
                )}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default LoginForm
