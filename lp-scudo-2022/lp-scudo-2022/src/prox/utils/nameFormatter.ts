export const nameFormatter = (name: string) => {
  const fullName = name.trim().split(' ');
  const firstName = fullName[0];

  const lastName = fullName.slice(1, fullName.length).join(' ').trim();

  return {firstName, lastName};

}