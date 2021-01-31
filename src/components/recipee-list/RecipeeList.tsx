import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { loadRecipees, selectRecipeeList } from '../../store/ducks/recipees.duck';
import './recipee-list.scss';

export default function RecipeeList() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<String | undefined>(undefined);
  const onClick = (id: String) => setSelectedId(id === selectedId ? '' : id);
  const recipeeList = useSelector(selectRecipeeList);

  useEffect(() => {
    dispatch(loadRecipees());
  }, [dispatch]);

  return (
    <div className="recipeeList">
      {recipeeList.map((item, key) => (
        <Card key={key} 
          title={item.title}
          info={item.moreInfo}
          imageUrl={item.imageUrl}
          className="recipeeList__card" 
          onClick={() => onClick(item.id)} 
          showExtra={selectedId === item.id}>
        </Card>
      ))}
    </div>
  );
}
