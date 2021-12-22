export function ageDeclination(age) {
  const lastNumber = age % 10;
  const firstArray = [2, 3, 4];
  const secondArray = [5, 6, 7, 8, 9, 0];
  if (secondArray.includes(lastNumber)) return 'лет';
  if (firstArray.includes(lastNumber)) return 'года';

  return 'год';
}