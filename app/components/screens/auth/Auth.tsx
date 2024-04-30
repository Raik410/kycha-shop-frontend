import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/input/Field';
import Loader from '@/components/ui/loader/Loader';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { IEmailPassword } from '@/store/user/user.interface';
import { validEmail } from '@/utils/validation/validation.email';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Auth = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();

  const { login, register } = useActions();

  const [type, setType] = useState<'Login' | 'Register'>('Login');

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === 'Login') {
      login(data);
    } else {
      register(data);
    }
    reset();
  };

  return (
    <Meta title="Auth" description="BlaBla">
      <section className="flex h-screen items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg shadow-sm bg-white p-8 m-auto"
        >
          <Heading className="text-3xl text-center mb-3">{type}</Heading>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                {...formRegister('email', {
                  required: 'Email is required',
                  pattern: {
                    value: validEmail,
                    message: 'Please enter a valid email address',
                  },
                })}
                placeholder="Email"
                error={errors.email?.message}
              ></Field>
              <Field
                {...formRegister('password', {
                  required: 'Password is required',
                  minLength: {
                    message: 'Password must be more than 6 characters',
                    value: 6,
                  },
                })}
                type="password"
                placeholder="Password"
                error={errors.password?.message}
              ></Field>
              <Button type="submit" className="text-md mt-4" variant="dark">
                Lets go
              </Button>
              <div>
                <button
                  type="button"
                  className="inline-block opacity-20 mt-3"
                  onClick={() => {
                    setType(type === 'Login' ? 'Register' : 'Login');
                  }}
                >
                  {type}
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
