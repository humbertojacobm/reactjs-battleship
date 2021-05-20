class OceanBlock {
  constructor(
    index,
    rowName,
    columNumber,
    isShip,
    isActiveShip,
    shipKey,
    isAttacked
  ) {
    this.index = index;
    this.rowName = rowName;
    this.columNumber = columNumber || 0;
    this.isShip = isShip || false;
    this.isActiveShip = isActiveShip || false;
    this.shipKey = shipKey || "0000";
    this.isAttacked = isAttacked || false;
  }

  Display() {
    return `${this.rowName}${this.columNumber.toString()}`;
  }
}

export const abcArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

export const diffBetweenArray = (baseArray, removeArray) =>
  baseArray.filter((item) => !removeArray.some((fItem) => fItem === item));

export default OceanBlock;
