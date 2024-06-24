
import React from 'react';
import MovieCardSelected from '../components/MovieCardSelected';
import {movies} from './stub'

export default {
  title: 'Cards/MovieCardSelected', 
  component: MovieCardSelected, 

};

const Template = (args)=> <MovieCardSelected {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  movie: movies[0],
  
}