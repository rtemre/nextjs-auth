import { queryOptions } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/types/enum';

export const fetchSpells = queryOptions({
  queryKey: [QUERY_KEYS.DUMMY],
  queryFn: async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`, {});
    return await data.json();
  },
});
