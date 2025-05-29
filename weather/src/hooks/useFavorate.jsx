import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./uselocalStorage";

export function useFavoirate() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const queryClient = useQueryClient();

  const favoritesQuery = useQuery({
    queryKey: ["favorites"], // ✅ consistent key
    queryFn: () => favorites,
    initialData: favorites,
    staleTime: Infinity,
  });

  const addFavorites = useMutation({
    mutationFn: async (City) => {
      const newfavoritescity = {
        ...City,
        id: `${City.lat}.${City.lon}`,
        addedAt: Date.now(),
      };

      const exists = favorites.some((fav) => fav.id === newfavoritescity.id);
      if (exists) {
        return favorites;
      }

      const newfavorites = [...favorites, newfavoritescity].slice(0, 10);
      setFavorites(newfavorites); // ✅ fixed
      return newfavorites;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] }); // ✅ matches useQuery
    },
  });

  const removeFavoirties = useMutation({
    mutationFn: async (cityID) => {
      const newfavorites = favorites.filter((city) => city.id !== cityID);
      setFavorites(newfavorites);
      return newfavorites;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] }); // ✅ matches useQuery
    },
  });

  return {
    favorites: favoritesQuery.data,
    addFavorites,
    removeFavoirties,
    isFavorite: (lat, lon) =>
      favorites.some((city) => city.lat === lat && city.lon === lon), // ✅ fixed
  };
}
