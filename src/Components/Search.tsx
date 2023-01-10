import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ONE_USER } from '../Graphql/Queries';
const Search = () => {
  const [id, setId] = useState('');
  const { data, refetch } = useQuery(GET_ONE_USER, { variables: { id: id } });

  // const showdata=()=>{
  //   data.getOneUser({ variables: { id: id } })}
  // }

  return (
    <div>
      <input
        type="text"
        placeholder="please input your id"
        onChange={(e) => setId(e.target.value)}
      />
      <button>search</button>

      {data && id && (
        <div>
          {data?.getOneUser.id} | {data?.getOneUser.name} |{' '}
          {data?.getOneUser.username} | {data?.getOneUser.password}
        </div>
      )}
    </div>
  );
};

export default Search;
