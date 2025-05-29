import React from 'react';
import { useFavoirate } from '@/hooks/useFavorate';
import { Button } from './ui/button';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

function FavoriteButton({ data }) {
  const { isFavorite, addFavorites, removeFavoirties } = useFavoirate();
  const isCurrentlyFavorites = isFavorite(data.coord.lat, data.coord.lon);

  const handleToggleFunction = () => {
    if (isCurrentlyFavorites) {
      removeFavoirties.mutate(`${data.coord.lat}-${data.coord.lon}`);
      toast.error(`Removed ${data.name} from favorites`);
    } else {
      addFavorites.mutate({
        name: data.name,
        lat: data.coord.lat,
        lon: data.coord.lon,
        country: data.sys.country,
      });
      toast.success(`Added ${data.name} to favorites`);
    }
  };

  return (
 <Button
      variant={isCurrentlyFavorites ? 'default' : 'outline'}
      size="icon"
      className={isCurrentlyFavorites ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : ''}
      onClick={handleToggleFunction}
    >
      <Star className={`h-4 w-4 ${isCurrentlyFavorites ? 'fill-current' : ''}`} />
    </Button>
  );
}

export default FavoriteButton;