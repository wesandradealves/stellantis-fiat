import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Item } from './styles';
import { Colors } from '../../styles';

function AccordionItem({
  title,
  children,
  handleOnClick,
  isActive,
}) {
  return (
    <Item isOpen={isActive}>
      <header onClick={handleOnClick}>
        <FiChevronDown size={32} color={Colors.yellow} />
        <span>{title}</span>
      </header>

      <main>{children}</main>
    </Item>
  );
}

export default AccordionItem;
