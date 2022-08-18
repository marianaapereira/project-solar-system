import React from 'react';
import Title from './Title';
import planets from '../data/planets'; // importação da lista de planetas
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {
            planets.map(({ name, image }) => (
              <PlanetCard
                planetName={ name }
                planetImage={ image }
                key={ name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
