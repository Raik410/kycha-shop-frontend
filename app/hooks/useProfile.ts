import { UserService } from '@/service/user.service';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';

export const useProfile = () => {
  const { user } = useAuth();

  const { data, error, isError } = useQuery({
    queryKey: ['get profile'],
    queryFn: () => UserService.getProfile(),
    select: ({ data }) => data,
    enabled: !!user,
  });

  return { profile: data, error, isError };
};
