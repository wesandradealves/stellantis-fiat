import isReact from './react';
import isReactType from './react.type';
import isReactTypeEqual from './react.typeEqual';

import isReactClassComponent from './react.classComponent';
import isReactComponent from './react.component';
import isReactCompositeTypeElement from './react.compositeTypeElement';
import isReactDOMTypeElement from './react.domTypeElement';
import isReactElement from './react.element';
import isReactFnComponent from './react.fnComponent';

isReact.classComponent = isReactClassComponent;
isReact.component = isReactComponent;
isReact.compositeTypeElement = isReactCompositeTypeElement;
isReact.domTypeElement = isReactDOMTypeElement;
isReact.element = isReactElement;
isReact.fnComponent = isReactFnComponent;

isReact.react = isReact;
isReact.type = isReactType;
isReact.typeEqual = isReactTypeEqual;
export default isReact;
