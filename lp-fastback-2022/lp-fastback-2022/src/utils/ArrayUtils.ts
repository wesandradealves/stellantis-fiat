const moveIndex = (array:[], from:number, to:number):[] => {
	const element = array[from];
	array.splice(from, 1);
	array.splice(to, 0, element);
	return array;
}
  
export default  moveIndex;
