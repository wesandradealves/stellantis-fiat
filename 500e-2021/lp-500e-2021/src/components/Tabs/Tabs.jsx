import React from 'react';
import LastFold from '../../Sections/Desktop/LastFold';
import {
  Container,
  ArrowDown,
  TabsContainer,
  Tab,
  TitleBox,
} from './styles';
import { ReactAnchorLink } from '../../Sections/Mobile/Services/styles';
import { cliqueBotao_DataLayer } from '../../tracks';
import { useState } from 'react';

const Tabs = ({ data, isOpen, handleTab, open }) => {

  const sectionID = 'tudo-sobre-o-fiat-500e'
  const [activeTab, setActiveTab] = useState(data[0].brand)
  return (
    <Container open={open} id={sectionID}>
      <TitleBox>
        <span>
          {' '}
          Tudo o que você precisa saber do seu{' '}
          <strong> próximo carro elétrico</strong>{' '}
        </span>

        <ReactAnchorLink
          id={sectionID}
          href={`#${sectionID}`}
        >
          <ArrowDown />
        </ReactAnchorLink>
      </TitleBox>
      <TabsContainer id="tudo-sobre-o-fiat-500e-tabs">
        {data.map(item => (
          <Tab
            key={item.id}
            id={item.anchor}
            open={open}
            isActive={item.id === isOpen}
            onClick={() => {
              setActiveTab(item.brand)
              handleTab(item.id);
              cliqueBotao_DataLayer(sectionID ,item.brand);
            }}
          >
            <span>{item.brand}</span>
          </Tab>
        ))}
      </TabsContainer>
      {data.map(
        (item , index) =>
          item.id === isOpen && 
          (
            <>
            <LastFold
              key={item.id}
              data={item.data}
              open={open}
              changeTab={handleTab}
              activeTab={activeTab}
            />
            </>
          ),
      )}
    </Container>
  );
};

export default Tabs;
