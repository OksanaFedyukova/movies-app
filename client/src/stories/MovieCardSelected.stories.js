
import MovieCardSelected from '../components/MovieCardSelected';
import {movies} from './stub'

export default {
  title: 'Cards/MovieCardSelected', // Título del grupo de componentes en Storybook
  component: MovieCardSelected, // Componente de React asociado con esta historia
 

};

const Template = (args)=> <MovieCardSelected {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  movie: movies[0],
  
}