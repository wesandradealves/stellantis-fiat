import Aventure from '../../Sections/Aventure/Aventure';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import { Button, Container } from './styles';

const Tabs = ({ data, isOpen, handleTab, open }) => {
  return (
    <Container open={open} id="tudo-sobre-a-toro">
      <h1>TEM TUDO QUE VOCÊ PRECISA PARA UMA NOVA AVENTURA</h1>
      <header>
      
        {data.map(item => (
          <Button
            isActive={item.brand === isOpen.item}
            onClick={() => {
              handleTab({item:item.brand, direction:'first'});
              DataLayer.push(
                'TudoSobre_ClicouFeature',
                item.brand
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
              );
            }}
            key={`tab-${item.brand}`}
          >
            <span>{item.brand}</span>
          </Button>
        ))}
      </header>

      {data.map(
        (item, index) =>
          item.brand === isOpen.item && (
            <Aventure
            handleNextId={
                !data[index + 1]
                  ? data[0].brand
                  : data[index + 1].brand
              }
            handlePreviousId={
                !data[index - 1]
                  ? data[data.length - 1].brand
                  : data[index - 1].brand
              }

              isOpen={isOpen}
              handleNextPrevious={handleTab}
              key={`aventure-${item.data}`}
              data={item.data}
              open={open}
            />
          ), 
      )}
    </Container>
    
  );
};

export default Tabs;
