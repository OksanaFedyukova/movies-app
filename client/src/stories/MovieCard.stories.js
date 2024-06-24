
import React from 'react';
import MovieCard from '../components/MovieCard';
import {movies} from './stub'

export default {
  title: 'Cards/MovieCard', // Título del grupo de componentes en Storybook
  component: MovieCard, // Componente de React asociado con esta historia
 

};

const Template = (args)=> <MovieCard {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  movie: movies[0],
  
}