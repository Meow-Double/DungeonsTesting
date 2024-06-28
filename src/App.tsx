import { Button, Search } from '@/shared';

export const App = () => {
  return (
    <div className='container'>
      <div className='inner'>
        <Search placeholder='Поиск ...' />
        <Button variant='primary'>Найти</Button>
      </div>
    </div>
  );
};
