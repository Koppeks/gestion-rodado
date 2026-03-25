import { useForm } from 'react-hook-form'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/Button'

type FormLoginValues = {
    email: string
    password: string
}

export const FormLogin = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormLoginValues>({
    mode: 'onBlur'
    })
    const onSubmit = async (data: FormLoginValues) => {
        console.log(data)
        navigate({ to: '/dashboard' })
    }

    return (
        <div className="bg-(--white) border border-(--line) rounded-xl p-8 w-full max-w-sm mx-auto">
            <div className="mb-6">
                <h1 className="text-(--primary) text-xl font-medium mb-1">Bienvenido</h1>
                <p className="text-(--primary-soft) text-sm">Ingresá tus datos para continuar</p>
            </div>

            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-(--primary)">Email</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full"
                        {...register('email', {
                            required: 'El email es requerido',
                            pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                        })}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-(--primary)">Contraseña</label>
                        <Link to="/auth/recover-password" className="text-xs text-(--primary-soft)">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full"
                        {...register('password', { required: 'La contraseña es requerida' })}
                    />
                    {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                </div>

                <Button
                    variant="default"
                    size="lg"
                    className="w-full mt-1"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Ingresando...' : 'Ingresar'}
                </Button>

            </form>

            <p className="text-center text-sm text-(--primary-soft) mt-5">
                ¿No tenés cuenta?{' '}
                <Link to="/auth/signup" className="text-(--primary) font-medium">
                    Crear cuenta
                </Link>
            </p>

        </div>
    )
}