import React, { useContext } from 'react';
import contextGlobal from '../context';

function ProgressRecipe() {
  const { progressRecipe } = useContext(contextGlobal);
  console.log(progressRecipe);
  return (
    <div>Ola</div>
  );
}

export default ProgressRecipe;
