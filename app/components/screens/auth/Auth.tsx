import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { IEmailPassword } from '@/store/user/user.interface';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Auth = () => {
  const { isLoading } = useAuth();

  const { login, register } = useActions();

  const [type, setType] = useState<'login' | 'register'>('login');

  const {
    register: formRegister,
    handleSubmit,
    formState,
    reset,
  } = useForm<IEmailPassword>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === 'login') {
      login(data);
    } else {
      register(data);
    }
    reset();
  };

  return (
    <Meta title="Auth" description="BlaBla">
      <Heading className="text-3xl">Auth</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Button className="text-3xl" variant="dark">
          Button
        </Button>
      </form>
    </Meta>
  );
};

export default Auth;
