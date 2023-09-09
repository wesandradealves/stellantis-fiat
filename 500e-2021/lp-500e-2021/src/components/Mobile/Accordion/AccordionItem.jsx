import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Item, DividerItem } from './styles';
import { Colors } from '../../../styles';

function AccordionItem({
  title,
  children,
  handleOnClick,
  isActive,
  id
}) {
  console.log()

  return (
    <>

    <Item isOpen={isActive} data-open={isActive} is-open={isActive} >
      <header onClick={handleOnClick}>
        <FiChevronDown size={25} color={isActive ? Colors.white : Colors.blue100} />
        <span id={id}>{title}</span>
      </header>
      <main  >{children}</main>
    </Item>
    <DividerItem />
    </>
  );
}

export default AccordionItem;
