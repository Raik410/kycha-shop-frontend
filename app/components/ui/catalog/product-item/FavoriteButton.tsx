import { useProfile } from '@/hooks/useProfile';
import { UserService } from '@/service/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['toggle favorite'],
    mutationFn: () => {
      return UserService.toggleFavorite(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get profile'] });
    },
  });

  console.log(profile, 'profile');

  // if (!profile) {
  //   return null;
  // }

  const isExists = profile?.favorites?.some((fav) => fav.id === productId);

  return (
    <div>
      <button className="text-primary" onClick={() => mutate()}>
        {isExists ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
      </button>
    </div>
  );
};

export default FavoriteButton;
