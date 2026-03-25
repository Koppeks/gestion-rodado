import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '../ui/Button'
 
type ProfileType = 'salesman' | 'small_dealership' | 'big_dealership' | null
 
type FormSignupValues = {
    email: string
    password: string
}
 
const TOTAL_STEPS = 4
 
const monthlySalesOptions = [
    { value: '1-5', label: '1 – 5 autos' },
    { value: '6-15', label: '6 – 15 autos' },
    { value: '16-30', label: '16 – 30 autos' },
    { value: '30+', label: 'Más de 30 autos' },
]
 
const idealSalesOptions = [
    { value: '1-10', label: '1 – 10 autos' },
    { value: '11-25', label: '11 – 25 autos' },
    { value: '26-50', label: '26 – 50 autos' },
    { value: '50+', label: 'Más de 50 autos' },
]
 
function ProgressBar({ step }: { step: number }) {
    return (
        <div className="flex gap-1.5 mb-6">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{
                        background: i < step ? 'var(--primary)' : 'var(--line)',
                    }}
                />
            ))}
        </div>
    )
}
 
function SelectionCard({
    selected,
    onClick,
    children,
}: {
    selected: boolean
    onClick: () => void
    children: React.ReactNode
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full text-left px-4 py-3 rounded-lg border transition-all duration-150 cursor-pointer"
            style={{
                borderColor: selected ? 'var(--primary)' : 'var(--line)',
                background: selected ? 'color-mix(in srgb, var(--primary) 6%, transparent)' : 'var(--white)',
                color: 'var(--primary)',
            }}
        >
            {children}
        </button>
    )
}
 
// Step 1 – Profile type
function Step1({
    value,
    onChange,
}: {
    value: ProfileType
    onChange: (v: ProfileType) => void
}) {
    const options: { value: ProfileType; label: string; description: string }[] = [
        {
            value: 'salesman',
            label: 'Vendedor independiente',
            description: 'Trabajás por tu cuenta, sin concesionaria',
        },
        {
            value: 'small_dealership',
            label: 'Concesionaria pequeña',
            description: 'Equipo reducido, operación más ágil',
        },
        {
            value: 'big_dealership',
            label: 'Concesionaria grande',
            description: 'Múltiples vendedores y mayor volumen',
        },
    ]
 
    return (
        <div className="flex flex-col gap-2.5">
            {options.map((opt) => (
                <SelectionCard
                    key={opt.value}
                    selected={value === opt.value}
                    onClick={() => onChange(opt.value)}
                >
                    <span className="text-sm font-medium block">{opt.label}</span>
                    <span
                        className="text-xs block mt-0.5"
                        style={{ color: 'var(--primary-soft)' }}
                    >
                        {opt.description}
                    </span>
                </SelectionCard>
            ))}
        </div>
    )
}
 
// Step 2 – Current monthly sales
function Step2({
    value,
    onChange,
}: {
    value: string | null
    onChange: (v: string) => void
}) {
    return (
        <div className="flex flex-col gap-2.5">
            {monthlySalesOptions.map((opt) => (
                <SelectionCard
                    key={opt.value}
                    selected={value === opt.value}
                    onClick={() => onChange(opt.value)}
                >
                    <span className="text-sm font-medium">{opt.label}</span>
                </SelectionCard>
            ))}
        </div>
    )
}
 
// Step 3 – Ideal monthly sales
function Step3({
    value,
    onChange,
}: {
    value: string | null
    onChange: (v: string) => void
}) {
    return (
        <div className="flex flex-col gap-2.5">
            {idealSalesOptions.map((opt) => (
                <SelectionCard
                    key={opt.value}
                    selected={value === opt.value}
                    onClick={() => onChange(opt.value)}
                >
                    <span className="text-sm font-medium">{opt.label}</span>
                </SelectionCard>
            ))}
        </div>
    )
}
 
// Step 4 – Email & password
function Step4({
    register,
    errors,
}: {
    register: ReturnType<typeof useForm<FormSignupValues>>['register']
    errors: ReturnType<typeof useForm<FormSignupValues>>['formState']['errors']
}) {
    return (
        <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-(--primary)">Email</label>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full"
                    {...register('email', {
                        required: 'El email es requerido',
                        pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' },
                    })}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
            </div>
 
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-(--primary)">Contraseña</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full"
                    {...register('password', {
                        required: 'La contraseña es requerida',
                        minLength: { value: 8, message: 'Mínimo 8 caracteres' },
                    })}
                />
                {errors.password && (
                    <p className="text-xs text-red-500">{errors.password.message}</p>
                )}
            </div>
        </div>
    )
}
 
const stepMeta: Record<number, { title: string; subtitle: string }> = {
    1: {
        title: 'Contanos sobre vos',
        subtitle: '¿Cómo describís tu actividad?',
    },
    2: {
        title: 'Tu actividad actual',
        subtitle: '¿Cuántos autos vendés por mes aproximadamente?',
    },
    3: {
        title: 'Tu meta',
        subtitle: '¿Cuántos autos te gustaría vender por mes?',
    },
    4: {
        title: 'Creá tu cuenta',
        subtitle: 'Casi listo, ingresá tus datos de acceso',
    },
}
 
export const FormSignup = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [profileType, setProfileType] = useState<ProfileType>(null)
    const [currentSales, setCurrentSales] = useState<string | null>(null)
    const [idealSales, setIdealSales] = useState<string | null>(null)
 
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<FormSignupValues>({ mode: 'onBlur' })
 
    const canAdvance = () => {
        if (step === 1) return profileType !== null
        if (step === 2) return currentSales !== null
        if (step === 3) return idealSales !== null
        return true
    }
 
    const handleNext = async () => {
        if (step === 4) {
            const valid = await trigger()
            if (!valid) return
            handleSubmit(onSubmit)()
            return
        }
        if (canAdvance()) setStep((s) => s + 1)
    }
 
    const onSubmit = async (data: FormSignupValues) => {
        console.log({ profileType, currentSales, idealSales, ...data })
        navigate({ to: '/dashboard' })
    }
 
    const { title, subtitle } = stepMeta[step]
 
    return (
        <div className="bg-(--white) border border-(--line) rounded-xl p-8 w-full max-w-sm mx-auto">
            <ProgressBar step={step} />
 
            <div className="mb-6">
                <h1 className="text-(--primary) text-xl font-medium mb-1">{title}</h1>
                <p className="text-(--primary-soft) text-sm">{subtitle}</p>
            </div>
 
            <div className="mb-5">
                {step === 1 && (
                    <Step1 value={profileType} onChange={setProfileType} />
                )}
                {step === 2 && (
                    <Step2 value={currentSales} onChange={setCurrentSales} />
                )}
                {step === 3 && (
                    <Step3 value={idealSales} onChange={setIdealSales} />
                )}
                {step === 4 && <Step4 register={register} errors={errors} />}
            </div>
 
            <div className="flex gap-2">
                {step > 1 && (
                    <Button
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep((s) => s - 1)}
                        type="button"
                    >
                        Atrás
                    </Button>
                )}
                <Button
                    variant="default"
                    size="lg"
                    className="flex-1"
                    disabled={!canAdvance() || isSubmitting}
                    onClick={handleNext}
                    type="button"
                >
                    {step === TOTAL_STEPS
                        ? isSubmitting
                            ? 'Creando cuenta...'
                            : 'Crear cuenta'
                        : 'Continuar'}
                </Button>
            </div>
 
            <p className="text-center text-sm text-(--primary-soft) mt-5">
                ¿Ya tenés cuenta?{' '}
                <Link to="/auth/login" className="text-(--primary) font-medium">
                    Ingresar
                </Link>
            </p>
        </div>
    )
}